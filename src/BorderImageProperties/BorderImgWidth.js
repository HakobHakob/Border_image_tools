import React, { useContext } from "react"
import * as Styled from "./Styled"
import { Context } from "./Context"

export const BorderImgWidth = ({ data, changeData }) => {
  const { radioInputsData } = useContext(Context)
  const borderImageWidth = data.borderImageWidth
  return (
    <Styled.BorderImageTool radioInputsData={radioInputsData}>
      <Styled.Paragraph>width</Styled.Paragraph>
      <Styled.BoprderImgWidthInput
        radioInputsData={radioInputsData}
        value={borderImageWidth}
        onChange={(e) =>
          changeData({ ...data, borderImageWidth: e.target.value })
        }
      />
      <Styled.Paragraph>{`${borderImageWidth} px`}</Styled.Paragraph>
    </Styled.BorderImageTool>
  )
}
