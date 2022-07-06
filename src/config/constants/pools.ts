import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    tokenName: 'AVN',
    stakingTokenName: QuoteToken.xavn,
    stakingTokenAddress: '0x8bbcdab057289c9d84d7f36ef45b70276238797a',
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x5646A115b7dB6ca205B44340E7163e853958E48c',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://avnswap.finance/',
    harvest: true,
    tokenPerBlock: '10',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
]

export default pools
