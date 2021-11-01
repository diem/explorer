export interface DiemInCirculation {
  currency: string
  total_net_value: number
  timestamp: string
}

export interface DiemCurrencies {
  xus: DiemInCirculation[]
  xdx: DiemInCirculation[]
}
