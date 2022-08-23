import React, { useState } from "react"

import { BorderImgWidth } from "./BorderImgWidth"
import { BorderImgOutset } from "./BorderImageOutset"
import { LinearGradientDeg } from "./LinearGradientDegree"
import { BorderImgSlice } from "./BorderImgSlice"
import { RepeatSelect } from "./BorderImgRepeat"
import { Gradients } from "./Gradients"
import { RADIO_INPUTS_DATA } from "./Constants"
import { Context } from "./Context"
import * as Styled from "./Styled"

export const ToolBoardSection = ({ data, onChange }) => {
  const [radioInputsData, setRadioInputsData] = useState(RADIO_INPUTS_DATA)
  
  return (
    <>
      <Styled.Container>
        <Context.Provider
          value={{
            radioInputsData,
          }}
        >
          <Styled.ToolBoard>
            <BorderImgWidth data={data} changeData={onChange} />
            <BorderImgOutset data={data} changeData={onChange} />
            <BorderImgSlice data={data} changeData={onChange} />

            <Gradients
              radioInputsData={radioInputsData}
              setRadioInputsData={setRadioInputsData}
            />

            <LinearGradientDeg
              radioInputsData={radioInputsData}
              data={data}
              changeData={onChange}
            />

            <RepeatSelect />
          </Styled.ToolBoard>
        </Context.Provider>
      </Styled.Container>
    </>
  )
}
