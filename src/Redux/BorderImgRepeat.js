import { BORDER_IMAGE_REPEAT } from "../BorderImageProperties/Constants";

const initialRepeatValue = {
    borderImageRepeatValue:"stretch",
}

export const borderImgRepeatReducer = (state = initialRepeatValue, action ) =>{
    switch (action.type) {
        case BORDER_IMAGE_REPEAT:
            return{
                borderImageRepeatValue: action.payload.borderImageRepeatValue
            }
          
    
        default:
            return state
    }

}

export const borderImageRepeatResult = (state) =>{
    return state.borderImageRepeat.borderImageRepeatValue
}

export const editImageRepeatValue = (newValue) =>{
    return {
        type:BORDER_IMAGE_REPEAT,
        payload:{
            borderImageRepeatValue: newValue,
        }
    }
}