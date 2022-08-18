import React, { useState } from "react"
import * as Styled from "./Styled"
import baby from "./Img/baby.jpg"
import footballer from "./Img/picture.jpg"
import { BORDER_IMG_REPEAT_VALUES } from "./Constants"
import { BorderImgWidth } from "./BorderImgWidth"
import { BorderImgOutset } from "./BorderImageOutset"
import { LinearGradientDeg } from "./LinearGradientDegree"
import { BorderImgSlice } from "./BorderImgSlice"

import {
  WIDTH_INITIAL_VALUE,
  OUTSET_INITIAL_VALUE,
  DEGREE_INITIAL_VALUE,
  SLICE_INITIAL_VALUE,
} from "./Constants"

export const Container = () => {
  const [borderImgWidth, setBorderImgWidth] = useState(WIDTH_INITIAL_VALUE)
  const [borderImgOutset, setBorderImgOutset] = useState(OUTSET_INITIAL_VALUE)
  const [linearGradientDeg, setLinearGradientDeg] =
    useState(DEGREE_INITIAL_VALUE)
  const [borderImgSlice, setBorderImgSlice] = useState(SLICE_INITIAL_VALUE)

  return (
    <Styled.Container>
      <Styled.ViewBoard>
        <Styled.LeftContainer borderImgWidth={borderImgWidth}>
          <Styled.Img src={baby} alt="alt" />
        </Styled.LeftContainer>
        <Styled.CenterContainer linearGradientDeg={linearGradientDeg}>
          <Styled.Img src={footballer} alt="alt" />
        </Styled.CenterContainer>
        <Styled.RightContainer
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

        <Styled.BorderImageTool>
          <Styled.Paragraph>repeat</Styled.Paragraph>
          <Styled.BorderImgRepeatSelect>
            {BORDER_IMG_REPEAT_VALUES.map((option, i) => (
              <option key={i} value={option.value}>
                {option.label}
              </option>
            ))}
          </Styled.BorderImgRepeatSelect>
        </Styled.BorderImageTool>
      </Styled.ToolBoard>
    </Styled.Container>
  )
}
