/* eslint-disable camelcase */

export type KnownCurrency = 'XUS' | 'XDX'
export type KnownCurrencyBlockchainAddress = '0x1::XUS::XUS'

export type Resource = Resources.Resource
export type Module = Modules.Module

export type DiemAccountResource = Resources.DiemAccount.DiemAccount

export function isDiemAccountResource(resource: Resource): boolean {
  return resource.type === '0x1::DiemAccount::DiemAccount'
}

export type BalanceResource = Resources.DiemAccount.Balance

export function isBalanceResource(resource: Resource): boolean {
  return /0x1::DiemAccount::Balance<0x1::(\w+)::\1>/.test(resource.type)
}

export function getCurrency(balanceResource: BalanceResource): KnownCurrency {
  const match = balanceResource.type.match(
    /0x1::DiemAccount::Balance<0x1::(\w+)::\1>/
  )!
  return match[1] as KnownCurrency
}

export type ExposedFunction = Modules.ExposedFunction
export type Struct = Modules.Struct

namespace Resources {
  export type Resource = KnownResource | UnknownResource

  interface UnknownResource {
    type: string
    value: Record<string, string | {}>
  }

  type KnownResource = DiemAccount.Resource | Roles.Resource

  export namespace DiemAccount {
    export type Resource = DiemAccount | Balance

    export interface DiemAccount extends UnknownResource {
      type: '0x1::DiemAccount::DiemAccount'
      value: {
        sequence_number: string
        authentication_key: string
        received_events: {
          counter: string,
          guid: string,
        }
        sent_events: {
          counter: string,
          guid: string,
        }
        [key: string]: string | {}
      }
    }

    export type Balance = AbstractBalance<KnownCurrency>

    interface AbstractBalance<TCurrency extends KnownCurrency>
      extends UnknownResource {
      type: `0x1::DiemAccount::Balance<0x1::${TCurrency}::${TCurrency}>`
      value: { coin: { value: string } }
    }
  }

  namespace Roles {
    export type Resource = RoleId

    export interface RoleId {
      type: '0x1::Roles::RoleId'
      value: { role_id: string }
    }
  }
}

namespace Modules {
  export type Module = {
    bytecode: string
    abi: {
      structs: Struct[]
      exposed_functions: ExposedFunction[]
      [key: string]: string | {}
    }
  }

  export interface Struct {
    name: String
    fields: { name: string; type: string }[]
    [key: string]: string | {}
  }

  export interface ExposedFunction {
    name: String
    visibility: 'public'
    generic_type_params: unknown[]
    params: string[]
    return: string[]
  }
}
