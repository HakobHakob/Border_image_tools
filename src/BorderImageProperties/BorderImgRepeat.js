import React from "react"
import * as Styled from "./Styled"
import { BORDER_IMG_REPEAT_VALUES } from "./Constants"

export const RepeatSelect = ({ onChange }) => {
  return (
    <Styled.BorderImageTool>
      <Styled.Paragraph>repeat</Styled.Paragraph>
      <Styled.BorderImgRepeatSelect onChange={onChange}>
        {BORDER_IMG_REPEAT_VALUES.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </Styled.BorderImgRepeatSelect>
    </Styled.BorderImageTool>
  )
}
