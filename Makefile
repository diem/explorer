explr_pid						:= $(shell lsof -i :3000 | grep node | awk '{print $$2}')
wrmock_pid						:= $(shell lsof -i :8888 | grep java | awk '{print $$2}')

.PHONY: no_targets__ list
no_targets__:
list:
	sh -c "$(MAKE) -p no_targets__ | awk -F':' '/^[a-zA-Z0-9][^\$$#\/\\t=]*:([^=]|$$)/ {split(\$$1,A,/ /);for(i in A)print A[i]}' | grep -v '__\$$' | sort"

.PHONY : lint lintfix start wiremock_start wiremock_stop wiremock_start_for_e2e hasura_start hasura_stop start_for_e2e stop sleep1 acceptance_test acceptance_test_ui ship test run_acceptance_test run_acceptance_test_ui
start:
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
	@npx wiremock --port 8888 --root-dir end2end/wiremock > end2end/logs/wiremock.log

wiremock_start_for_e2e: hasura_stop wiremock_stop
	@screen -m -d -S wiremock make wiremock_start & > end2end/logs/ui.log

stop:
ifdef explr_pid
	@kill -9 $(explr_pid)
else
	@echo "Explorer is either not running, or isn't using port 3000" | true
endif

start_for_e2e: stop
	@screen -m -d -S ui make start &

lintfix:
	@npx eslint --fix src/**/*.?s src/**/*.?sx end2end/**/*.js

lint:
	@npx eslint src/**/*.?s src/**/*.?sx end2end/**/*.js

sleep1:
	@sleep 5

cleanup_acceptance_test:
	@screen -X -S ui quit && screen -X -S wiremock quit

run_acceptance_test: wiremock_start_for_e2e start_for_e2e
	@codeceptjs run --steps --config codecept.conf.js

run_acceptance_test_ui: wiremock_start_for_e2e start_for_e2e
	@codecept-ui --config codecept.conf.js --app

acceptance_test: wiremock_start_for_e2e start_for_e2e run_acceptance_test cleanup_acceptance_test
	@echo "👍"

acceptance_test_ui : wiremock_start_for_e2e start_for_e2e run_acceptance_test_ui cleanup_acceptance_test
	@echo "👍"

ship: lint integration_test sleep1 acceptance_test
	@git push

test: integration_test acceptance_test
	@echo "👍"

integration_test:
	@node node_modules/jest/bin/jest.js --colors --verbose
