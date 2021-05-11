import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'SHARK-USDC LP',
    decimal: 18,
    lpAddresses: {
      137: '0xb746Ed49B63f2239A8Ef33eE6D0F5Bb52eDa26Bc',
    },
    tokenSymbol: 'SHARK',
    tokenAddresses: {
      137: '0xD201B8511aaB3E9b094b35ABcD5d7863c78D6d0e',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 9,
    risk: 5,
    lpSymbol: 'SHARK-PDOGE LP',
    decimal: 18,
    lpAddresses: {
      137: '0xc150693bfb31129d6b9aeeeb415b958cdb73201e',
    },
    tokenSymbol: 'SHARK',
    tokenAddresses: {
      137: '0xD201B8511aaB3E9b094b35ABcD5d7863c78D6d0e',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  // {
  //   pid: 1,
  //   risk: 5,
  //   lpSymbol: 'EGG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
  //   },
  //   tokenSymbol: 'EGG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 2,
  //   risk: 3,
  //   lpSymbol: 'USDC-USDT LP',
  //   lpAddresses: {
  //     137: '0x2cF7252e74036d1Da831d11089D326296e64a728'
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     137: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 12,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'EGG',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
  //   },
  //   tokenSymbol: 'EGG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'SHARK',
    decimal: 18,
    lpAddresses: {
      137: '0xb746Ed49B63f2239A8Ef33eE6D0F5Bb52eDa26Bc'
    },
    tokenSymbol: 'SHARK',
    tokenAddresses: {
      137: '0xD201B8511aaB3E9b094b35ABcD5d7863c78D6d0e'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 10,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'PDOGE',
    decimal: 18,
    lpAddresses: {
      137: '0x264e6bc3f95633725658e4d9640f7f7d9100f6ac'
    },
    tokenSymbol: 'PDOGE',
    tokenAddresses: {
      137: '0x8a953cfe442c5e8855cc6c61b1293fa648bae472'
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
  },
  {
    pid: 1,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WMATIC',
    decimal: 18,
    lpAddresses: {
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827'
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      137: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 6,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'QUICK',
    decimal: 18,
    lpAddresses: {
      137: '0x1f1e4c845183ef6d50e9609f16f6f9cae43bc9cb'
    },
    tokenSymbol: 'QUICK',
    tokenAddresses: {
      137: '0x831753dd7087cac61ab5644b308642cc1c33dc13'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 7,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'KRILL',
    decimal: 18,
    lpAddresses: {
      137: '0x6405ebc22cb0899fc21f414085ac4044b4721a0d'
    },
    tokenSymbol: 'KRILL',
    tokenAddresses: {
      137: '0x05089c9ebffa4f0aca269e32056b1b36b37ed71b'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 2,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WETH',
    decimal: 18,
    lpAddresses: {
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d'
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      137: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 4,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBTC',
    decimal: 6,
    lpAddresses: {
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498'
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  }, 
  {
    pid: 5,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    decimal: 6,
    lpAddresses: {
      137: '0x2cf7252e74036d1da831d11089d326296e64a728'
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 8,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'MUST',
    decimal: 18,
    lpAddresses: {
      137: '0x12a2abcfcadc04681929f0c199bdf812967207e4'
    },
    tokenSymbol: 'MUST',
    tokenAddresses: {
      137: '0x9c78ee466d6cb57a4d01fd887d2b5dfb2d46288f'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  }
]

export default farms
