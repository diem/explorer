// Copyright (c) The Diem Core Contributors
// SPDX-License-Identifier: Apache-2.0

import { Module } from '../api_clients/BlockchainRestTypes'

export const testModules: Module[] = [
  {
    bytecode: '<redacted>',
    abi: {
      address: '0x1',
      name: 'XDX',
      friends: [],
      exposed_functions: [
        {
          name: 'exchangeXdxForXus',
          visibility: 'public',
          generic_type_params: [{ constraints: [] }],
          params: ['u64'],
          return: ['bool'],
        },
      ],
      structs: [
        {
          name: 'AccountType',
          is_native: false,
          abilities: ['key'],
          generic_type_params: [],
          fields: [
            {
              name: 'account_type',
              type: 'u64',
            },
          ],
        },
      ],
    },
  },
]
