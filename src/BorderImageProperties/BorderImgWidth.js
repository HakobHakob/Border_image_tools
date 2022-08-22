import React, { useState } from "react"
import * as Styled from "./Styled"

export const BorderImgWidth = ({ data, some }) => {
  const borderImageWidth = data.borderImageWidth


  return (
    <Styled.BorderImageTool>
      <Styled.Paragraph>width</Styled.Paragraph>
      <Styled.BoprderImgWidthInput
        value={borderImageWidth}
        onChange={(e) => some({ ...data, borderImageWidth: e.target.value })}
      />
      <Styled.Paragraph>{`${borderImageWidth} px`}</Styled.Paragraph>
    </Styled.BorderImageTool>
  )
}
// onChange={(e) => setItem({ ...item, series: e.target.value })}
