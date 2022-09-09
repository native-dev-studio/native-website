import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
  return (
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
  )
}

export default Footer;
