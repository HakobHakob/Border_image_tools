import React from "react"
import * as Styled from "./Styled"
import baby from "./Img/baby.jpg"
import footballer from "./Img/picture.jpg"
import { BORDER_IMG_REPEAT_VALUES } from "./Constants"
import { BorderImgWidth } from "./BorderImgWidth"

export const Container = () => {
  return (
    <Styled.Container>
      <Styled.ViewBoard>
        <Styled.LeftContainer>
          <Styled.Img src={baby} alt="alt" />
        </Styled.LeftContainer>
        <Styled.CenterContainer>
          <Styled.Img src={footballer} alt="alt" />
        </Styled.CenterContainer>
        <Styled.RightContainer>
          <Styled.Img src={baby} alt="alt" />
        </Styled.RightContainer>
      </Styled.ViewBoard>
      <Styled.ToolBoard>
        <p>border-image-tools</p>
        <BorderImgWidth />
        <Styled.BorderImageTool>
          <p>outset</p>
          <Styled.BoprderImgOutsetInput />
        </Styled.BorderImageTool>
        <Styled.BorderImageTool>
          <p>repeat</p>
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
