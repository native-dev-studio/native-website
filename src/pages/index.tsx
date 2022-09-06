import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main className='bg-gray'>
      <div className='banner mb-10' />
      <StaticImage 
        src='../images/native-logo.svg'
        alt='A logo' 
        height={50}
        className='lg:ml-44 ml-4 mb-12'
        placeholder='tracedSVG'
      />
      <div className='lg:grid-container mx-4'>
        <div className='lg:grid lg:grid-cols-10 lg:gap-x-9 lg:col-start-2 lg:col-span-10'>
          <section className='lg:col-start-4 lg:col-span-7 lg:my-10'>
            <h1 className='md:text-lg text-md font-bold leading-tight pb-8'>
              Expert partners in Web3 product, engineering & strategy
            </h1>
            <p>
              Native is an independent studio building mission-critical products for Web3 startups. We help define your technical vision and form the right team and leadership support to execute it.
            </p>
          </section>
          <section className='
            lg:col-span-10 lg:mb-32
            mb-14
          '>
            <div className='bg-black my-5'>
              <StaticImage
                src='../images/df-case-study-image.png'
                alt='A futuristic look into tennis'
              />
            </div>
              <div className='lg:grid lg:grid-cols-10 lg:gap-x-9'>
                <h2 className='text-md col-span-2'>
                  Case Study
                </h2>
                <p className='col-start-4 col-span-6'>
                  Dream Fight is bringing back the magic of sports and gaming.&nbsp; 
                  <Link to='/case' className='hover:text-yellow underline'>
                    Read more
                  </Link>.
                </p>
              </div>
          </section>
        </div>
      </div>
      <footer className='
        bg-gray-dark
        lg:py-24
        py-10
      '>
          <StaticImage
            src='../images/native-logo.svg'
            alt='A logo'
            width={50}
            placeholder='tracedSVG'
            className='
            lg:ml-44 ml-4
            mb-5
            '
          />
          <div className='
            lg:grid-container
            md:grid md:grid-cols-8 md:mx-4 md:gap-y-5
            grid grid-cols-4 mx-4 gap-y-5
            '>
            <p className='
              lg:my-10 lg:col-start-2 lg:col-span-10
              md:col-span-8
              col-span-4 my-2
              '>
              Interested in learning more about our approach to custom software? Reach out to&nbsp;
              <a href='mailto:workwith@native.dev' className='hover:text-yellow underline'>
                workwith@native.dev
              </a>.
            </p>
            <ul className='
              lg:col-start-2
              col-span-2
              '>
              <li className='font-bold lg:text-md text-sm'>
                Contact
              </li>
              <li>
                <a href='mailto:workwith@native.dev' className='text-white hover:text-red lg:text-sm text-xs'>
                  workwith@native.dev
                </a>
              </li>
              <li>
                <a href='mailto:careers@native.dev' className='text-white hover:text-red lg:text-sm text-xs'>
                  careers@native.dev
                </a>
              </li>
              <li>
                <a href='mailto:press@native.dev' className='text-white hover:text-red lg:text-sm text-xs'>
                  press@native.dev
                </a>
              </li>
            </ul>
            <ul className='
              lg:col-start-5 lg:col-span-3
              md:col-start-4 md:col-span-3
              col-span-3
              '>
              <li className='font-bold lg:text-md text-sm'>
                Learn
              </li>
              <li>
                <a href='https://pitch.com/v/website-u6wxwg' className='text-white hover:text-red lg:text-sm text-xs'>
                  Native Pitch Deck
                </a>
                <span className='ml-2 rounded-full bg-red py-1.5 px-4 text-xs bg-blue'>
                  New!
                </span>
              </li>
            </ul>
            <ul className='
              lg:col-start-8
              md:col-start-7 md:col-span-2
              col-span-4
              '>
              <li className='font-bold lg:text-md text-sm'>
                Connect
              </li>
              <li>
                <a href='https://www.linkedin.com/company/native-dev' className='text-white hover:text-red lg:text-sm text-xs'>
                  LinkedIn
                </a>
              </li>
              <li>
                <a href='https://github.com/native-dev-studio' className='text-white hover:text-red lg:text-sm text-xs'>
                  Github
                </a>
              </li>
            </ul>
            <div className='
              divider
              lg:col-start-2 lg:col-span-10
              md:col-span-8
              col-span-4 -mb-2
            '/>
            <p className='
              lg:col-start-2 lg:col-span-10
              col-span-4 text-xs
              '>
              Copyright 2022. All Rights Reserved.
            </p>
          </div>
        </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
