import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { deleteUser } from '../store/action/user'

function User() {
    const users =  useSelector((state)=>{
        return state.data.users
    })
   const dispatch = useDispatch();
  return (
    <div><h1>User</h1>
        {users.map((user,index)=>{
            return(
            <div key={index}>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.contact}</p>
                <p>{user.address}</p>
                <button onClick={()=>dispatch(deleteUser(index))}>Delete</button>
            </div>
            
            );
            
        })}
 </div>
  )
}

export default User