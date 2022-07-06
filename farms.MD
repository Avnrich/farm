import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'AVN-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8eC8Db9Ebf1784b28EE081558c0B4a4c7480497B',
    },
    tokenSymbol: 'AVN',
    tokenAddresses: {
      97: '',
    56: '0xebcfd1376d68d9b2df66561cd519c5afccd65bf0',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 5,
    lpSymbol: 'AVN-BUSD POOL',
    lpAddresses: {
      97: '',
      56: '0x5293D72eA9f1695C33Ea2A871b928EA1a1b73ee7',
    },
    tokenSymbol: 'AVN',
    tokenAddresses: {
      97: '',
      56: '0x0684ffcc67792c50fdc303813c7b0c00d6aa6b99',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'AVN-BUSD POOL',
    lpAddresses: {
      97: '',
      56: '0x3eD392E7c219de06F179B709F09436Fcc7142aFD',
    },
    tokenSymbol: 'AVN',
    tokenAddresses: {
      97: '',
      56: '0xebcfd1376d68d9b2df66561cd519c5afccd65bf0',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
