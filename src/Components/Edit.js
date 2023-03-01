import React, { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Link,useParams, useNavigate} from "react-router-dom"
import {toast} from "react-toastify"


const Edit = () => {
  
    const {id} = useParams();

    const contacts = useSelector(state => state);

    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [number,setNumber] = useState("")

    const dispatch = useDispatch();

    const navigate = useNavigate( );

    const currentContact = contacts.find(contact=> contact.id === parseInt(id));
    
    useEffect(() => {                //currentcontact will change our state will also change
        if(currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setNumber(currentContact.number);
        }
    }, [currentContact])

    const handleSubmit = (e) => {
        e.preventDefault();

        const checkemail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email);

        const checkNumber = contacts.find((contact) => contact.id !== parseInt(id) && contact.number === parseInt(number));


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
            id:parseInt(id),
            name,
            email,
            number,
        };

        dispatch({type:"Update_Contact",payload:data});
        toast.success("Contact updated successfully!! ");
        navigate("/");
    }
    
    return (
    <div className='container'>
        {currentContact ? ( <>
            
    <h1 className='display-3 my-5 text-center'>Edit Contact {id}</h1>
   <div className='row'>
       <div className='col-md-6 shadow mx-auto pd-7'>
           <form onSubmit={handleSubmit}>
               <div className='form-group'>
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
               <div className='form-group'>
                   <input type="submit" value="Update student" className='btn btn-block btn-dark mt-2' />
               </div>
               <Link to="/" className="btn btn-danger ml-3 mt-2">Cancel</Link>
           </form>
       </div>
   </div>
 </>) : (<h1 className='display-3 my-5 text-center'>Contact {id} does not exist</h1>)}   
</div>
  )
}

export default Edit