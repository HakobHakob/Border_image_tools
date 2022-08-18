import React from "react"

import * as Styled from "./Styled"

export const BorderImgWidth = ({ borderImgWidth, setBorderImgWidth }) => {

  return (
    <Styled.BorderImageTool>
      <Styled.Paragraph>width</Styled.Paragraph>
      <Styled.BoprderImgWidthInput
        value={borderImgWidth}
        onChange={(e) => setBorderImgWidth(e.target.value)}
      />
      <Styled.Paragraph>{`${borderImgWidth}px`}</Styled.Paragraph>
    </Styled.BorderImageTool>
  )
}
