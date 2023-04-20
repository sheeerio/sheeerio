export type Action = {
  name: string
  shortcut?: string[]
  keywords?: string
  href?: string
  section: 'Navigation' | 'Socials' | 'Themes'
  icon?: React.ReactNode
  subtitle?: string
  perform?: () => void
}

export const Navigation: Action[] = [
  {
    name: 'Home',
    keywords: 'home',
    href: '/',
    section: 'Navigation',
  },
  {
    name: 'Writing',
    keywords: 'writing',
    href: '/writing',
    section: 'Navigation',
  },
]

export const Socials: Action[] = [
  {
    name: 'GitHub',
    keywords: 'github',
    perform: () => {
      window.open('https://github.com/sheeerio')
    },
    section: 'Socials',
  },
  {
    name: 'Twitter',
    keywords: 'twitter',
    perform: () => {
      window.open('https://twitter.com/typeduser')
    },
    section: 'Socials',
  },
]

export const Themes: Action[] = [
  {
    name: 'Change theme to light',
    keywords: 'light',
    section: 'Themes',
  },
  {
    name: 'Change theme to dark',
    keywords: 'dark',
    section: 'Themes',
  },
  {
    name: 'Change theme to system',
    keywords: 'system',
    section: 'Themes',
  },
]
