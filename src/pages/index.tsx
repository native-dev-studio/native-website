import * as React from "react"
import { Link } from "gatsby"
import type { HeadFC } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <>
      <div className='banner' />
      <main className='mx-16'>
        <div className='grid grid-cols-12 gap-x-9'>
          <div className='grid grid-cols-10 gap-x-9 col-start-2 col-span-10'>
            <section className='col-start-4 col-span-7'>
              <h1 className='text-3xl font-bold underline'>
                Expert partners in Web3 product, engineering & strategy
              </h1>
              <p>
                Native is an independent studio building mission-critical products for Web3 startups. We help define your technical vision and form the right team and cross-functional leadership to execute it.
              </p>
            </section>
            <section className='col-span-10'>
              <StaticImage
                src='../images/df-case-study-image.png'
                alt='A futuristic look into tennis'
              />
              <div className='grid grid-cols-10 gap-x-9'>
                <h2 className='col-span-2'>
                  Case Study
                </h2>
                <p className='col-start-4 col-span-6'>
                  Dream Fight is bringing back the magic of sports and gaming. 
                  <Link to='/case'>
                    Read more
                  </Link>.
                </p>
              </div>
            </section>
            <footer className='grid grid-cols-10 gap-x-9 col-span-10'>
              <StaticImage className='col-span-1' src='../images/icon.png' alt='A logo' />
              <p className='col-span-10'>
                Interested in learning more about our approach to custom software? Reach out to workwith@native.dev.
              </p>
              <ul className='col-start-1'>
                <li>
                  Contact
                </li>
                <li>
                  workwith@native.dev
                </li>
                <li>
                  careers@native.dev
                </li>
                <li>
                  press@native.dev
                </li>
              </ul>
              <ul className='col-start-4' >
                <li>
                  Learn
                </li>
                <li>
                  Native Pitch Deck
                  <span className='badge'>
                    New!
                  </span>
                </li>
              </ul>
              <ul className='col-start-7'>
                <li>
                  Connect
                </li>
                <li>
                  LinkedIn
                </li>
                <li>
                  Github
                </li>
              </ul>
              <div className='line-separator' />
              <p className='col-span-10'>
                Copyright 2022. All Rights Reserved.
              </p>
            </footer>
          </div>
        </div>
      </main>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
