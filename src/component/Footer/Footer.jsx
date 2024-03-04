import React from "react";
import style from "./Footer.module.css"






export default function Footer() {






  return <>

    <footer className="bg-main-light py-5 mt-2">

     <div className="container">
     <div className="rwo ">
         <h3> Get the FreshCart app </h3>
        <p> We will send you a link, open it on your phone to download the App.</p>

        <div className="d-flex py-2 justify-content-center align-items-center my-3 ">
          <div className="col-md-9 ">
            <input type="email" name="email" id="email" className="form-control" placeholder="Enter email"/>
          </div>
          <div className="form-group col-md-2">
            <button type="submit" className="btn bg-main text-light"> Share App Link </button>
          </div>
        </div>
        <h6 className="text-center p-4 fa-sm">Copyright © 2024 All Rights Reserved. <span className="fa-sm mt-4">Developed by Mohamed Essam </span></h6>

      </div>
     </div>








    </footer>

  </>
}