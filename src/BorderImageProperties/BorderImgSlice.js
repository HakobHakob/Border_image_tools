import React,{useContext} from "react"
import * as Styled from "./Styled"
import { Context } from "./Context"

export const BorderImgSlice = ({ data, changeData}) => {
   const {radioInputsData} = useContext(Context)
  const borderImageSlice = data.borderImageSlice
  return (
    <Styled.BorderImageTool
    radioInputsData = {radioInputsData}
    >
      <Styled.Paragraph>slice</Styled.Paragraph>
      <Styled.BoprderImgSliceInput
       radioInputsData={radioInputsData}
        value={borderImageSlice}
        onChange={(e) => changeData({ ...data, borderImageSlice: e.target.value })}
      />
      <Styled.Paragraph>{`Slice percent is: ${borderImageSlice} %`}</Styled.Paragraph>
    </Styled.BorderImageTool>
  )
}