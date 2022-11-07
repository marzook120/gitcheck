import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { userReducer } from "./reducer/userReducer";



const rootReducer = combineReducers({
    users: userReducer
})


const thunkMiddleware=thunk

const store = configureStore({
   reducer:rootReducer,
   middleware:(getDefaultMiddleware)=>{
   const middlewares=getDefaultMiddleware()
   middlewares.push(thunkMiddleware)
   return middlewares
   }
  
})

export type AppDispatch=typeof store.dispatch;
export type StoreState= ReturnType<typeof rootReducer>

export default store;