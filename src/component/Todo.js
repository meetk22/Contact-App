import React, { useState } from 'react'
import {addTodo, deleteTodo, removeTodo} from "../actions/action"
import { useDispatch, useSelector } from 'react-redux';


const Todo = () =>{

    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    const list = useSelector((state)=>state.todoReducers.list)

    return (
        <>
            <div className="main-div">
                <div className='child-div'>
                    <div className='heading'><h3>To-Do List</h3></div>
                    <div className='addItems'>
                    <input className='input' type="text" placeholder='Add Items Here...'
                    value={inputData}
                    onChange={(event) => setInputData(event.target.value)}></input>
                    <i className="button" title='Add items' onClick={()=>dispatch(addTodo(inputData),setInputData(''))}><span>Add</span></i>
                    </div>

                    <div>
                        {
                            list.map((element) => {
                                return(
                                    <div key={element.id}>
                                    <p>{element.data}</p>
                                    <i className='fa-solid fa-trash' title="Delete item" onClick={() =>dispatch(deleteTodo(element.id))}></i>
                                </div> 
                                )            
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;