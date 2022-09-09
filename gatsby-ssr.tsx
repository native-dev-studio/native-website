import * as React from "react"
import type { GatsbySSR } from "gatsby"

export const onPreRenderHTML: GatsbySSR["onPreRenderHTML"] = ({ getHeadComponents, replaceHeadComponents }) => {
  const headComponents = getHeadComponents();
  const key = headComponents.length;

  replaceHeadComponents([
    ...headComponents,
    <title key={key}>Native</title>,
    <meta name='icon' href='./src/images/icon.png' />,
  ])
}
