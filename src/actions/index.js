


export const handleChangeValue = e => {
    return {
        type: "SEARCH_CHANGE",
        text: e.target.value
    }
}

export const addItem = item => {
    return {
        type: "ITEM_SELECTED",
        payload: item
    }

}

export const removeItem = item => {
    console.log(item)
    return {
        type: "ITEM_REMOVED",
        payload: item

    }
}

