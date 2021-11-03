explr_pid						:= $(shell lsof -i :3000 | grep node | awk '{print $$2}')
wrmock_pid						:= $(shell lsof -i :8888 | grep java | awk '{print $$2}')

.PHONY: no_targets__ list
.PHONY: lint lintfix start wiremock_start wiremock_stop wiremock_start_for_e2e hasura_start hasura_stop start_for_e2e
.PHONY: stop sleep1 acceptance_test acceptance_test_ui ship test run_acceptance_test run_acceptance_test_ui
.PHONY: start_ui_for_e2e start_ui

no_targets__:
list:
	sh -c "$(MAKE) -p no_targets__ | awk -F':' '/^[a-zA-Z0-9][^\$$#\/\\t=]*:([^=]|$$)/ {split(\$$1,A,/ /);for(i in A)print A[i]}' | grep -v '__\$$' | sort"


start: hasura_start start_ui
	@echo "✅  UI -- started in dev mode" && echo "✅  Hasura -- started in background" && echo "The app is running at http://localhost:3000"

start_ui: stop
	@yarn run dev

hasura_stop:
	@docker-compose -f docker-compose.yml down && echo "Hasura is down"

hasura_start: wiremock_stop hasura_stop
	@docker-compose -f docker-compose.yml up -d && echo "Hasura is up"

wiremock_stop:
ifdef wrmock_pid
	@kill -9 $(wrmock_pid)
else
	@echo "Wiremock is either not running, or isn't using port 8888" | true
endif

wiremock_start: wiremock_stop
	@yarn run wiremock --port 8888 --root-dir end2end/wiremock > end2end/logs/wiremock.log

wiremock_start_for_e2e: hasura_stop wiremock_stop
	@screen -m -d -S wiremock make wiremock_start & > end2end/logs/ui.log

stop:
ifdef explr_pid
	@kill -9 $(explr_pid)
else
	@echo "Explorer is either not running, or isn't using port 3000" | true
endif

start_ui_for_e2e: stop
	@screen -m -d -S ui yarn run dev --mode="test" &

fmt:
	@yarn run prettier --write 'src/**'

lintfix: fmt
	@yarn run eslint --fix 'src/**/*.?s' 'src/**/*.?sx' 'end2end/**/*.js'

start_for_e2e: start_ui_for_e2e wiremock_start_for_e2e
	@echo "✅  UI -- started in test mode\n✅  Wiremock -- started in background\nLogs can be found in end2end/logs\nThe app is running at http://localhost:3000"

lint:
	@yarn run eslint 'src/**/*.?s' 'src/**/*.?sx' 'end2end/**/*.js'

sleep1:
	@sleep 5

cleanup_acceptance_test:
	@screen -X -S ui quit && screen -X -S wiremock quit

run_acceptance_test: wiremock_start_for_e2e start_for_e2e
	@yarn codeceptjs run --steps --config codecept.conf.js

run_acceptance_test_ui: wiremock_start_for_e2e start_for_e2e
	@yarn codecept-ui --config codecept.conf.js --app

acceptance_test: start_for_e2e run_acceptance_test cleanup_acceptance_test
	@echo "👍"

acceptance_test_ui : start_for_e2e run_acceptance_test_ui cleanup_acceptance_test
	@echo "👍"

ship: lint integration_test sleep1 acceptance_test
	@git push

test: integration_test acceptance_test
	@echo "👍"

integration_test:
	@VITE_BLOCKCHAIN_REST_URL=https://fn0api.premainnet.aosdev.diem.com node node_modules/jest/bin/jest.js --colors --verbose

build:
	@yarn run tsc && yarn run vite build
