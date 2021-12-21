import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import '../styles/TaskOptions.css'
import { ApiLink } from "./api/links";
import { deleteTask, editDescription, editIsDone } from "./states/selectedTaskState";

const TaskOptions = ({ GetData }) => {

    const state = useSelector(state => state.SelectedTaskReducer)
    const dispatch = useDispatch()

    const HandleChange = (e) => {

        dispatch({
            type: editDescription.type,
            newDescription: e.target.value
        }
        )
        console.log(state.task.description)
    }
    const PutData = (desc, isDone) => {
        //console.log(ApiLink.task + state.task._id)
        axios({
            method: 'put',
            url: ApiLink.task + state.task._id.toString(),
            data: {
                description: desc,
                isDone: isDone
            }
        }).then(response => {
            GetData()
            alert("Task Edited!")

        }).catch(error => {
            alert("Error, pls try it later")
        });
    }
    const ClickPutData = (input) => {
        if (state.task !== undefined) {
            if (input === "Mark as done") {
                PutData(state.task.description, true)
                dispatch({
                    type: editIsDone.type,
                    newIsDone: true
                })
            }
            else if (input === "Mark as to do") {
                PutData(state.task.description, false)
                dispatch({
                    type: editIsDone.type,
                    newIsDone: false
                })
                
            }
            else if (input === "description")
                PutData(state.task.description, state.task.isDone)

        }
    }
    const ClickDeleteData = () => {
        if (state.task !== undefined) {
            axios({
                method: 'delete',
                url: ApiLink.task + state.task._id.toString()
            }).then(response => {
                GetData()
                alert("Task Deleted!")

            }).catch(error => {
                alert("Error, pls try it later")
            });
            dispatch({
                type: deleteTask.type
            })
        }
    }
    return (
        <div className="dark-container">
            {state.task === undefined ?
                <p> Select a task</p>
                :
                <input type="text" value={state && state.task.description} onChange={HandleChange} className="custom-input" />
            }

            <div className="task-options">
                <div className="col-4">
                    <input type="button" onClick={() => ClickPutData("Mark as done")} className="btn-ok" value="Mark as done" />
                </div>
                <div className="col-4">
                    <input type="button" onClick={() => ClickPutData("Mark as to do")} className="btn-to-do" value="Mark as to do" />
                </div>
                <div className="col-4">
                    <input type="button" onClick={() => ClickPutData("description")} className="btn-primary" value="Edit" />
                </div>
                <div className="col-4">
                    <input type="button" onClick={() => ClickDeleteData("description")} className="btn-to-do" value="Delete" />
                </div>
            </div>

        </div>
    )
}

export default TaskOptions