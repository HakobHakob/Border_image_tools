import { combineReducers, createStore } from "redux"
import { borderImgRepeatReducer } from "./BorderImgRepeat"


export const reducers = combineReducers({
    borderImageRepeat:borderImgRepeatReducer,
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)