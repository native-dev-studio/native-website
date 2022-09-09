import * as React from "react"
import { Link, graphql } from "gatsby"
import type { HeadFC } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

const FeaturedPage = () => {
  return (
    <main className='bg-gray'>
      <div className='banner mb-10' />
      <Link to='/'>
        <StaticImage 
          src='../images/native-logo.svg'
          alt='A logo' 
          height={50}
          className='lg:ml-44 ml-4 mb-12'
          placeholder='tracedSVG'
        />
      </Link>
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
          alt='a basketball game played on OBS Studio'
        />
        <figcaption>
          Foo bar baz
        </figcaption>
      </figure>
      <section className='grid-container'>
        <p className='col-start-5 col-span-8'>
          With this working prototype, Sharif was able to start improving the game design with continuous user feedback, while Native focused on de-risking key technical challenges ahead. Together, a feedback loop between design and engineering covered all the critical areas of product development to make rapid progress based on real-world feedback and market validation.
        </p>
      </section>
      <div className='grid-container divider col-start-2'/>
      <section className='grid-container'>
        <div className='col-start-5 col-span-8'>
          <p>
            While prototyping, we learned:
          </p>
          <ul>
            <li>
              For the system, players and actions move so quickly that AI models would struggle to detect and track them, especially as other players obstructed the view, and jerseys worn by fans and benched players would accidentally mislead the object tracking system!
            </li>
            <li>
              For the viewers, play-by-play betting had too many possibilities and not enough time to speculate over. In some cases, players would also get injured and benched, which became a twist to solve for.
            </li>
          </ul>
          <p>
            The results were in: users liked playing with the prototype, but basketball presented some unseen challenges and unpredictability for the system. Although it was possible to overcome the technical challenges with basketball, a new direction was needed to launch sooner into the market to keep up momentum and raise funding. 
          </p>
          <p>
            Tennis became a natural choice between of its rhythm and simplicity. Regulated attire, no overlapping objects, and fixed cameras. 
          </p>
          <p>
            In the time that most new products would still be in the ideation stage, Dream Fight had built out a working prototype with basketball and we were ready to apply what we learned to pivot into a new arena altogether: "Tennis, here we come!"
          </p>
        </div>
      </section>
      <div className='grid-container divider col-start-2'/>
      <section className='grid-container'>
        <h3 className='font-bold text-lg col-start-2 col-span-2'>
          02.
        </h3>
        <h3 className='text-lg col-start-5 col-span-8'>
          Solving first problems
        </h3>
        <h4 className='col-start-2 col-span-2'>
          Release planning
        </h4>
        <div className='col-start-5 col-span-8'>
          <p>
            Dream Fight's premier tennis debut needed to focus on the user's first experience with simple features. The initial release for early users became known as Pong, named after the 1972 Atari table tennis classic that went on to pioneer the video game industry. 
          </p>
          <p>
            But in Dream Fight, the experience goes from 2D into extended reality, and where users had the ability to speculate on service shots over a streamed tennis game.
          </p>
        </div>
      </section>
      <figure className='bg-black'>
        <StaticImage
          src='../images/df-case-study-image.png'
          alt='Nadal swinging with video data alongside'
        />
        <figcaption>
          Foo bar baz
        </figcaption>
      </figure>
      <section className='grid-container'>
        <div className='col-start-5 col-span-8'>
          <p>
            The alpha release had several core technical components:
          </p>
          <ul>
            <li>
              Live stream: Video is streamed using adaptive bitrate processing so that users could play Dream Fight smoothly under dynamic network conditions with the overlay graphics scaling accordingly.
            </li>
            <li>
              Network: Backend systems had the ability to scale its feed across multiple devices and compatible streaming formats.
            </li>
            <li>
              Rendering: Client application had the ability to render complex animations such as high-volume particle generation and data-driven behavior over GPU on either mobile and browser.
            </li>
          </ul>
          <p>
            The Pong release was designed to be a simple, play-once demo. It had a small set of options for you to guess over each serve, a laser graphic that visualizes the ball's motion, and a counter that said how many times you were right. That's it, and that's all we needed.
          </p>
          <p>
            Sharif and Native's bet was that early users would be thrilled by the novel experience, just as pong had in the past, and that investors could see the future of the industry with it.
          </p>
          <p>
            Now, the team needed to figure out how to promote the early game and to investors.
          </p>
        </div>
      </section>
      <div className='grid-container divider col-start-2'/>
      <section className='grid-container'>
        <h3 className='font-bold text-lg col-start-2 col-span-2'>
          03.
        </h3>
        <h3 className='text-lg col-start-5 col-span-8'>
          Build and grow with early users
        </h3>
        <h4 className='col-start-2 col-span-2'>
          User acquisition
        </h4>
        <div className='col-start-5 col-span-8'>
          <p>
            In 2022, Dream Fight secured a go-to-market partnership with NFT community, Collective.xyz (100K MAU), for its Pong release.
          </p>
          <p>
            Despite the current market downturn, the team believed that, as a backstage pass with Kickstarter vibes, Collective's users would be attracted to Dream Fight's NFT campaign that centers around unlocking new gaming and social experiences alongside Dream Fight's roadmap towards its game-day launch.
          </p>
        </div>
      </section>
      <figure className='bg-black'>
        <StaticImage
          src='../images/df-case-study-image.png'
          alt='Nadal swinging with video data alongside'
        />
        <figcaption>
          Foo bar baz
        </figcaption>
      </figure>
      <section className='grid-container'>
        <div className='col-start-5 col-span-8'>
          <p>
            As part of this campaign, Sharif and Native did the following:
          </p>
          <ul>
            <li>
              Campaign strategy: With Collective's help, the team worked to understand their partner's target audience and designed various concepts to test with
            </li>
            <li>
              Screenplay written from the perspective of a Collective user to serve both as an NFT campaign plan for GTM stakeholders and a design brief for visual artists
            </li>
            <li>
              Branded NFTs hosted on Ethereum and customized to meet specific campaign requirements for the site 
            </li>
          </ul>
          <p>
            3D visual assets that contained artistic nuances foreshadowing future roadmap events
          </p>
          <p>
            Dream Fight's "Get in the Game" campaign launches in October 2022 for 100 early users to play, for the first time, a live interactive game that honors and celebrates the sport for the next generation of fans and gamers.
          </p>
        </div>
      </section>
    </main>
  )
}

export default FeaturedPage
