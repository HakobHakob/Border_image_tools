import React from "react"
import * as Styled from "./Styled"
import { BORDER_IMG_REPEAT_VALUES } from "./Constants"

export const RepeatSelect = ({ data, onChange }) => {
  const borderImageReapeat = data.borderImageReapeat
  return (
    <Styled.BorderImageTool>
      <Styled.Paragraph>repeat</Styled.Paragraph>
      <Styled.BorderImgRepeatSelect onChange={onChange}>
        {borderImageReapeat.map((option, i) => (
          <option key={i}>{option}</option>
        ))}
      </Styled.BorderImgRepeatSelect>
    </Styled.BorderImageTool>
  )
}
