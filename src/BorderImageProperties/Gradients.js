import React, { useState } from "react"
import * as Styled from "./Styled"
import { RADIO_INPUTS_IDS } from "./Constants"

export const Gradients = ({ checkedGradient, setCheckedGradient }) => {
  // const [checked, setChecked] = useState(false)

  const changeInputCheckedStatus = (inputId,checked) => {
    // setChecked(!poghos)

    console.log(inputId, "id")
    const clonedData = [...checkedGradient]

    setCheckedGradient(
      RADIO_INPUTS_IDS.map((id) => {
        if (id === inputId) {
          return { ...clonedData, checked: !checked }
        } else {
          return clonedData
        }
      })
    )
  }

  return (
    <Styled.BorderImageTool>
      <Styled.Paragraph>gradients</Styled.Paragraph>

   
        {checkedGradient.map((input, index) => {
          return (
            <Styled.RadioButtonsTabs key={index}>
            <Styled.GradientsRadioLabel htmlFor={input.id}  >
              {input.placeholder}
              <Styled.LinearGradientRadio
                id={input.id}
                checked={input.checked}
                name={input.name}
                value={input.placeholder}
                onChange={() => changeInputCheckedStatus(input.id,input.checked)}
              />
            </Styled.GradientsRadioLabel>
            </Styled.RadioButtonsTabs>
          )
        })}
      
    </Styled.BorderImageTool>
  )
}
