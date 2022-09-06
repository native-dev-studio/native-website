import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

const FeaturedPage = () => {
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
      <section>
        <h1 className='text-lg'>
          Dream Fight
        </h1>
        <h2 className=''>
          Driving the technical vision for the next generation of sports and gaming
        </h2>
        <StaticImage
          src='../images/df-case-study-image.png'
          alt='A futuristic look into tennis'
        />
      </section>
      <section className='lg:grid-container'>
        <h3 className='col=start-2'>
          For inquiries
          <a href='mailto:reef@dreamfight.io'>
            reef@dreamfight.io
          </a>
        </h3>
        <p className='col-start-5 col-span-7'>
          When COVID struck and the Olympics were canceled, Sharif Elshinawi, a long-time sports fan working from home, had a vision to bring back the crowd in a new way: with a live, interactive game for the next generation of fans and gamers to play anywhere in the world.
        </p>
        <p className='col-start-5 col-span-7'>
          Dream Fight was born: instead of shouting at the TV with your friends about what might happen next, you place bets in real-time, serve-by-serve, shot-by-shot, over live broadcast. Suddenly, fire blazes across the court as Federer makes his 120-mph drop shot straight for Nadal's head. This game-winning shot, minted live as an NFT, is a prize that you, the player, earns.
        </p>
        <p className='col-start-5 col-span-7'>
          The Problem: Where to start? But how is Sharif, a designer, supposed to form the right team and technical leadership to build a project so complex? How is he supposed to develop the technical strategy to ship this product quickly, attract investors, and scale it?
        </p>
        <p className='col-start-5 col-span-7'>
          Anxiety and stress set in, but when Sharif was referred to Native and met Kel Kanhirun, he was soon able to regain his foothold as a brand and design leader as Kel helped guide Dream Fight's technical direction, and together they were able to weave the art of what's possible with technology along Sharif's creative vision.
        </p>
      </section>
    </main>
  )
}

export default FeaturedPage
