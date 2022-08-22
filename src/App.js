import "./App.css"
import { ViewBoardSection } from "./BorderImageProperties/ViewBoardSection"

import React, { useState } from "react"
import { ToolBoardSection } from "./BorderImageProperties/ToolBoardSection"

const getDefaultBorderStyle = () => {
  return {
    borderImageWidth: 20,
    borderImageOutset: 0,
    borderImageSlice: 5,
    linearGradientDeg: 0,
    borderImageReapeat: ["stretch", "repeat", "round", "space", "inherit"],
    gradientType: ["linear-gradient", "radial-gradient", "conic-gradient"],
  }
}
const adjustDataForStyledComponent = (data) => {
  return data
}

function App() {
  const [data, changeData] = useState(getDefaultBorderStyle())


  return (
    <>
      <ToolBoardSection
        data={data}
        onChange={changeData}
      />
      <ViewBoardSection styledData={adjustDataForStyledComponent(data)} />
    </>
  )
}

export default App
