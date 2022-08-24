import React, { useState } from "react"
import * as Styled from "./Styled"

export const ColorForGradients = () => {
  const [colors, setColors] = useState([])

  const addColorInput = () => {
    setColors([...colors,"#000000"])
  }

  const removeColorInput = ( index) => {

    colors.splice(index, 1)
    setColors([...colors])
  }

  const colorPicker = (index, e) => {
    colors[index] = index
    setColors((colors) => {
      colors[index] = e.target.value
      return [...colors]
    })
  }

  return (
    <>
     
      <Styled.BorderImageTool>
        <Styled.Paragraph>gradient's color</Styled.Paragraph>

        <Styled.Button onClick={addColorInput}>Add</Styled.Button>

        {colors.map((color, index) => {
          return (
            <Styled.ColorInputBoard key={index}>
              <Styled.ColorInputRow>

                <Styled.GradientColorInput
                  value={color}
                  onChange={(e) => colorPicker(index, e)}
                />
                <Styled.DeleteColorInputRow
                  onClick={() => removeColorInput(index)}
                >
                  x
                </Styled.DeleteColorInputRow>
              </Styled.ColorInputRow>
            </Styled.ColorInputBoard>
          )
        })}
      </Styled.BorderImageTool>
    </>
  )
}
