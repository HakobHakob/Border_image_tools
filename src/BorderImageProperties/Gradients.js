import React from "react"
import * as Styled from "./Styled"
import { RADIO_INPUTS_DATA } from "./Constants"

export const Gradients = ({ checkedGradient, setCheckedGradient }) => {


  const changeInputCheckedStatus = ( id,checkedGradient,setCheckedGradient) => {
    
    const clonedData = [...checkedGradient]
    console.log(clonedData,'cccv')

    setCheckedGradient(
      clonedData.map((inputData) =>
        inputData.id === id 
          ? { ...inputData, checked: !inputData.checked }
          : inputData
      )
    )
  }
  return (
    <Styled.BorderImageTool>
      <Styled.Paragraph>gradients</Styled.Paragraph>

      {checkedGradient.map((input, index) => {
        return (
          <Styled.RadioButtonsTabs key={index}>
            <Styled.LinearGradientRadio
              id={input.id}
              checked={input.checked}
              value = {input}
              onChange={() => changeInputCheckedStatus(input.id,checkedGradient,setCheckedGradient)}
            />
            <Styled.GradientsRadioLabel htmlFor={input.id}>
              {input.placeholder}
            </Styled.GradientsRadioLabel>
          </Styled.RadioButtonsTabs>
        )
      })}
    </Styled.BorderImageTool>
  )
}
