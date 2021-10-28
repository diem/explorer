# Diem Explorer

The Diem Explorer is an open-source web-based UI for Diem flavored blockchains which is going to provide a suite of introspection tools for the blockchain.

## Goals

* Make exploration of on-chain data simple, fast and accessible
* Expose web-based tools for interacting with the Diem Blockchain

## Getting Started

* Install yarn, make
* Run `make start` to start the web app locally

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
