variable "image_repo" {
  description = "The docker repo containing the image for explorer"
}
variable "image_tag" {
  description = "The docker image tag"
}
variable "hostname" {
  description = "The hostname where this would be deployed"
}
variable "ingress_annotations" {
  description = "The list of annotations to be applied on the ingress resource"
  default = {
    # By default using nginx ingress class and cert-manager for certificate management
    "kubernetes.io/ingress.class"               = "nginx"
    "cert-manager.io/cluster-issuer"            = "letsencrypt-prod"
    "acme.cert-manager.io/http01-ingress-class" = "nginx"
  }
}
variable "chain" {
  description = "The blockchain type (eg: DPN, experimental)"
}
variable "env" {
  description = "The blockchain environment (eg: testnet, premainnet, mainnet)"
}
variable "base_url" {
  description = "The base url for this web app"
}
variable "graphql_url" {
  description = "The graphql indexer endpoint used"
}
variable "blockchain_jsonrpc_url" {
  description = "The jsonrpc endpoint used"
}
variable "blockchain_restapi_url" {
  description = "The rest api endpoint used"
}
