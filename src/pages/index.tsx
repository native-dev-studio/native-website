import * as React from "react"
import { Link } from "gatsby"
import type { HeadFC } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <>
      <main className='bg-gray'>
        <div className='banner mb-10' />
        <StaticImage 
          src='../images/native-logo.svg'
          alt='A logo' 
          height={50}
          className='ml-44'
        />
        <div className='grid-container'>
          <div className='grid grid-cols-10 gap-x-9 col-start-2 col-span-10'>
            <section className='col-start-4 col-span-7 my-10'>
              <h1 className='text-lg font-bold'>
                Expert partners in Web3 product, engineering & strategy
              </h1>
              <p>
                Native is an independent studio building mission-critical products for Web3 startups. We help define your technical vision and form the right team and cross-functional leadership to execute it.
              </p>
            </section>
            <section className='col-span-10 mb-48'>
              <div className='bg-black my-5'>
                <StaticImage
                  src='../images/df-case-study-image.png'
                  alt='A futuristic look into tennis'
                />
              </div>
              <div className='grid grid-cols-10 gap-x-9'>
                <h2 className='text-md col-span-2'>
                  Case Study
                </h2>
                <p className='col-start-4 col-span-6'>
                  Dream Fight is bringing back the magic of sports and gaming.&nbsp; 
                  <Link to='/case'>
                    Read more
                  </Link>.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <footer className='my-24'>
        <StaticImage
          src='../images/native-logo.svg'
          alt='A logo'
          width={50}
          className='ml-44'
        />
        <div className='grid-container'>
          <p className='my-10 col-start-2 col-span-10'>
            Interested in learning more about our approach to custom software? Reach out to&nbsp;
            <a href='mailto:workwith@native.dev'>
              workwith@native.dev
            </a>.
          </p>
          <ul className='col-start-2'>
            <li className='font-bold text-md'>
              Contact
            </li>
            <li>
              <a href='mailto:workwith@native.dev' className='text-white hover:text-red'>
                workwith@native.dev
              </a>
            </li>
            <li>
              <a href='mailto:careers@native.dev' className='text-white hover:text-red'>
                careers@native.dev
              </a>
            </li>
            <li>
              <a href='mailto:press@native.dev' className='text-white hover:text-red'>
                press@native.dev
              </a>
            </li>
          </ul>
          <ul className='col-start-5 col-span-3' >
            <li className='font-bold text-md'>
              Learn
            </li>
            <li>
              <a href='https://pitch.com/v/website-u6wxwg' className='text-white hover:text-red'>
                Native Pitch Deck
              </a>
              <span className='ml-2 rounded-full bg-red py-1.5 px-4 text-xs bg-blue'>
                New!
              </span>
            </li>
          </ul>
          <ul className='col-start-8'>
            <li className='font-bold text-md'>
              Connect
            </li>
            <li>
              <a href='https://www.linkedin.com/company/native-dev' className='text-white hover:text-red'>
                LinkedIn
              </a>
            </li>
            <li>
              <a href='https://github.com/native-dev-studio' className='text-white hover:text-red'>
                Github
              </a>
            </li>
          </ul>
          <div className='divider col-start-2 col-span-10' />
          <p className='col-start-2 col-span-10'>
            Copyright 2022. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
