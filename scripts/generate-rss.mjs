import { writeFileSync } from 'fs'

import RSS from 'rss'

import { allWritings } from '../.contentlayer/generated/index.mjs'

async function generate() {
  const feed = new RSS({
    title: 'Gunbir Baveja',
    site_url: 'https://sheeerio.vercel.app',
    feed_url: `https://sheeerio.vercel.app/feed.xml`,
  })

  allWritings.map(post => {
    feed.item({
      title: post.title,
      url: `https://sheeerio.vercel.app/writing/${post.slug}`,
      date: post.publishedAt,
      description: post.summary,
    })
  })

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
