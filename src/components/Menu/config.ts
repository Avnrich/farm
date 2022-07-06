import { MenuEntry } from '24testui'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Farm and Stake',
    icon: 'FarmIcon',
    href: '/farms',
  },
  // {
  //  label: 'poolss',
  //  icon: 'PoolIcon',
  //  href: '/poolss',
  // },
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
 {
   label: 'IFO',
   icon: 'MoreIcon',
   href: '/ifo',
 },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Telegram',
        href: 'https://t.me/AVNRich_Chat',
      },
      {
        label: 'Facebook',
        href: 'http://Fb.me/avnrich',
      },
      {
        label: 'Medium',
        href: 'https://medium.com/@avnrich',
      },
      {
        label: 'Linkedin',
        href: 'https://linkedin.com/company/avnrich-company',
      },
      {
        label: 'Github',
        href: 'https://github.com/AvnrichDefi',
      },
      {
        label: 'Instagram',
        href: 'https://instagram.com/avnrich?igshid=t1y8ahkylnc7',
      },
      {
        label: 'Coingecko',
        href: 'https://www.coingecko.com/en/coins/avnrich',
      },
      {
        label: 'Avn Shop',
        href: 'Avnrich.shop',
      },

    ],
  },
  {
    label: 'Audit',
    icon: 'AuditIcon',
    href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/October/AVNRich%20Token%20Full%20Smart%20Contract%20Security%20Audit.pdf',
  },
]

export default config
