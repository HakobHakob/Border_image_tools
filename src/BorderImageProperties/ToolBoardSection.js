import React from "react"

import { BorderImgWidth } from "./BorderImgWidth"
import { BorderImgOutset } from "./BorderImageOutset"
import { LinearGradientDeg } from "./LinearGradientDegree"
import { BorderImgSlice } from "./BorderImgSlice"
import { RepeatSelect } from "./BorderImgRepeat"
import { Gradients } from "./Gradients"
import { RADIO_INPUTS_DATA } from "./Constants"

import * as Styled from "./Styled"

export const ToolBoardSection = ({ data, onChange }) => {


 

  const borderImgWidth = data.borderImageWidth
  const borderImageOutset = data.borderImageOutset
  const linearGradientDeg = data.linearGradientDeg
  const borderImageSlice = data.borderImageSlice

  return (
    <>
      <Styled.Container>
        <Styled.ToolBoard>
          <BorderImgWidth data={data} some={onChange} />

          <BorderImgOutset
            borderImageOutset={borderImageOutset}
            onChange={onChange}
          />

          <BorderImgSlice
            borderImageSlice={borderImageSlice}
            onchange={onChange}
          />

          <Gradients />

          <LinearGradientDeg
            radioInputsData={RADIO_INPUTS_DATA}
            linearGradientDeg={linearGradientDeg}
            onchange={onChange}
          />

          <RepeatSelect />
        </Styled.ToolBoard>
      </Styled.Container>
    </>
  )
}
