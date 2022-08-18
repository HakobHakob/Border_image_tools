import React from "react"
import * as Styled from "./Styled"

export const BorderImgSlice = ({borderImgSlice,setBorderImgSlice}) => {
  return (
    <Styled.BorderImageTool>
      <Styled.Paragraph>slice</Styled.Paragraph>
      <Styled.BoprderImgSliceInput
        value={borderImgSlice}
        onChange={(e) => setBorderImgSlice(e.target.value)}
      />
      <Styled.Paragraph>{`Slice percent is: ${borderImgSlice} %`}</Styled.Paragraph>
    </Styled.BorderImageTool>
  )
}