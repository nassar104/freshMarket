import React from "react";
import style from "./PtotectedRoute.module.css"
import { Navigate } from "react-router-dom";

export default function PtotectedRoute (props) {
  
if (localStorage.getItem('token')) {
  
  
  
    return props.children

} else {
  return<Navigate to={'/login'}/>

}
}