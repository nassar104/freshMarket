import React, { useContext, useState } from "react";
import style from "./ChangeMyPassword.module.css"
import { useFormik } from "formik";
import * as Yup from "yup"
import axios from "axios";
import { Bars } from 'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { UserContext } from "../../Context/UserContext";


export default function ChangeMyPassword () {
  
 let{ userToken, setUserToken}  =useContext(UserContext)

 let headers = {
  token: localStorage.getItem('token')
}

  let Navigate =useNavigate()

  const [loding ,setLoding ] = useState(false);
  const [errorMaseg , setErrorMaseg] = useState('');



  async function registerSubmunt(values) {
    // console.log(values);

    setLoding(true)

    
    let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword`, {
      values
  }, {
      headers
  })
    .catch((err)=>{ 
      setErrorMaseg(err.response.data.message)
      setLoding(false)
    })

    if (data.message == 'success') {
      setLoding(false)
      toast.success('you Change Password')
      setUserToken(data.token)
      Navigate('/')

    }
    
  }


let validationSchema =Yup.object({
  currentPassword: Yup.string().required(' currentPassword is repuird').matches(/^[A-Z][\w @]{5,8}/, 'invaled password') ,
  password:Yup.string().required(' password is repuird').matches(/^[A-Z][\w @]{5,8}/, 'invaled password'),
  rePassword:Yup.string().required(' repassword is repuird').oneOf([Yup.ref('password')], 'password is not match' ) , 
})


 let formik = useFormik({
    initialValues: {
      currentPassword: '',
      password: '',
      rePassword: ''
    },validationSchema
    , onSubmit: registerSubmunt  
  })




  return <>

    <div className="row">
      <div className="col-md-9 mx-auto py-4">
        <h2 className="text-center">Change My Password</h2>
        {errorMaseg? <div className="alert alert-danger py-2 ">{errorMaseg}</div>:''}
        <form action="" onSubmit={formik.handleSubmit}>

        <div className="form-group my-3">
            <label htmlFor="name">Current Password </label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className="form-control" id="currentPassword" placeholder="Enter currentPassword" />
            {formik.errors.currentPassword&&formik.touched.currentPassword ? <div className="alert alert-danger py-2">{formik.errors.currentPassword}</div>:null}
          </div>

          <div className="form-group my-3 ">
            <label htmlFor="email">Password </label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className="form-control" id="password" placeholder="Enter password" />
            {formik.errors.password&&formik.touched.password ? <div className="alert alert-danger py-2">{formik.errors.password}</div>:null}

          </div>

          <div className="form-group my-3 ">
            <label htmlFor="phone">RE Password </label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="password" className="form-control" id="rePassword" placeholder="Enter RE passowerd" />
            {formik.errors.rePassword&&formik.touched.rePassword ? <div className="alert alert-danger py-2">{formik.errors.rePassword}</div>:null}
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
          :<button disabled={!(formik.dirty && formik.isValid )} className="btn bg-main text-light" type="submit"> Update Me </button>
          
          
          }
          
        </form>

      </div>
    </div>


  </>
}