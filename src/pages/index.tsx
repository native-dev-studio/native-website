import * as React from "react"
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
    <main>
      <h1 className='text-3xl font-bold underline'>
        Expert partners in Web3 product, engineering & strategy
      </h1>
      <p>
        Native is an independent studio building mission-critical products for Web3 startups. We help define your technical vision and form the right team and cross-functional leadership to execute it.
      </p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
