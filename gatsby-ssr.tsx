import * as React from "react"
import type { GatsbySSR } from "gatsby"

export const onPreRenderHTML: GatsbySSR["onPreRenderHTML"] = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  const key = headComponents.length;

  const description = "We're an independent studio helping startups & businesses build their mission-critical products on Web3.";

  replaceHeadComponents([
    ...headComponents,
    <title key={key}>Native</title>,
    <meta name='icon' href='./src/images/icon.png' />,
    <meta property="og:title" content="Native" />,
    <meta property="og:type" content="website" />,
    <meta property="og:description" content={description} />,
  ])
}
