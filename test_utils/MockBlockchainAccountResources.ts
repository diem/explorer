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
export const toBytesSmartContract = {
  bytecode: '0xa11ceb0b0300000006010002030206050807070f0d081c100c2c04000000010001010001060900010a020342435308746f5f6279746573000000000000000000000000000000010001020000',
  abi: {
    address: '0x1',
    name: 'BCS',
    friends: [],
    exposed_functions: [
      {
        name: 'to_bytes',
        visibility: 'public',
        generic_type_params: [
          {
            constraints: []
          }
        ],
        params: [
          {
            type: 'reference',
            mutable: false,
            to: {
              type: 'generic_type_param',
              index: 0
            }
          }
        ],
        return: [
          {
            type: 'vector',
            items: {
              type: 'u8'
            }
          }
        ]
      }
    ],
    structs: []
  }
}
export const hasAccountLimitsSmartContract = {
  bytecode: '0xa11ceb0b030000000c01000c020c0803145c047002057227079901a80308c1041006d104320a83050a0c8d05f9020d8608040f8a08020001000200030004000500060007080000080800000900010100000a000100000b000100000c020100000d000100000e000300000f00000000100405000011040500011300010100041403030003150905000316090500051709000004180303000419030300021a050500031b090500090601050101020505010302060c060c00010900020101090507030501030103010301060c030103050b4469656d4163636f756e7404564153500d4163636f756e744c696d6974730d4469656d54696d657374616d7005526f6c6573064572726f7273065369676e6572094368696c64564153500a506172656e7456415350126861735f6163636f756e745f6c696d6974730869735f6368696c640969735f706172656e740c69735f73616d655f766173700769735f766173700c6e756d5f6368696c6472656e0e706172656e745f616464726573731d7075626c6973685f6368696c645f766173705f63726564656e7469616c1e7075626c6973685f706172656e745f766173705f63726564656e7469616c10706172656e745f766173705f61646472146861735f77696e646f775f7075626c697368656410696e76616c69645f617267756d656e74176173736572745f706172656e745f766173705f726f6c65166173736572745f6368696c645f766173705f726f6c650a616464726573735f6f6611616c72656164795f7075626c69736865640e6c696d69745f6578636565646564106173736572745f6f7065726174696e671a6173736572745f74726561737572795f636f6d706c69616e636500000000000000000000000000000001030803000000000000000308020000000000000003080000000000000000030801000000000000000308000001000000000000020112050102010e03000100010005040a0011063800020101000005030a002900020201000005030a00290102030100010007180a001104030405080a0111040c02050a090c020b02030d05140a0011060a011106210c030516090c030b030204010000010c0a00110203040507080c01050a0a0011010c010b010205010002000105060a0011062b0110001402060100010002160a001102030405070a000c0205140a001101030d0701110a270a002b001001140c010b010c020b0202070300010108440a00110b0a01110c0a01110d0c020a021104200702110e0c060c050b0503160b00010b01010b06270b00110d0c040a0411020700110a0c080c070b0703250b01010b08270a042a010f000c030a03140704230703110f0c0a0c090b0903390b03010b01010b0a270a0314060100000000000000160b03150b010a0412002d0002080300000a1a11100b0111110a00110b0a00110d0c040a041104200702110e0c030c020b0203150b00010b03270b0006000000000000000012012d010201000000000000',
  abi: {
    address: '0x1',
    name: 'VASP',
    friends: [
      {
        address: '0x1',
        name: 'DiemAccount'
      }
    ],
    exposed_functions: [
      {
        name: 'has_account_limits',
        visibility: 'public',
        generic_type_params: [
          {
            constraints: []
          }
        ],
        params: [
          {
            type: 'address'
          }
        ],
        return: [
          {
            type: 'bool'
          }
        ]
      },
      {
        name: 'is_child',
        visibility: 'public',
        generic_type_params: [],
        params: [
          {
            type: 'address'
          }
        ],
        return: [
          {
            type: 'bool'
          }
        ]
      },
      {
        name: 'is_parent',
        visibility: 'public',
        generic_type_params: [],
        params: [
          {
            type: 'address'
          }
        ],
        return: [
          {
            type: 'bool'
          }
        ]
      },
      {
        name: 'is_same_vasp',
        visibility: 'public',
        generic_type_params: [],
        params: [
          {
            type: 'address'
          },
          {
            type: 'address'
          }
        ],
        return: [
          {
            type: 'bool'
          }
        ]
      },
      {
        name: 'is_vasp',
        visibility: 'public',
        generic_type_params: [],
        params: [
          {
            type: 'address'
          }
        ],
        return: [
          {
            type: 'bool'
          }
        ]
      },
      {
        name: 'num_children',
        visibility: 'public',
        generic_type_params: [],
        params: [
          {
            type: 'address'
          }
        ],
        return: [
          {
            type: 'u64'
          }
        ]
      },
      {
        name: 'parent_address',
        visibility: 'public',
        generic_type_params: [],
        params: [
          {
            type: 'address'
          }
        ],
        return: [
          {
            type: 'address'
          }
        ]
      },
      {
        name: 'publish_child_vasp_credential',
        visibility: 'friend',
        generic_type_params: [],
        params: [
          {
            type: 'reference',
            mutable: false,
            to: {
              type: 'signer'
            }
          },
          {
            type: 'reference',
            mutable: false,
            to: {
              type: 'signer'
            }
          }
        ],
        return: []
      },
      {
        name: 'publish_parent_vasp_credential',
        visibility: 'friend',
        generic_type_params: [],
        params: [
          {
            type: 'reference',
            mutable: false,
            to: {
              type: 'signer'
            }
          },
          {
            type: 'reference',
            mutable: false,
            to: {
              type: 'signer'
            }
          }
        ],
        return: []
      }
    ],
    structs: [
      {
        name: 'ChildVASP',
        is_native: false,
        abilities: [
          'key'
        ],
        generic_type_params: [],
        fields: [
          {
            name: 'parent_vasp_addr',
            type: {
              type: 'address'
            }
          }
        ]
      },
      {
        name: 'ParentVASP',
        is_native: false,
        abilities: [
          'key'
        ],
        generic_type_params: [],
        fields: [
          {
            name: 'num_children',
            type: {
              type: 'u64'
            }
          }
        ]
      }
    ]
  }
}
