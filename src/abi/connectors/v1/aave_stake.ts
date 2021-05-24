import { AbiItem } from 'web3-utils';

export const aave_stake: AbiItem[] =[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"getId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"setId","type":"uint256"}],"name":"LogClaim","type":"event"},{"anonymous":false,"inputs":[],"name":"LogCooldown","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"delegatee","type":"address"},{"indexed":false,"internalType":"bool","name":"delegateAave","type":"bool"},{"indexed":false,"internalType":"bool","name":"delegateStkAave","type":"bool"},{"indexed":false,"internalType":"uint8","name":"aaveDelegationType","type":"uint8"},{"indexed":false,"internalType":"uint8","name":"stkAaveDelegationType","type":"uint8"}],"name":"LogDelegate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"getId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"setId","type":"uint256"}],"name":"LogRedeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amt","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"getId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"setId","type":"uint256"}],"name":"LogStake","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"getId","type":"uint256"},{"internalType":"uint256","name":"setId","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"connectorID","outputs":[{"internalType":"uint256","name":"_type","type":"uint256"},{"internalType":"uint256","name":"_id","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"cooldown","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"bool","name":"delegateAave","type":"bool"},{"internalType":"bool","name":"delegateStkAave","type":"bool"},{"internalType":"uint8","name":"aaveDelegationType","type":"uint8"},{"internalType":"uint8","name":"stkAaveDelegationType","type":"uint8"}],"name":"delegate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"getId","type":"uint256"},{"internalType":"uint256","name":"setId","type":"uint256"}],"name":"redeem","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"getId","type":"uint256"},{"internalType":"uint256","name":"setId","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"payable","type":"function"}]