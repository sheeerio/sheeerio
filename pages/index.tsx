import { Suspense } from 'react'

import type { NextPage } from 'next'
import Link from 'next/link'

import Container from '@components/Container'

const Home: NextPage = () => {
  return (
    <Suspense fallback={null}>
      <Container page={'index'}>
        <header className='flex flex-col gap-16'>
          <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-lg text-secondary'>
              Gunbir Singh Baveja
            </h1>
            <h2 className='font-extrabold text-5xl leading-tight max-w-lg'>
              19 year old science enthusiast.
            </h2>
          </div>
          <div className='flex flex-col gap-6 leading-7 text-secondary max-w-lg'>
            <p>
              I am an incoming junior studying Computer Science and Statistics
              at UBC.
            </p>
            <p>
              Mainly interested in the intersection of Neuroscience and AI, and
              the simulation/creation of an artificial human-like intelligence.
              Interested in simulating the process of learning.
            </p>
            <p>
              Recent blog posts-
              <ul>
                <li>
                  <Link href='/writing/schizo'>
                    <b>Schizospeak: esolang for the freaks</b>
                  </Link>
                </li>
                <li>
                  <Link href='/writing/rlulsl'>Finals are near v2</Link>
                </li>
                <li>
                  <Link href='/writing/london'>Bias-Variance in RL</Link>
                </li>
              </ul>
            </p>
          </div>
          <div className='flex flex-col gap-4'>
            <Suspense fallback={null}>
              <div className='flex gap-6 overflow-x-scroll w-[100vw] relative left-1/2 right-1/2 -mx-[50vw] px-4 snap-x snap-mandatory masked-overflow'></div>
            </Suspense>
          </div>
        </header>
      </Container>
    </Suspense>
  )
}

export default Home
