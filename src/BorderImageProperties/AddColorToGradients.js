import React, { useState } from "react"
import * as Styled from "./Styled"

export const ColorForGradients = () => {
  const [colorInputsNumber, setColorInputsNumber] = useState([])

  const addColorInput = () => {
    setColorInputsNumber([...colorInputsNumber, colorInputsNumber.length + 1])
  }

  const removeColorInput = (number,index) => {

    colorInputsNumber[index] = number

    colorInputsNumber.splice(index)

    setColorInputsNumber([...colorInputsNumber])
    console.log(index, "index")
    console.log(number, "num")
  }

  return (
    <Styled.BorderImageTool>
      <Styled.Paragraph>gradient's color</Styled.Paragraph>

      <Styled.Button onClick={addColorInput}>Add</Styled.Button>

      {colorInputsNumber.map((inputNumber, index) => {
        return (
          <>
            <Styled.ColorInputBoard>
              <Styled.ColorInputRow key={index}>
                <Styled.GradientColorInput />
                <Styled.DeleteColorInputRow
                  key={index}
                  onClick={() => removeColorInput(inputNumber,index)}
                >
                  x
                </Styled.DeleteColorInputRow>
              </Styled.ColorInputRow>
            </Styled.ColorInputBoard>
          </>
        )
      })}
    </Styled.BorderImageTool>
  )
}
