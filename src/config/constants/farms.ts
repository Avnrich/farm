import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [

  {
    pid: 1,
    risk: 5,
    lpSymbol: 'AVN STAKE',
    lpAddresses: {
      97: '',
      56: '0xbf151F63D8d1287db5FC7a3bc104a9c38124cdeB',
    },
    tokenSymbol: 'AVN',
    tokenAddresses: {
      97: '',
      56: '0xbf151F63D8d1287db5FC7a3bc104a9c38124cdeB',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  
]

export default farms
