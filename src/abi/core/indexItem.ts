import { AbiItem } from 'web3-utils'

export const index: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'origin',
        type: 'address',
      },
    ],
    name: 'LogAccountCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_newAccount',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_connectors',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_check',
        type: 'address',
      },
    ],
    name: 'LogNewAccount',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'accountVersion',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'check',
        type: 'address',
      },
    ],
    name: 'LogNewCheck',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'master',
        type: 'address',
      },
    ],
    name: 'LogNewMaster',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'master',
        type: 'address',
      },
    ],
    name: 'LogUpdateMaster',
    type: 'event',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'account',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_newAccount', type: 'address' },
      { internalType: 'address', name: '_connectors', type: 'address' },
      { internalType: 'address', name: '_check', type: 'address' },
    ],
    name: 'addNewAccount',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_owner', type: 'address' },
      {
        internalType: 'uint256',
        name: 'accountVersion',
        type: 'uint256',
      },
      { internalType: 'address', name: '_origin', type: 'address' },
    ],
    name: 'build',
    outputs: [{ internalType: 'address', name: '_account', type: 'address' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_owner', type: 'address' },
      {
        internalType: 'uint256',
        name: 'accountVersion',
        type: 'uint256',
      },
      { internalType: 'address[]', name: '_targets', type: 'address[]' },
      { internalType: 'bytes[]', name: '_datas', type: 'bytes[]' },
      { internalType: 'address', name: '_origin', type: 'address' },
    ],
    name: 'buildWithCast',
    outputs: [{ internalType: 'address', name: '_account', type: 'address' }],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountVersion',
        type: 'uint256',
      },
      { internalType: 'address', name: '_newCheck', type: 'address' },
    ],
    name: 'changeCheck',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_newMaster', type: 'address' }],
    name: 'changeMaster',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'check',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    name: 'connectors',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: 'version', type: 'uint256' },
      { internalType: 'address', name: 'query', type: 'address' },
    ],
    name: 'isClone',
    outputs: [{ internalType: 'bool', name: 'result', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'list',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'master',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_master', type: 'address' },
      { internalType: 'address', name: '_list', type: 'address' },
      { internalType: 'address', name: '_account', type: 'address' },
      { internalType: 'address', name: '_connectors', type: 'address' },
    ],
    name: 'setBasics',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'updateMaster',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'versionCount',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
]
