resource "helm_release" "explorer" {
  name  = "explorer"
  chart = "${path.module}/../../../helm"
  wait  = false
  set {
    name  = "timestamp"
    value = timestamp()
  }
  values = [
    jsonencode({
      repo               = var.image_repo
      tag                = var.image_tag
      hostname           = var.hostname
      ingressAnnotations = var.ingress_annotations
      env = {
        chain                  = var.chain
        env                    = var.env
        base_url               = var.base_url
        graphql_url            = var.graphql_url
        blockchain_jsonrpc_url = var.blockchain_jsonrpc_url
        blockchain_restapi_url = var.blockchain_restapi_url
      }
    }),
  ]
}
