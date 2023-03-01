import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import {toast} from "react-toastify"
import { useNavigate} from "react-router-dom"

const Add = () => {

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [number,setNumber] = useState("")
    
    const dispatch = useDispatch();

    const contacts = useSelector((state) => state);

    const navigate = useNavigate( );

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkemail = contacts.find(contact => contact.email === email);

        const checkNumber = contacts.find(contact => contact.number === parseInt(number));


        if(!email || !number || !name){  
            return toast.warning("Please fill in all fields!")
        }

        if(checkemail){
            return toast.error("This email already exists!")
        }

        if(checkNumber){
            return toast.error("This number already exists!")
        }

        const data = {
            id:contacts[contacts.length - 1].id + 1,
            name,
            email,
            number,
        };

        dispatch({type:"Add_Contact",payload:data});
        toast.success("Student added successfully!! ");
        navigate("/");
    }


  return (
    <div className='container'>
         <h1 className='display-3 my-5 text-center'>Add Student</h1>
        <div className='row'>
            <div className='col-md-6 shadow mx-auto pd-7'>
                <form onSubmit={handleSubmit}>
                    <div className='form-group mt-4'>
                        <input type="text" placeholder='Name'
                        className='form-control'
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className='form-group mt-1'>
                        <input type="email" placeholder='Email'
                        className='form-control'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className='form-group mt-1'>
                        <input type="number" placeholder='Phone number'
                        className='form-control'
                        value={number} 
                        onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <div className='form-group mt-4'>
                        <input type="submit" value="Add student" className='btn btn-block btn-dark' />
                    </div>
                </form>
            </div>
        </div>

    </div>
  )
}

export default Add