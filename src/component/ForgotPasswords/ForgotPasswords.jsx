import React, { useContext, useState } from "react";
import style from "./ForgotPasswords.module.css"
import { useFormik } from "formik";
import * as Yup from "yup"
import axios from "axios";
import { Bars } from 'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import toast, { useToasterStore } from "react-hot-toast";
import { Helmet } from "react-helmet";


export default function ForgotPasswords () {
  
<Helmet>
      <meta charSet="utf-8" />
      <title>ForgotPasswords</title>
    </Helmet>

let Navigate =useNavigate()

const [loding ,setLoding ] = useState(false);

const [errorMaseg , setErrorMaseg] = useState('');


async function registerSubmunt(values) {

  setLoding(true)
  let {data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, values)
  .catch((err)=>{ 
    setErrorMaseg(err.response.data.statusMsg)
    setLoding(false)
    
  })

  if (data.statusMsg == 'success') {
    
    setLoding(false)

    toast.success(data.message)

    Navigate('/')

  }
  
}


let validationSchema =Yup.object({
   
    email: Yup.string().required(' email is repuird').email(' email is not valed '),

})


let formik = useFormik({
  initialValues: {
   
    email: '',
   
  },validationSchema
  , onSubmit: registerSubmunt  
})





return <>

 
<div className="row">
    <div className="col-md-9 mx-auto py-4">
      <h2 className="text-center">Login Now</h2>
      {errorMaseg? <div className="alert alert-danger py-2 ">{errorMaseg}</div>:''}
      <form action="" onSubmit={formik.handleSubmit}>



        <div className="form-group my-3 ">
          <label htmlFor="email">Email </label>
          <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" className="form-control" id="email" placeholder="Enter email" />
          {formik.errors.email&&formik.touched.email ? <div className="alert alert-danger py-2">{formik.errors.email}</div>:null}

        </div>

        
        {loding?
        <Bars
        height="40"
        width="40"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
/>
        :<button disabled={!(formik.dirty && formik.isValid )} className="btn bg-main text-light" type="submit"> submit </button>
        
        
        }
        
        <Link className="ps-5" to={'/register'} > regester </Link>
      </form>

    </div>
  </div>




</> 
}