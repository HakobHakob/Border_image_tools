import React, { useContext } from "react"
import * as Styled from "./Styled"
import { Context } from "./Context"

export const LinearGradientDeg = ({ data, changeData }) => {
  const linearGradientDeg = data.linearGradientDeg
  const { radioInputsData } = useContext(Context)
  

  return (
    <Styled.BorderImageTool >
      <Styled.Paragraph>degree</Styled.Paragraph>
      <Styled.LinearGradientInput
        radioInputsData={radioInputsData}
        value={linearGradientDeg}
        onChange={(e) =>
          changeData({ ...data, linearGradientDeg: e.target.value })
        }
      />
      <Styled.Paragraph>{` ${linearGradientDeg} deg`}</Styled.Paragraph>
    </Styled.BorderImageTool>
  )
}
