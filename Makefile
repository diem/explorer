explr_pid						:= $(shell lsof -i :3000 | grep node | awk '{print $$2}')
wrmock_pid						:= $(shell lsof -i :8888 | grep java | awk '{print $$2}')

.PHONY: no_targets__ list
no_targets__:
list:
	sh -c "$(MAKE) -p no_targets__ | awk -F':' '/^[a-zA-Z0-9][^\$$#\/\\t=]*:([^=]|$$)/ {split(\$$1,A,/ /);for(i in A)print A[i]}' | grep -v '__\$$' | sort"

.PHONY : lint lintfix start wiremock_start wiremock_stop wiremock_start_for_e2e hasura_start hasura_stop start_for_e2e stop sleep1 acceptance_test acceptance_test_ui ship test
start:
	yarn run dev

hasura_stop:
	cd ../analytics/hasura && docker-compose down && echo "Hasura is down"

hasura_start: wiremock_stop hasura_stop
	cd ../analytics/hasura && docker-compose up -d && echo "Hasura is up"

wiremock_stop:
ifdef wrmock_pid
	kill -9 $(wrmock_pid)
else
	@echo "Wiremock is either not running, or isn't using port 8080" | true
endif

wiremock_start: wiremock_stop
	npx wiremock --port 8888

wiremock_start_for_e2e: hasura_stop wiremock_stop
	open -a Terminal.app ../scripts/start_diem_explorer_wiremock.sh

stop:
ifdef explr_pid
	kill -9 $(explr_pid)
else
	@echo "Explorer is either not running, or isn't using port 3000" | true
endif

start_for_e2e: stop
	open -a Terminal.app ../scripts/start_diem_explorer_ui.sh

lintfix:
	npx eslint --fix src/**/*.?s src/**/*.?sx end2end/**/*.js

lint:
	npx eslint src/**/*.?s src/**/*.?sx end2end/**/*.js

sleep1:
	sleep 10

acceptance_test: wiremock_start_for_e2e start_for_e2e sleep1
	yarn run codeceptjs

acceptance_test_ui: wiremock_start_for_e2e start_for_e2e
	yarn run codeceptjs:ui

ship: lint integration_test sleep1 acceptance_test
	git push

test: integration_test acceptance_test
	echo "👍"

integration_test:
	node node_modules/jest/bin/jest.js --colors --verbose --runTestsByPath src/*
