import React from "react"
import * as Styled from "./Styled"

export const LinearGradientDeg = ({linearGradientDeg,setLinearGradientDeg}) => {
  return (
    <Styled.BorderImageTool>
      <Styled.Paragraph>degree</Styled.Paragraph>
      
      <Styled.LinearGradientInput
        value={linearGradientDeg}
        onChange={(e) => setLinearGradientDeg(e.target.value)}
      />
      <Styled.Paragraph>{` ${linearGradientDeg} deg`}</Styled.Paragraph>
    </Styled.BorderImageTool>
  )
}
