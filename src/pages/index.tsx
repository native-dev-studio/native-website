import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import Footer from '../components/Footer';

const IndexPage = () => {
  return (
    <main className='bg-gray-200'>
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
            <h1 className='lg:text-xl md:text-lg text-md font-bold leading-tight pb-8'>
              Expert partners in Web3 product, engineering & strategy
            </h1>
            <p>
              Native is an independent studio building Web3 products for startups & businesses. We help define your technical vision and form the right team and leadership support to execute it.
            </p>
          </section>
          <section className='
            lg:col-span-10 lg:mb-32
            mb-14
          '>
            <figure className='bg-black my-5'>
              <Link to='/featured'>
                <StaticImage
                  src='../images/df-case-study-image.png'
                  alt='A futuristic look into tennis'
                />
              </Link>
            </figure>
              <div className='lg:grid lg:grid-cols-10 lg:gap-x-9'>
                <h2 className='font-bold text-md col-span-2'>
                  Case Study
                </h2>
                <p className='col-start-4 col-span-6'>
                  Dream Fight is bringing back the magic of sports and gaming.&nbsp; 
                  <Link to='/featured' className='underline'>
                    Read more
                  </Link>.
                </p>
              </div>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Native</title>
