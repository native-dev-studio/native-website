import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'

const Footer = () => {
  return (
      <footer className='
        bg-gray-300
        lg:py-24
        py-10
      '>
          <StaticImage
            src='../images/native-logo.svg'
            alt='A logo'
            width={50}
            placeholder='tracedSVG'
            className='lg:ml-44 md:ml-9 ml-4 mb-5'
          />
          <div className='grid-container gap-y-5'>
            <p className='mt-2 mb-5'>
              Interested in learning more about our approach to custom software? Reach out to&nbsp;
              <a href='mailto:workwith@native.dev' className='underline'>
                workwith@native.dev
              </a>.
            </p>
            <div className='flex md:flex-row flex-col md:space-y-0 space-y-5'>
              <ul className='md:flex-auto'>
                <li className='md:text-md text-sm'>
                  Contact
                </li>
                <li>
                  <a href='mailto:workwith@native.dev' className='text-white md:text-sm text-xs'>
                    workwith@native.dev
                  </a>
                </li>
                <li>
                  <a href='mailto:careers@native.dev' className='text-white md:text-sm text-xs'>
                    careers@native.dev
                  </a>
                </li>
                <li>
                  <a href='mailto:press@native.dev' className='text-white md:text-sm text-xs'>
                    press@native.dev
                  </a>
                </li>
              </ul>
              <ul className='md:flex-auto'>
                <li className='md:text-md text-sm'>
                  Work with us
                </li>
                <li>
                  <a href='https://pitch.com/v/website-u6wxwg' className='text-white md:text-sm text-xs'>
                    Native Pitch Deck
                  </a>
                  <span className='ml-2 rounded-full bg-red py-1.5 px-4 text-xs bg-blue'>
                    New!
                  </span>
                </li>
              </ul>
              <ul className='md:flex-auto'>
                <li className='md:text-md text-sm'>
                  Connect
                </li>
                <li>
                  <a href='https://www.linkedin.com/company/native-dev' className='text-white md:text-sm text-xs'>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href='https://github.com/native-dev-studio' className='text-white md:text-sm text-xs'>
                    Github
                  </a>
                </li>
                <li>
                  <a href='https://www.instagram.com/ntv.dev' className='text-white md:text-sm text-xs'>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className='divider' />
            <p className='
              lg:col-start-2 lg:col-span-10
              col-span-4 text-xs
              -mt-5
              '>
              Copyright 2022. All Rights Reserved.
            </p>
          </div>
      </footer>
  )
}

export default Footer;
