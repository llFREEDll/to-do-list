import axios from 'axios'
import React, { useState } from 'react'
import { ApiLink } from './api/links'

const NewToDo = ({GetData}) => {

    const [showAddInput, setShowAddInput] = useState(false)

    const HandleShowAddInput = () => setShowAddInput(!showAddInput)

    const [userInput, setUserInput] = useState({ newToDo: "" })
    const HandleChange = (e) => {
        const { name, value } = e.target
        setUserInput((prevState) => ({
            ...prevState,
            [name]: value
        }))
        //console.log(comunicadoSeleccionado)
    }

    const PostData = () => {
        if (userInput.newToDo.length > 0) {
            axios({
                method: 'post',
                url: ApiLink.task,
                data: {
                    description: userInput.newToDo,
                    isDone: false
                }
            }).then(response => {
                GetData()
                alert("Task Added!")

            }).catch(error => {
                alert("Error, pls try it later")
            });
            HandleShowAddInput()
        } else 
            alert("please add a decription")
    }
    return (
        <>
            {showAddInput &&
                <>
                    <input type="text" name="newToDo" style={{marginTop:"30px"}} onChange={HandleChange} className="custom-input" />
                    <br/>
                    <input type="button" onClick={() => PostData()} style={{marginTop:"20px"}} className="btn-primary" value="Add" />
                </>}
            <div onClick={HandleShowAddInput} style={{ marginTop: "30px" }}>
                <a> <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    width="60" height="60"
                    viewBox="0 0 172 172"
                    style={{ fill: "#000000" }}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: " normal" }}><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,17.2c-37.9948,0 -68.8,30.8052 -68.8,68.8c0,37.9948 30.8052,68.8 68.8,68.8c37.9948,0 68.8,-30.8052 68.8,-68.8c0,-37.9948 -30.8052,-68.8 -68.8,-68.8zM114.66667,91.73333h-22.93333v22.93333c0,3.17053 -2.56853,5.73333 -5.73333,5.73333c-3.1648,0 -5.73333,-2.5628 -5.73333,-5.73333v-22.93333h-22.93333c-3.1648,0 -5.73333,-2.5628 -5.73333,-5.73333c0,-3.17053 2.56853,-5.73333 5.73333,-5.73333h22.93333v-22.93333c0,-3.17053 2.56853,-5.73333 5.73333,-5.73333c3.1648,0 5.73333,2.5628 5.73333,5.73333v22.93333h22.93333c3.1648,0 5.73333,2.5628 5.73333,5.73333c0,3.17053 -2.56853,5.73333 -5.73333,5.73333z"></path></g></g></svg> </a>
            </div>
        </>
    )

}

export default NewToDo