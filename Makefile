explr_pid						:= $(shell lsof -i :3000 | grep node | awk '{print $$2}')
wrmock_pid						:= $(shell lsof -i :8888 | grep java | awk '{print $$2}')



# Start / Stop Command Aliases
.PHONY: start start_ui hasura_stop hasura_start wiremock_start stop wiremock_stop stop_ui

start: stop hasura_start start_ui
	@echo "✅  UI -- started in dev mode" && echo "✅  Hasura -- started in background" && echo "The app is running at http://localhost:3000"

start_for_e2e: _ensure_logs_dir stop _start_ui_for_e2e _wiremock_start_for_e2e _await_e2e_deps
	@echo "✅  UI -- started in test mode\n✅  Wiremock -- started in background\nLogs can be found in end2end/logs\nThe app is running at http://localhost:3000"

start_ui:
	@yarn run dev

hasura_stop:
	@docker-compose -f docker-compose.yml down > /dev/null 2>&1 && echo "Hasura is down"

hasura_start: wiremock_stop
	@docker-compose -f docker-compose.yml down > /dev/null 2>&1 && docker-compose -f docker-compose.yml up -d > /dev/null 2>&1 && echo "Hasura is up"

wiremock_start: wiremock_stop
	@yarn run wiremock --port 8888 --root-dir end2end/wiremock > end2end/logs/wiremock.log

stop: hasura_stop wiremock_stop stop_ui
	@echo "All services stopped 👍"

wiremock_stop:
ifdef wrmock_pid
	@kill -9 $(wrmock_pid)
else
	@echo "Wiremock is either not running, or isn't using port 8888" | true
endif

stop_ui:
ifdef explr_pid
	@kill -9 $(explr_pid)
else
	@echo "Explorer is either not running, or isn't using port 3000" | true
endif

# General Utility Command Aliases
.PHONY: no_targets__ list fmt lint lintfix integration_test test ship build generate_gql_client contract_test

no_targets__:
list:
	@echo "These are the goals make knows:\n" && sh -c "$(MAKE) -p no_targets__ | awk -F':' '/^[a-zA-Z0-9][^\$$#\/\\t=]*:([^=]|$$)/ {split(\$$1,A,/ /);for(i in A)print A[i]}' | grep -v '__\$$' | sort"

fmt:
	@yarn run prettier --write 'src/**'

lint:
	@yarn run eslint 'src/**/*.?s' 'src/**/*.?sx' 'end2end/**/*.js'

lintfix: fmt
	@yarn run eslint --fix 'src/**/*.?s' 'src/**/*.?sx' 'end2end/**/*.js'

# make integration_test 							#=> run all tests
# make integration_test name=your_test_name_here 	#=> run tests matching name pattern
integration_test:
ifdef name
	VITE_BLOCKCHAIN_REST_URL=https://fn0api.premainnet.aosdev.diem.com node node_modules/jest/bin/jest.js --colors --verbose --testNamePattern="${name}" && echo "integration tests complete 👍"
else
	@VITE_BLOCKCHAIN_REST_URL=https://fn0api.premainnet.aosdev.diem.com node node_modules/jest/bin/jest.js --colors --verbose && echo "integration tests complete 👍"
endif

test: integration_test contract_test acceptance_test
	@echo "integration tests, contract tests and acceptance tests complete 👍"

ship: lint integration_test contract_test acceptance_test
	@git push && docker run -it --rm jmhobbs/terminal-parrot:latest -loops 12 -delay 25 && echo "ship complete 👍"

build:
	@yarn run tsc && yarn run vite build

contract_test : generate_gql_client
	@yarn run tsc && echo "contract tests complete 👍"

generate_gql_client: hasura_start
	@bash scripts/retry_until_success.sh 'yarn generate-gql-client'



# Acceptance Test Command Aliases
.PHONY: acceptance_test acceptance_test_ui start_for_e2e
.PHONY: _run_acceptance_test _run_acceptance_test_ui _ensure_logs_dir _wiremock_start_for_e2e _start_ui_for_e2e
.PHONY: _await_e2e_deps _cleanup_acceptance_test

acceptance_test: start_for_e2e _run_acceptance_test _cleanup_acceptance_test
	@echo "acceptance tests complete 👍"

acceptance_test_ui: generate_gql_client start_for_e2e _run_acceptance_test_ui _cleanup_acceptance_test
	@echo "acceptance test complete 👍"

_start_ui_for_e2e:
	@screen -m -d -S ui yarn run dev --mode="test" &

_await_e2e_deps:
	@bash scripts/wait_for_port.sh 3000 && bash scripts/wait_for_port.sh 8888 && sleep 1

_cleanup_acceptance_test:
	@screen -X -S ui quit && screen -X -S wiremock quit

_run_acceptance_test:
	@yarn codeceptjs run --steps --config codecept.conf.js

_run_acceptance_test_ui:
	@yarn codecept-ui --config codecept.conf.js --app

_ensure_logs_dir:
	@mkdir -p end2end/logs

_wiremock_start_for_e2e:
	@screen -m -d -S wiremock make wiremock_start &  > end2end/logs/wiremock.log
