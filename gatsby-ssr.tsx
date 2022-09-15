import * as React from "react"
import type { GatsbySSR } from "gatsby"

export const onPreRenderHTML: GatsbySSR["onPreRenderHTML"] = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();

  const tagline     = "Native | Expert partners in Web3 product, engineering, & strategy";
  const description = "We're an independent studio helping startups & businesses build their mission-critical products on Web3.";

  replaceHeadComponents([
    ...headComponents,
    <title key={0}>Native</title>,
    <meta  key={1} name='icon' href='./src/images/icon.png' />,
    <meta  key={2} property="og:title" content={tagline} />,
    <meta  key={3} property="og:type" content="website" />,
    <meta  key={4} property="og:description" content={description} />,
  ])
}
