export const parentVASPResource = {
  type: {
    type: 'struct',
    address: '0x1',
    module: 'VASP',
    name: 'ParentVASP',
    generic_type_params: []
  },
  value: {
    num_children: '8192'
  }
}
export const eventHandleGeneratorResource = {
  type: {
    type: 'struct',
    address: '0x1',
    module: 'Event',
    name: 'EventHandleGenerator',
    generic_type_params: []
  },
  value: {
    addr: '0xbd3c1801820aa917993888b2fa8d8c0e',
    counter: '4'
  }
}
export const rolesResource = {
  type: {
    type: 'struct',
    address: '0x1',
    module: 'Roles',
    name: 'RoleId',
    generic_type_params: []
  },
  value: {
    role_id: '5'
  }
}
export const xdxBalanceResource = {
  type: {
    type: 'struct',
    address: '0x1',
    module: 'DiemAccount',
    name: 'Balance',
    generic_type_params: [
      {
        type: 'struct',
        address: '0x1',
        module: 'XDX',
        name: 'XDX',
        generic_type_params: []
      }
    ]
  },
  value: {
    coin: {
      value: '1234'
    }
  }
}
export const xusBalanceResource = {
  type: {
    type: 'struct',
    address: '0x1',
    module: 'DiemAccount',
    name: 'Balance',
    generic_type_params: [
      {
        type: 'struct',
        address: '0x1',
        module: 'XUS',
        name: 'XUS',
        generic_type_params: []
      }
    ]
  },
  value: {
    coin: {
      value: '5678'
    }
  }
}
export const diemAccountResource = {
  type: {
    type: 'struct',
    address: '0x1',
    module: 'DiemAccount',
    name: 'DiemAccount',
    generic_type_params: []
  },
  value: {
    authentication_key: '0x16973acfaa51751234cdaffb3563b665bd3c1801820aa917993888b2fa8d8c0e',
    key_rotation_capability: {
      vec: [
        {
          account_address: '0xbd3c1801820aa917993888b2fa8d8c0e'
        }
      ]
    },
    received_events: {
      counter: '43254',
      guid: '0x0200000000000000bd3c1801820aa917993888b2fa8d8c0e'
    },
    sent_events: {
      counter: '8192',
      guid: '0x0300000000000000bd3c1801820aa917993888b2fa8d8c0e'
    },
    sequence_number: '89647663',
    withdraw_capability: {
      vec: [
        {
          account_address: '0xbd3c1801820aa917993888b2fa8d8c0e'
        }
      ]
    }
  }
}
export const freezingBitResource = {
  type: {
    type: 'struct',
    address: '0x1',
    module: 'AccountFreezing',
    name: 'FreezingBit',
    generic_type_params: []
  },
  value: {
    is_frozen: false
  }
}
export const credentialResource = {
  type: {
    type: 'struct',
    address: '0x1',
    module: 'DualAttestation',
    name: 'Credential',
    generic_type_params: []
  },
  value: {
    base_url: '0x',
    base_url_rotation_events: {
      counter: '0',
      guid: '0x0100000000000000bd3c1801820aa917993888b2fa8d8c0e'
    },
    compliance_key_rotation_events: {
      counter: '0',
      guid: '0x0000000000000000bd3c1801820aa917993888b2fa8d8c0e'
    },
    compliance_public_key: '0x',
    expiration_date: '18446744073709551615',
    human_name: '0x4354205641535030'
  }
}
