import styled from "styled-components"
import babol from "./Img/babol.jpg"
import florid from "./Img/florid.jpg"

export const GeneralStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`
export const Container = styled.div`
  background-color: rgb(130, 158, 146);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`
export const ViewBoard = styled(GeneralStyles)`
  border: 1px solid black;
`
export const Img = styled.img`
  max-width: 100%;
`
export const LeftContainer = styled(GeneralStyles)`
  border-style: dotted;
  border-width: 20px;
  border-image-width: ${({ borderImgWidth }) => borderImgWidth}px;
  border-image-source: url(${babol});
  border-image-repeat: ${({ borderImgRepeat }) => borderImgRepeat};
  border-image-slice: 100;
`
/*border-image-slice: 100 fill;*/

export const CenterContainer = styled(GeneralStyles)`
  border-style: dashed;
  border-width: 20px;
  border-image-slice: 40 ;
  border-image: linear-gradient(
    ${({ linearGradientDeg }) => linearGradientDeg}deg,
      red,
      yellow,
      lime,
      aqua,
      blue,
      magenta,
      red
    )
    1 round;
`

/*1 0 inherit,stretch,round,space,repeat*/
/* border-image: radial-gradient(rgb(0, 143, 104), rgb(250, 224, 66)) 1; */
/* border-image: conic-gradient(red, yellow, lime, aqua, blue, magenta, red) 1; */

export const RightContainer = styled(GeneralStyles)`
  border-style: solid;
  border-width: 20px;
  border-image-source: url(${florid});
  border-image-slice: ${({ borderImgSlice }) => borderImgSlice};
  border-image-outset: ${({ borderImgOutset }) => borderImgOutset};
  border-image-repeat: ${({ borderImgRepeat }) => borderImgRepeat};
`
/* border-image: repeating-linear-gradient(30deg, lime, aqua, blue, magenta 3px)
  30; */
/*fill*/

export const BorderImageTool = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  text-transform: uppercase;
  padding: 10px;
  margin: 10px;
 
`

export const CheckBox = styled.input.attrs((props) => ({
  type: "checkbox",
}))`
  width: 1.6em;
  height: 1.6em;
  border-radius: 0.15em;
  border: 0.15em solid #007a7e;
  outline: none;
  cursor: pointer;
`

export const Paragraph = styled.p`
  font-size: 15px;
`

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`
export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`
export const ToolBoard = styled(BorderImageTool)`
  border: 1px solid black;
  width:250px;
`

export const BoprderImgWidthInput = styled.input.attrs((props) => ({
  type: "Range",
  min:"1",
  max: "100",
  size: props.size || "10px",
}))`
  cursor: pointer;
  color: #0075ff;
  font-size: 17px;
  border: none;
  border-radius: 3px;
  outline: none;
`
export const BoprderImgOutsetInput = styled.input.attrs((props) => ({
  type: "Range",
  min: "0",
  max: "3",
  size: props.size || "10px",
}))`
  cursor: pointer;
  font-size: 10px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  outline: none;
`
export const BoprderImgSliceInput = styled.input.attrs((props) => ({
  type: "Range",
  min: "5",
  max: "100",
  size: props.size || "10px",
}))`
  cursor: pointer;
  font-size: 10px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  outline: none;
`
export const LinearGradientInput = styled.input.attrs((props) => ({
  type: "Range",
  min: "0",
  max: "360",
  size: props.size || "10px",
}))`
  cursor: pointer;
  font-size: 10px;
  border: 2px solid palevioletred;
  border-radius: 3px;
  outline: none;
`

export const BorderImgRepeatSelect = styled.select`
  border-radius: 2px;
  text-align: center;
  padding: 4px 10px;
  border: none;
  font-size: 17px;
  outline: none;
`
