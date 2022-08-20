import React, { useState } from "react"
import * as Styled from "./Styled"
import baby from "./Img/baby.jpg"
import footballer from "./Img/picture.jpg"
import { BorderImgWidth } from "./BorderImgWidth"
import { BorderImgOutset } from "./BorderImageOutset"
import { LinearGradientDeg } from "./LinearGradientDegree"
import { BorderImgSlice } from "./BorderImgSlice"
import { RepeatSelect } from "./BorderImgRepeat"
import { Gradients } from "./Gradients"
import {
  WIDTH_INITIAL_VALUE,
  OUTSET_INITIAL_VALUE,
  DEGREE_INITIAL_VALUE,
  SLICE_INITIAL_VALUE,
  RADIO_INPUTS_DATA,
} from "./Constants"
import { useDispatch, useSelector } from "react-redux"
import {
  borderImageRepeatResult,
  editImageRepeatValue,
} from "../Redux/BorderImgRepeat"

export const Container = () => {
  const [borderImgWidth, setBorderImgWidth] = useState(WIDTH_INITIAL_VALUE)
  const [borderImgOutset, setBorderImgOutset] = useState(OUTSET_INITIAL_VALUE)
  const [linearGradientDeg, setLinearGradientDeg] =
    useState(DEGREE_INITIAL_VALUE)
  const [borderImgSlice, setBorderImgSlice] = useState(SLICE_INITIAL_VALUE)
  const [checkedGradient, setCheckedGradient] = useState(RADIO_INPUTS_DATA)




  const dispatch = useDispatch()

  const borderImgValue = useSelector(borderImageRepeatResult)
  return (
    <Styled.Container>
      <Styled.ToolBoard>
        <BorderImgWidth
          borderImgWidth={borderImgWidth}
          setBorderImgWidth={setBorderImgWidth}
        />

        <BorderImgOutset
          borderImgOutset={borderImgOutset}
          setBorderImgOutset={setBorderImgOutset}
        />

        <BorderImgSlice
          borderImgSlice={borderImgSlice}
          setBorderImgSlice={setBorderImgSlice}
        />

        <Gradients
          checkedGradient={checkedGradient}
          setCheckedGradient={setCheckedGradient}
         
        />

        <LinearGradientDeg
          linearGradientDeg={linearGradientDeg}
          setLinearGradientDeg={setLinearGradientDeg}
        />

        <RepeatSelect
          onChange={(e) => {
            dispatch(editImageRepeatValue(e.target.value))
          }}
        />
      </Styled.ToolBoard>

      <Styled.ViewBoard>
        <Styled.CenterContainer linearGradientDeg={linearGradientDeg}>
          <Styled.Img src={footballer} alt="alt" />
        </Styled.CenterContainer>

        <Styled.RightContainer
          borderImgRepeat={borderImgValue}
          borderImgWidth={borderImgWidth}
          borderImgSlice={borderImgSlice}
          borderImgOutset={borderImgOutset}
        >
          <Styled.Img src={baby} alt="alt" />
        </Styled.RightContainer>
      </Styled.ViewBoard>
    </Styled.Container>
  )
}
