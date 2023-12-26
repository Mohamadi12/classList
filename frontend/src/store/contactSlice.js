import { createSlice } from '@reduxjs/toolkit'


const contactSlice=createSlice({
    name:'contact',
    initialState:[
    {
        name:'mariam', 
        age:30, 
        email:'mariam@gmail.com'
    }
    ],
    reducers:{
        getContact:(state,action)=>{
            return action.payload
        }
    }
})

export const{getContact}=contactSlice.actions
export default contactSlice.reducer