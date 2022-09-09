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
      <section className='grid-container'>
        <h1 className='text-sm col-start-2 col-span-2'>
          Case Study
        </h1>
        <h1 className='text-lg col-start-5 col-span-7'>
          Dream Fight
        </h1>
        <h2 className='text-md col-start-5 col-span-7'>
          Driving the technical vision for the next generation of sports and gaming
        </h2>
        <StaticImage
          src='../images/df-case-study-image.png'
          alt='A futuristic look into tennis'
          className='col-span-10'
        />
      </section>
      <section className='grid-container'>
        <h3 className='col-start-2'>
          For inquiries
          <a href='mailto:reef@dreamfight.io'>
            reef@dreamfight.io
          </a>
        </h3>
        <div className='col-start-5 col-span-7'>
          <p>
            When COVID struck and the Olympics were canceled, Sharif Elshinawi, a long-time sports fan working from home, had a vision to bring back the crowd in a new way: with a live, interactive game for the next generation of fans and gamers to play anywhere in the world.
          </p>
          <p>
            Dream Fight was born: instead of shouting at the TV with your friends about what might happen next, you place bets in real-time, serve-by-serve, shot-by-shot, over live broadcast. Suddenly, fire blazes across the court as Federer makes his 120-mph drop shot straight for Nadal's head. This game-winning shot, minted live as an NFT, is a prize that you, the player, earns.
          </p>
          <p>
            The Problem: Where to start? But how is Sharif, a designer, supposed to form the right team and technical leadership to build a project so complex? How is he supposed to develop the technical strategy to ship this product quickly, attract investors, and scale it?
          </p>
          <p>
            Anxiety and stress set in, but when Sharif was referred to Native and met Kel Kanhirun, he was soon able to regain his foothold as a brand and design leader as Kel helped guide Dream Fight's technical direction, and together they were able to weave the art of what's possible with technology along Sharif's creative vision.
          </p>
      </div>
      </section>
      <section className='grid-container'>
        <blockquote className='col-span-12'>
          “A lovely quotable that makes Native really communicate that their value is something clients believe in and have communicated here so to establish trust. Another’s word helps, here.”
        </blockquote>
        <span className='col-span-12'>
          Sharif Elshinawi
        </span>
        <span className='col-span-12'>
          CEO & Co-Founder, Dream Fight
        </span>
      </section>
      <div className='grid-container divider col-start-2'/>
      <section className='grid-container'>
        <h3 className='font-bold text-md col-start-2 col-span-2'>
          What Native did
        </h3>
        <ul className='col-start-5 col-span-7'>
          <li>
            Research and product strategy
          </li>
          <li>
            Prototyping and early user testing
          </li>
          <li>
            Custom software design and engineering
          </li>
          <li>
            Real-time, modern live-stream architecture
          </li>
          <li>
            AI engine with custom training, event detections
          </li>
          <li>
            High-speed WebGL graphics rendering
          </li>
        </ul>
      </section>
      <div className='grid-container divider col-start-2'/>
      <section className='grid-container'>
        <h3 className='font-bold text-md col-start-2'>
          Outcomes
        </h3>
        <div className='col-start-5 col-span-2'>
          <div className='font-bold text-2xl'>
            1
          </div>
          <span className='text-xs'>
            GTM partner deal with Gen Z platform
          </span>
        </div>
        <div className='col-start-8 col-span-2'>
          <div className='font-bold text-2xl'>
            3
          </div>
          <span className='text-xs'>
            weeks from kick-off to prototype
          </span>
        </div>
        <div className='col-start-2 col-span-2'>
          <div className='font-bold text-2xl'>
            5
          </div>
          <span className='text-xs'>
            user tested
          </span>
        </div>
        <div className='col-start-5 col-span-2'>
          <div className='font-bold text-2xl'>
            5
          </div>
          <span className='text-xs'>
            pitches to top-tier sports firms
          </span>
        </div>
        <div className='col-start-8 col-span-2'>
          <div className='font-bold text-2xl'>
            3
          </div>
          <span className='text-xs'>
            advisors onboarded: AI, commercial, and partnerships
          </span>
        </div>
      </section>
      <div className='grid-container divider col-start-2'/>
      <section className='grid-container'>
        <h3 className='font-bold text-md col-start-2 col-span-2'>
          3 Big Takeaways
        </h3>
        <ol className='col-start-5 col-span-3'>
          <li>
            01. Balancing vision with feedback
          </li>
          <li>
            02. Solving first problems
          </li>
          <li>
            03. Build and grow with early users
          </li>
        </ol>
      </section>
      <div className='grid-container divider col-start-2'/>
      <section className='grid-container'>
        <h3 className='font-bold text-lg col-start-2 col-span-2'>
          01.
        </h3>
        <h3 className='text-lg col-start-5 col-span-8'>
          Balancing vision with feedback
        </h3>
        <h4 className='col-start-2 col-span-2'>
          Iterate early
        </h4>
        <div className='col-start-5 col-span-8'>
          <p>
            Dream Fight started ambitiously as a basketball concept inspired by popular titles like NBA Jam that united sport fans and gamers alike. But because building the product fully could take years, Native explored new ways to help Sharif create a working prototype that enabled him to play live matches with test users in weeks, not years.
          </p>
          <p>
            As an augmented reality experience, most of the game is the sport, and the Dream Fight layer can be simplified as "shot-calling as a game" that needs only scoring, detection, and an organized set of rules as basic requirements.
          </p>
          <p>
            Dream Fight started ambitiously as a basketball concept inspired by popular titles like NBA Jam that united sport fans and gamers alike. But because building the product fully could take years, Native explored new ways to help Sharif create a working prototype that enabled him to play live matches with test users in weeks, not years.
          </p>
          <p>
            However, to really surprise and delight the user, Native developed a way to also to make Dream Fight feel real to test users. To accomplish this, the team simulated the graphics overlay of the game with the creative use of OBS Studio, hotkeys, and animation triggers to deliver realistic gameplay within the first 30 days of the project.
          </p>
        </div>
      </section>
      <div className='grid-container divider col-start-2'/>
      <figure className='bg-black'>
        <StaticImage
          src='../images/df-case-study-image.png'
        />
        <figcaption>
          Foo bar baz
        </figcaption>
      </figure>
    </main>
  )
}

export default FeaturedPage
