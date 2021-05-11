import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://quickswap.exchange/#/swap?outputCurrency=0xD201B8511aaB3E9b094b35ABcD5d7863c78D6d0e',
      },
      {
        label: 'Liquidity',
        href: 'https://quickswap.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'QuickSwap',
        href: 'https://info.quickswap.exchange/token/0xD201B8511aaB3E9b094b35ABcD5d7863c78D6d0e',
      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/polygon/defi/polyshark-finance',
      },
      {
        label: 'Vfat Tools',
        href: 'https://vfat.tools/polygon/polyshark/',
      },
      {
        label: 'Coingecko',
        href: 'https://www.coingecko.com/en/coins/polyshark-finance',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/Polyshark',
      },
      {
        label: 'Docs',
        href: 'https://polysharkfi.gitbook.io/polyshark-finance/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@polyshark.fi',
      },
    ],
  },
  {
    label: 'Audit by TechRate',
    icon: 'AuditIcon',
    href: 'https://www.polyshark.finance/files/TechRate-Audit.pdf',
  },
]

export default config
