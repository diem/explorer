variable "image_repo" {
  description = "The docker repo containing the image for explorer"
}
variable "image_tag" {
  description = "The docker image tag"
}
variable "hostname" {
  description = "The hostname where this would be deployed"
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
  default     = ""
}
variable "blockchain_jsonrpc_url" {
  description = "The jsonrpc endpoint used"
}
variable "blockchain_restapi_url" {
  description = "The rest api endpoint used"
}

# service account
variable "create_service_account" {
  description = "Whether to create service account"
}
variable "service_account_name" {
  description = "Name of service account; creates if create_service_account set"
}
variable "service_account_annotations" {
  description = "Service account annotations as a map"
}

# # ingress
variable "create_ingress" {
  description = "Whether to create a kubernetes ingress"
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
variable "ingress_type" {
  description = "Supports ALB and NGINX"
}

# service
variable "service_type" {
  default = "ClusterIP"
}
variable "external_traffic_policy" {
  default = ""
}
variable "load_balancer_source_ranges" {
  default = []
}
variable "service_annotations" {
  default = {}
}
