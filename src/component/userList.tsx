import React from 'react'
import { useSelector } from 'react-redux';
import { StoreState } from '../redux/store';

export interface User {
    
    
    id?:number,
    name:string,
    username:string,
    phone:string,
    email:string,
    website:string
}

interface Iprops {
    user:User,
    key:number,
    deleteHandler:(id: number) => void,
    setUser:React.Dispatch<React.SetStateAction<User>>
}

const UserListItem:React.FC<Iprops>=(props:Iprops) => {
    const {user,key,deleteHandler,setUser}=props;
    const userList = useSelector<StoreState,User[]>(state=>state.users)
    return (
        <div className='row' key='key'>
            <div className='col'>
                <p>Name:{user.name}</p>
                <p>UserName:{user.username}</p>
                <p>Phone:{user.phone}</p>
                <p>Email:{user.email}</p>
                <p>Website:{user.website}</p>
                <button className="btn btn-danger m-2" onClick={()=>deleteHandler(user.id as number)}>delete</button>
                <button className="btn btn-danger m-2" onClick={()=>{setUser(user)}}>Edit</button>
            </div>
        </div>
    )
}

interface Props {
    deleteHandler:(id:number)=>void,
    setUser:React.Dispatch<React.SetStateAction<User>>
}

const UserList:React.FC<Props>=(props:Props)=> {
    const {deleteHandler,setUser}=props;
    const userList = useSelector<StoreState,User[]>(state=>state.users)

 return (
   
    <React.Fragment>
    <div className="row">
    {
       userList.map((user,key)=>{
        return<UserListItem user={user} key={key} deleteHandler={deleteHandler} setUser={setUser}/>
       })
    }
    </div>
</React.Fragment>
    
            )
}

export default UserList;