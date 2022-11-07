import React, { FormEventHandler, MouseEventHandler, useEffect, useState } from 'react';
import UserForm from './UserForm';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';

import UserList, { User } from './userList';
import { addUser, deletUser, editUser, fetchUser } from '../redux/reducer/userReducer';
interface Props{

}
const UserManagement:React.FC<Props>=(props:Props)=>{

    const dispatch = useDispatch<AppDispatch>();
    const [userList,setUserList] = useState<User[]>([]);
    const userInitialValue = {name:"",
    username:"",
    email:"",
    phone:"",
    website:""} as User;
  
    const [user,setUser]=useState<User>(userInitialValue);
    useEffect(()=>{
       dispatch(fetchUser())
    },[fetchUser])
  
    const formHandler:FormEventHandler<HTMLFormElement>=(e)=>{
      e.preventDefault();
      if(user.id) // update
      {
       dispatch((editUser(user))).then(()=>{
        setUser(userInitialValue);
       })
      }
      else // add
      {
        dispatch((addUser(user))).then(()=>{
            setUser(userInitialValue);
           })
      }
       
    }
  
    const deleteHandler = (id:number) =>{
      dispatch(deletUser(id))
    }

    return(
        <React.Fragment>
            <UserForm formHanlder={formHandler} setUser={setUser} user={user}/>
            <UserList deleteHandler={deleteHandler} setUser={setUser}/>
        </React.Fragment>
    )
}

export default UserManagement;

             