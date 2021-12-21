import NewToDo from "./components/NewToDo";
import TaskCard from "./components/TaskCard";
import TaskOptions from "./components/TaskOptions";
import "./styles/App.css"
import { useEffect } from "react"
import { getTasks } from "./components/states/TaskState";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ApiLink } from "./components/api/links";
import { selectATask } from "./components/states/selectedTaskState";


const App = () => {
  const state = useSelector(state => state.ApiReducer)
  const dispatch = useDispatch()


  const GetData = () => {
    axios.get(ApiLink.task)
      .then(response => {
        //console.log(response.data)
        dispatch({ type: getTasks.type, data: response.data })
        //console.log(state);
      }).catch(error => {
        console.log(error);
        return error
      })
  }
  useEffect(() => {
    GetData()
  }, [])

  const SelectedTask = (tarea) => {
    dispatch({ type: selectATask.type, task: tarea })
  }
  return (
    <>
      <div className="bar" >
        <h1>To Do List</h1>
      </div>
      <div className="dark-container">
        <TaskOptions  GetData = {GetData} />
        {state === null ?

          <>
            cargando...
          </>
          :
          <div>
            {state.data.map((tarea, idx) => (
              <TaskCard key={"tarea" + idx} SelectedTask={SelectedTask} tarea={tarea} />
            ))}

          </div>

        }
        <NewToDo GetData = {GetData} />
      </div>
    </>
  );
}

export default App;
