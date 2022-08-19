import React, { useState } from "react"
import * as Styled from "./Styled"
import baby from "./Img/baby.jpg"
import footballer from "./Img/picture.jpg"
import { BorderImgWidth } from "./BorderImgWidth"
import { BorderImgOutset } from "./BorderImageOutset"
import { LinearGradientDeg } from "./LinearGradientDegree"
import { BorderImgSlice } from "./BorderImgSlice"
import { RepeatSelect } from "./BorderImgRepeat"
import {
  WIDTH_INITIAL_VALUE,
  OUTSET_INITIAL_VALUE,
  DEGREE_INITIAL_VALUE,
  SLICE_INITIAL_VALUE,
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

  const dispatch = useDispatch()

  const borderImgValue = useSelector(borderImageRepeatResult)
  return (
    <Styled.Container>
      <Styled.ViewBoard>
        <Styled.LeftContainer
          borderImgRepeat={borderImgValue}
          borderImgWidth={borderImgWidth}
        >
          <Styled.Img src={baby} alt="alt" />
        </Styled.LeftContainer>
        <Styled.CenterContainer linearGradientDeg={linearGradientDeg}>
          <Styled.Img src={footballer} alt="alt" />
        </Styled.CenterContainer>
        <Styled.RightContainer
          borderImgRepeat={borderImgValue}
          borderImgSlice={borderImgSlice}
          borderImgOutset={borderImgOutset}
        >
          <Styled.Img src={baby} alt="alt" />
        </Styled.RightContainer>
      </Styled.ViewBoard>
      <Styled.ToolBoard>
        <Styled.Paragraph>border-image-tools</Styled.Paragraph>
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
    </Styled.Container>
  )
}
