import * as React from "react"
import { Link } from "gatsby"
import type { HeadFC } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <main>
      <section>
        <h1 className='text-3xl font-bold underline'>
          Expert partners in Web3 product, engineering & strategy
        </h1>
        <p>
          Native is an independent studio building mission-critical products for Web3 startups. We help define your technical vision and form the right team and cross-functional leadership to execute it.
        </p>
    </section>
      <section>
        <h2>
          Case Study
        </h2>
        <p>
          Dream Fight is bringing back the magic of sports and gaming. 
          <Link to='/case'>
            Read more
          </Link>.
        </p>
        <StaticImage src='../images/df-case-study-image.png' alt='A futuristic look into tennis' />
      </section>
      <footer>
        <StaticImage src='../images/icon.png' alt='A logo' />
        Interested in learning more about our approach to custom software? Reach out to workwith@native.dev.
        <ul>
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
        <ul>
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
        <ul>
          <li>
            LinkedIn
          </li>
          <li>
            Github
          </li>
        </ul>
        <div className='line-separator' />
        <p>
          Copyright 2022. All Rights Reserved.
        </p>
      </footer>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
