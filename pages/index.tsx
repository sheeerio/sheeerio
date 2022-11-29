import { Suspense } from 'react'

import type { NextPage } from 'next'

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
              17 year old Math and Linguistics enthusiast.
            </h2>
          </div>
          <div className='flex flex-col gap-6 leading-7 text-secondary max-w-lg'>
            <p>I am an undeclared undergraduate at UBC.</p>
            <p>
              Ardent in reading, writing, and improving consistently through
              learning. Currently studying Deep Learning and Group Theory.
              Curious about re-implementation of {'.'}
              <a href='https://github.com/karpathy/micrograd'>micrograd</a> in
              Racket.
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
