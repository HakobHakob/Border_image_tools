import React from "react"
import * as Styled from "./Styled"
import footballer from "./Img/picture.jpg"

import { RADIO_INPUTS_DATA } from "./Constants"
import { useSelector } from "react-redux"
import { borderImageRepeatResult } from "../Redux/BorderImgRepeat"

export const ViewBoardSection = (data) => {


 

  const borderImgWidth = data.styledData.borderImageWidth

  console.log(borderImgWidth, "data")

  const borderImgOutset = data.styledData.borderImageOutset
  const linearGradientDeg = data.styledData.linearGradientDeg
  const borderImgSlice = data.styledData.borderImageSlice
  const borderImgValue = useSelector(borderImageRepeatResult)
  const radioInputsData = RADIO_INPUTS_DATA

  return (
    <>
      <Styled.Container>
        <Styled.CenterContainer
          linearGradientDeg={linearGradientDeg}
          radioInputsData={radioInputsData}
          borderImgSlice={borderImgSlice}
          borderImgOutset={borderImgOutset}
          borderImgWidth={borderImgWidth}
          borderImgRepeat={borderImgValue}
        >
          <Styled.Img src={footballer} alt="alt" />
        </Styled.CenterContainer>
      </Styled.Container>
    </>
  )
}
