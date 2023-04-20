export const baseUrl =
  process.env.NODE_ENV === 'production' ? 'https://sheeerio.vercel.app' : ''

export const defaultSEO = {
  title: 'Gunbir Singh Baveja',
  description: 'Undergraduate student at UBC.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: baseUrl,
    site_name: 'Gunbir Singh Baveja',
    images: [
      {
        alt: 'Gunbir Singh Baveja',
      },
    ],
  },
  twitter: {
    handle: '@typeduser',
    site: '@typeduser',
    cardType: 'summary_large_image',
  },
}

interface IExtendSEO {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: IExtendSEO) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  }
}
