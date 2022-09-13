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
        className='lg:ml-44 md:ml-9 ml-4 mb-12'
        placeholder='tracedSVG'
      />
      <div className='grid-container'>
        <div className='lg:grid lg:grid-cols-10 lg:gap-x-9 lg:col-start-2 lg:col-span-10'>
          <section className='lg:col-start-4 lg:col-span-7 lg:my-10'>
            <h1 className='lg:text-xl md:text-lg text-md font-bold leading-tight pb-8'>
              Expert partners in Web3 product, engineering & strategy
            </h1>
            <p>
              Native is not just any studio helping companies build their Web3 products. Discover what makes us an effective partner for industry leaders like a16z and ConsenSys on their next big crypto project.
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
                <h2 className='font-bold md:text-md text-sm col-span-3'>
                  Case Study
                </h2>
                <p className='col-start-4 col-span-6'>
                  <span className='font-bold'>How will the future of sports evolve beyond watching TV?</span> With Dream Fight, we've built a radically new type of game augmented over live broadcast.&nbsp;
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
