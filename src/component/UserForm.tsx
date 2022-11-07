import React, { ChangeEventHandler, FormEventHandler } from "react";
import { User } from "./userList";


interface Props{
    formHanlder:FormEventHandler<HTMLFormElement>,
    setUser:React.Dispatch<React.SetStateAction<User>>,
    user:User
}
const UserForm:React.FC<Props>= (props:Props)=>{
    const {formHanlder,setUser,user} = props;
    const onchangeHandler:ChangeEventHandler<HTMLInputElement> = (e) =>{
        e.preventDefault();
        setUser({...user,[e.target.name]:e.target.value})
    }    
    return(
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <div className="border shadow m-3 p-3">
                        <form onSubmit={formHanlder}>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control" placeholder="name" name="name" value={user.name} onChange={onchangeHandler}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">User Name:</label>
                            <input type="text" className="form-control" placeholder="username" name="username" value={user.username} onChange={onchangeHandler} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Phone:</label>
                            <input type="text" className="form-control" placeholder="phone" name="phone" value={user.phone} onChange={onchangeHandler}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input type="email" className="form-control" placeholder="email" name="email" value={user.email} onChange={onchangeHandler}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Website:</label>
                            <input type="text" className="form-control" placeholder="website" name="website" value={user.website} onChange={onchangeHandler}/>
                        </div>
                        <div className="mb-3">
                            <button type="submit" className="btn btn-primary">{user.id ? "Update User":"Add User"}</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default UserForm;