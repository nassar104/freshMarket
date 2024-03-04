import { configureStore } from "@reduxjs/toolkit";
import { ConterReduser } from "./ConterCart";



export  let store = configureStore({

    reducer:{
        counter: ConterReduser
    }


})