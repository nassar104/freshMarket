import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect, useState } from "react";


let count = 0

let initialState ={
    count:0,
    userName:''
}


let headers ={
    token:localStorage.getItem('token')
}



// async function getProdect() {
//      let {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{
//         headers
//     })
//     .then((response)=>response)
//     .catch( (err)=>err)

//     count = data?.numOfCartItems


// }

// getProdect()





let conterCart = createSlice({
    name:'conterCart',
    initialState,
    reducers:{
        increase:()=>{
           
        



        },
        decrease:()=>{

        }
    }
})

export let ConterReduser = conterCart.reducer
export let {increase, decrease} = conterCart.actions