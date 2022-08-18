import React from "react"
import * as Styled from "./Styled"

export const BorderImgOutset = ({borderImgOutset,setBorderImgOutset}) => {
  return (
    <Styled.BorderImageTool>
      <Styled.Paragraph>outset</Styled.Paragraph>
      <Styled.BoprderImgOutsetInput
        value={borderImgOutset}
        onChange={(e) => setBorderImgOutset(e.target.value)}
      />
      <Styled.Paragraph>{`Outset length is: ${borderImgOutset}`}</Styled.Paragraph>
    </Styled.BorderImageTool>
  )
}
