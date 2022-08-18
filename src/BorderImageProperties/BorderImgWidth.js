import React, { useEffect, useRef, useState } from "react"
import * as Styled from "./Styled"
import { CHECKBOX_LABELS, Items } from "./Constants"

export const BorderImgWidth = () => {
  const [checkedItems, setCheckedItems] = useState(Items)

  const CheckBoxRef = useRef(null)

  const ToggleCheck = () => {
    const copyCheckedItems = [...checkedItems]

    setCheckedItems(
      copyCheckedItems.map((item) =>
        item.isChecked === false || item.isChecked === true
          ? { ...item, isChecked: !item.isChecked }
          : item
      )
    )
  }
  useEffect(() => {
    CheckBoxRef.current.setAttribute("checked", "")
    CheckBoxRef.current.checked = checkedItems.isChecked
    console.log(CheckBoxRef.current.checked, "24")
  }, [checkedItems.isChecked])



  const CheckEdges = (labelName) => {
    const cloneCheckedItems = [...checkedItems]
    setCheckedItems(
      cloneCheckedItems.map((item) =>
        item.name === labelName ? { ...item, isChecked: !item.isChecked } : item
      )
    )
  }

  return (
    <Styled.BorderImageTool>
      <Styled.Paragraph>width</Styled.Paragraph>
      <Styled.Ul>
        <Styled.Li>
          <Styled.CheckBoxAll
            id="CheckAll"
            value="all"
            onClick={ToggleCheck}
          />
          <label htmlFor="CheckAll">Check / Uncheck All</label>
        </Styled.Li>
      </Styled.Ul>

      <Styled.Ul>
        {CHECKBOX_LABELS.map((labelName, i) => {
          return (
            <Styled.Li key={i}>
              <Styled.CheckBox
                id={`custom-ceckbox-${i}`}
                ref={CheckBoxRef}
                name={labelName}
                value={labelName}
                onClick={() => CheckEdges(labelName)}
                defaultChecked={checkedItems.isChecked}
              ></Styled.CheckBox>
              <label htmlFor={`custom-ceckbox-${i}`}>{labelName}</label>
            </Styled.Li>
          )
        })}
      </Styled.Ul>

      <Styled.BoprderImgWidthInput />
    </Styled.BorderImageTool>
  )
}
