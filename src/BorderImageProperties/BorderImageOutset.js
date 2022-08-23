import React,{useContext} from "react"
import * as Styled from "./Styled"
import { Context } from "./Context"

export const BorderImgOutset = ({data,changeData}) => {
  const {radioInputsData} = useContext(Context)
  const borderImageOutset = data.borderImageOutset
  return (
    <Styled.BorderImageTool
    radioInputsData = {radioInputsData}
    >
      <Styled.Paragraph>outset</Styled.Paragraph>
      <Styled.BoprderImgOutsetInput
       radioInputsData={radioInputsData}
        value={borderImageOutset}
        onChange={(e) => changeData({ ...data, borderImageOutset: e.target.value })}
      />
      <Styled.Paragraph>{`Outset length is: ${borderImageOutset}`}</Styled.Paragraph>
    </Styled.BorderImageTool>
  )
}
