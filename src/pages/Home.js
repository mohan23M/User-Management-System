import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../store/action/user';

function Home() {

    const [user, setUser] = useState({
        name:"",
        email:"",
        contact:"",
        address:""
    });
const dispatch = useDispatch();

    function handleInput(e){

        const {name , value} = e.target

        setUser((premsg)=>{
            return{
                ...premsg,
                [name]:value
            }
        })
        
    }

    function submitBtn(e){
        e.preventDefault();
        dispatch(addUser(user))
        setUser({
         
            name:"",
            email:"",
            contact:"",
            address:""
        })
    }

  return (
    <div>
    <h1>Enter User Info</h1>
    <div>
    <form>

        <input placeholder='Enter Name' value={user.name} onChange={handleInput} name="name" />
        <input placeholder='Enter Email' value={user.email} onChange={handleInput} name="email"/>
        <input placeholder='Enter Contact' type="text" value={user.contact} onChange={handleInput} name="contact"/>
        <textarea placeholder='Address' value={user.address} onChange={handleInput} name="address"/>
        <button type='submit' onClick={submitBtn}>Submit</button>

    </form>
    </div>
    </div>
  )
}

export default Home