//manage api
const ApiReducer = (state = null, action) => {

    const { type } = action

    switch (type) {
        case "getTasks":
            //console.log({data :action.data})
            return { data: action.data }

        default:
            return state
    }
}

const getTasks = {
    type: "getTasks"
}

export { ApiReducer, getTasks }