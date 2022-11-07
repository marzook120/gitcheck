import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import { User } from "../../component/userList";


export enum UserActionType {
    ADD_USER="ADD_USER",
    EDIT_USER="EDIT_USER",
    DELETE_USER="DELETE_USER",
    FETCH_USER="FETCH_USER"
}

 export interface AddUserAction {
    type:UserActionType.ADD_USER,
    payload:User
}
 export interface EditUserAction {
    type:UserActionType.EDIT_USER,
    payload:User
}
 export interface DeleteUserAction {
    type:UserActionType.DELETE_USER,
    payload:{id:number}
}
 export interface FetchUserAction {
    type:UserActionType.FETCH_USER,
    payload:User[]
}

export type UserAction= AddUserAction|EditUserAction|DeleteUserAction|FetchUserAction;

const initState:User[] = [];

export const userReducer = (state=initState,action:UserAction) =>{
    switch(action.type){
        case UserActionType.ADD_USER:{
            return [...state,action.payload];
        }
        case UserActionType.EDIT_USER:{
            const index = state.findIndex(user=>user.id===action.payload.id)
            const updatedState = [...state];
            if(index >=0)
            {
                updatedState[index]={...action.payload}
            }
            return updatedState;
        }
        case UserActionType.DELETE_USER:{
            return state.filter(user=>user.id!==action.payload.id);
        }
        case UserActionType.FETCH_USER:{
            return action.payload;
        }
        default:
            return state;
    }
}


export const addUser = (data: User) => {
    return async (dispatch: Dispatch) => {
       axios.post('https://jsonplaceholder.typicode.com/users/', data)
            .then(response => {
                dispatch<AddUserAction>({
                    type: UserActionType.ADD_USER,
                    payload: response.data
                })

                console.log(response)

            }).catch(error => error)
    }


}

export const editUser = (data: User) => {
    return async (dispatch: Dispatch) => {
        axios.put(`https://jsonplaceholder.typicode.com/users/${data.id}`, data)
            .then(response => {
                dispatch<EditUserAction>({
                    type: UserActionType.EDIT_USER,
                    payload: response.data
                })

            }).catch(error => error)
    }
}

export const fetchUser = () => {
    console.log('fetchUser called');
    return async (dispatch: Dispatch) => {
          axios.get('https://jsonplaceholder.typicode.com/users/')
            .then(response => {
                dispatch<FetchUserAction>({
                    type: UserActionType.FETCH_USER,
                    payload: response.data
                })

            }).catch(error => error)
    }
}

export const deletUser = (id: number) => {
    return async (dispatch: Dispatch) => {
         axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                if(response.status===200)
                {
                    dispatch<DeleteUserAction>({
                        type: UserActionType.DELETE_USER,
                        payload: { id }
                    })
                }
               

            }).catch(error => error)
    }
}