import React from "react"
import * as Styled from "./Styled"
import footballer from "./Img/baby.jpg"

import { RADIO_INPUTS_DATA } from "./Constants"
import { useSelector } from "react-redux"
import { borderImageRepeatResult } from "../Redux/BorderImgRepeat"

export const ViewBoardSection = (data) => {
  const borderImgWidth = data.styledData.borderImageWidth
  const borderImgOutset = data.styledData.borderImageOutset
  const linearGradientDeg = data.styledData.linearGradientDeg
  const borderImgSlice = data.styledData.borderImageSlice
  const borderImgValue = useSelector(borderImageRepeatResult)
  const radioInputsData = RADIO_INPUTS_DATA

  return (
    <>
      <Styled.Container>
        <Styled.CenterContainer
          borderImgWidth={borderImgWidth}
          borderImgOutset={borderImgOutset}
          borderImgSlice={borderImgSlice}
          linearGradientDeg={linearGradientDeg}
          radioInputsData={radioInputsData}
          borderImgRepeat={borderImgValue}
        >
          <Styled.Img src={footballer} alt="alt" />
        </Styled.CenterContainer>
      </Styled.Container>
    </>
  )
}
