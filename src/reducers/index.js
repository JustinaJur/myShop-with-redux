import { combineReducers } from 'redux';


const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ITEM_SELECTED':
            return [...state, action.payload]
        case "ITEM_REMOVED":
            let array = [...state];
            console.log(action.payload.name)
            console.log(action.payload)
            let found = array.find(el => el.name === action.payload.name);
            if (found) {
                let index = array.findIndex(el => el.name == action.payload.name);
                array.splice(index, 1)
            }
            return array
        default:
            return state
    }
}



const inputReducer = (state = " ", action) => {
    if (action.type === "SEARCH_CHANGE") {
        return action.text
    }
    return state
}



export default combineReducers({
    search: inputReducer,
    selected: itemsReducer
})

