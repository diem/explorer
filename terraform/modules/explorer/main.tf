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
      env = {
        chain                  = var.chain
        env                    = var.env
        base_url               = var.base_url
        graphql_url            = var.graphql_url
        blockchain_jsonrpc_url = var.blockchain_jsonrpc_url
        blockchain_restapi_url = var.blockchain_restapi_url
      }
      serviceAccount = {
        create = var.create_service_account
        name = var.service_account_name
        annotations = var.service_account_annotations
      }
      ingress = {
        create = var.create_ingress
        annotations = var.ingress_annotations
        type = var.ingress_type
      }
      service = {
        type = var.service_type
        externalTrafficPolicy = var.external_traffic_policy
        loadBalancerSourceRanges = var.load_balancer_source_ranges
        annotations = var.service_annotations
      }
    }),
  ]
}
