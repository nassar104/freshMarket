import React, { useContext, useEffect } from "react";
import style from "./Layout.module.css"
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { Offline } from "react-detect-offline";
import toast from "react-hot-toast";



export default function Layout() {


  let { setUserToken } = useContext(UserContext)
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setUserToken(localStorage.getItem('token'))
    }
  }, [])


  return <>
    <Navbar />
    <Offline > <div className="loding z-3">

      <h2 className="fw-bold"> You offline </h2>
    </div> </Offline>

    <div className="container mt-5">

      <Outlet></Outlet>

    </div>

    <Footer />
  </>
}