import { AbiItem } from 'web3-utils'

export const curve_gauge: AbiItem[] = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'string',
        name: 'gaugePoolName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rewardAmt',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setIdReward',
        type: 'uint256',
      },
    ],
    name: 'LogClaimedReward',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'string',
        name: 'gaugePoolName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'LogDeposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'string',
        name: 'gaugePoolName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'getId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'setId',
        type: 'uint256',
      },
    ],
    name: 'LogWithdraw',
    type: 'event',
  },
  {
    inputs: [
      { internalType: 'string', name: 'gaugePoolName', type: 'string' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
      { internalType: 'uint256', name: 'setIdReward', type: 'uint256' },
    ],
    name: 'claimReward',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'connectorID',
    outputs: [
      { internalType: 'uint256', name: 'model', type: 'uint256' },
      { internalType: 'uint256', name: 'id', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: 'gaugePoolName', type: 'string' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [{ internalType: 'string', name: '', type: 'string' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'string', name: 'gaugePoolName', type: 'string' },
      { internalType: 'uint256', name: 'amt', type: 'uint256' },
      { internalType: 'uint256', name: 'getId', type: 'uint256' },
      { internalType: 'uint256', name: 'setId', type: 'uint256' },
      { internalType: 'uint256', name: 'setIdCrv', type: 'uint256' },
      { internalType: 'uint256', name: 'setIdReward', type: 'uint256' },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
]
