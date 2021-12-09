# Diem Explorer

The Diem Explorer is an open-source web-based UI for Diem flavored blockchains which is going to provide a suite of introspection tools for the blockchain.

## Goals

* Make exploration of on-chain data simple, fast and accessible
* Expose web-based tools for interacting with the Diem Blockchain

## Getting Started

* Install yarn, make
* Run `yarn install` to install dependencies
* Run `make start` to start the web app locally
* Configure Hasura at [http://localhost:8888/console]

### Configuring Hasura

Hasura must be configured to connect to a database.

TODO: describe what this database is and where to get the credentials.

Track the following tables and views:
- `accounts`
- `accounts_balances`
- `burn_events`
- `diem_in_circulation_dynamic`
- `diem_in_circulation_realtime_aggregates`
- `gas_payments`
- `preburn_events`
- `realtime_account_balances`
- `receivedmint_events`
- `sentpayment_events`
- `transactions`

### Using the Makefile

Explorer uses `make` to automate development tasks.
In general, every development task related to the application lifecycle can be controlled via `make`.
The following commands are provided:

#### General
- `start`: Launch the application and all runtime dependencies for ordinary local development
- `stop`: Shut down the application and all runtime dependencies
- `test`: Run all tests.
Equivalent to running `integration_test`, `contract_test`, and `acceptance_test`
- `lint`: Lint all application code.
Returns a nonzero exit code if any issues are found
- `ship`: Lints and tests all code, then, if successful, execute `git push`
- `build`: Compile the application for deployment
- `fmt`: Autoformat all application code with Prettier
- `list`: Display all available Make targets
- `lintfix`: Lint all application code and automatically fix issues that can be fixed.
Returns a nonzero exit code if any unfixable issues are found

#### Less Commonly Used
- `integration_test`: Run Jest unit tests for the application
- `contract_test`: Validate the GraphQL client is being used without type errors
- `acceptance_test`: Run Codecept UI tests headlessly.
In this configuration, the application uses Wiremock for all runtime dependencies
- `acceptance_test_ui`: Run Codecept UI tests with the Codecept runner
- `start_for_e2e`: Start the application and the dependencies that are used for acceptance tests (i.e. Wiremock)
- `hasura_start`: Start the Hasura server, for local development
- `hasura_stop`: Stop the Hasura server
- `wiremock_start`: Start the Wiremock server, for acceptance tests
- `wiremock_stop`: Stop the Wiremock server
- `generate_diem_client`: Regenerate the auto-generated Diem blockchain client from the OpenAPI documentation.
Edit the Makefile directly if you need to change the URL of the `openapi.yaml` file used.
- `generate_gql_client`: Regenerate the auto-generated Zeus GraphQL client from the configuration of the Hasura server

## Helm Chart

[Helm](https://helm.sh) must be installed to use the charts.
Please refer to Helm's [documentation](https://helm.sh/docs/) to get started.

Once Helm is set up properly, add the repo as follows:

```console
helm repo add diem-explorer https://diem.github.io/explorer
```

You can then run `helm search repo diem-explorer` to see the charts.

## Release new helm chart

- Land changes on Main branch
- Build the helm package
  ```
  helm package helm/
  helm repo index . --url https://diem.github.io/explorer/
  ```
- Add the new package binary on `gh-pages` branch and update index
  ```
  git checkout gh-pages
  helm repo index . --url https://diem.github.io/explorer/
  # git add should pickup the changes of the new binary file, and the index.yaml file
  git add .
  git commit -m "[helm-chart] release new version"
  ```
- Push the changes to `gh-pages` branch
