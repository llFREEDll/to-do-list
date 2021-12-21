//manage user actions 
const SelectedTaskReducer = (state = {}, action) => {

    const { type } = action

    switch (type) {
        case "selectTask":
            // console.log(action.data)
            return { task: action.task }
        case "EditDescription":
            // console.log(action.data)
            return {
                task: {
                    ...state.task,
                    description: action.newDescription
                }
            }
        case "EditIsDone":
            // console.log(action.data)
            return {
                task: {
                    ...state.task,
                    isDone: action.newIsDone
                }
            }
            case "DeleteTask":
            // console.log(action.data)
            return {}
        default:
            return state
    }
}

const selectATask = {
    type: "selectTask"
}
const editDescription = {
    type: "EditDescription"
}
const editIsDone = {
    type: "EditIsDone"
}
const deleteTask = {
    type: "DeleteTask"
}
export { SelectedTaskReducer, selectATask, editDescription, editIsDone ,deleteTask}