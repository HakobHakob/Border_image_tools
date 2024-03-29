import React from "react"
import * as Styled from "./Styled"


export const Gradients = ({radioInputsData,setRadioInputsData}) => {



  const changeInputCheckedStatus = (id) => {
    const clonedData = [...radioInputsData]
    setRadioInputsData(
      clonedData.map((clonedInput) =>
        clonedInput.checked === true || clonedInput.id === id
          ? { ...clonedInput, checked: !clonedInput.checked }
          : clonedInput
      )
    )
  }
  return (
    <Styled.BorderImageTool>
      <Styled.Paragraph>gradients</Styled.Paragraph>

      {radioInputsData.map((inputData, index) => {
        return (
          <Styled.RadioButtonsTabs key={index}>
            <Styled.LinearGradientRadio
              id={inputData.id}
              checked={inputData.checked}
              name={inputData.name}
              onChange={() => changeInputCheckedStatus(inputData.id)}
            />
            <Styled.GradientsRadioLabel htmlFor={inputData.id}>
              {inputData.value}
            </Styled.GradientsRadioLabel>
          </Styled.RadioButtonsTabs>
        )
      })}
    </Styled.BorderImageTool>
  )
}
