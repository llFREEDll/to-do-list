import React from "react";
import '../styles/TaskCard.css'
const TaskCard = ({SelectedTask,tarea}) => {

    return (
        <>
            <div className="task-card">
                <div className="col">
                {tarea.isDone ? 
                <input type="button" className="btn-ok" value="Ok" />
                :
                <input type="button" className="btn-to-do" value="To do" />
                }
                
                </div>
                
                <div className="col">
                    {tarea.description}
                </div>
                
                <div className="col">
                    <input type="button" onClick={() => SelectedTask(tarea)} className="btn-primary" value="select"/>
                </div>
            </div>
        </>
    )
}
export default TaskCard