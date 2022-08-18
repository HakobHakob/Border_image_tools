import React, { useEffect, useState } from "react"
import * as Styled from "./Styled"
import { CHECKBOX_LABELS, Items } from "./Constants"

export const BorderImgWidth = () => {
  const [isChekedAll, setIsCheckedAll] = useState(Items)
  const [checkedItems, setCheckedItems] = useState(Items)

  const isAllSelected = Items.length > 0 && isChekedAll.length === Items.length

  const ToggleCheck = (e) => {
    const value = e.target.value

    if (value === "all") {
      setIsCheckedAll(isChekedAll.length === Items.length ? [] : Items)
    }
    const list = [...isChekedAll]
    const index = list.indexOf(value)

    console.log(isChekedAll,'isCh')
    console.log(index, "index")

    index === -1 ? list.push(value) : list.splice(index, 1)
    setIsCheckedAll(list)
  }

  const CheckEdges = (labelName) => {
    let clonedCheckedItems = [...checkedItems]
    setCheckedItems(
      clonedCheckedItems.map((item) =>
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
            onChange={ToggleCheck}
            checked={isAllSelected}
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
                name={labelName}
                value={labelName}
                onChange={() => CheckEdges(labelName)}
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
