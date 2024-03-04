import React, { useContext, useState } from "react";
import style from "./UpdateMe.module.css"
import { useFormik } from "formik";
import * as Yup from "yup"
import axios from "axios";
import { Bars } from 'react-loader-spinner'
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";




export default function UpdateMe () {
  
  let { userToken, setUserToken } = useContext(UserContext)

  function logOut() {
    localStorage.removeItem('token')
    setUserToken(null)
    Navigate('/login')
  }



  let Navigate =useNavigate()
  let headers = {
    token: localStorage.getItem('token')
  }


  const [loding ,setLoding ] = useState(false);
  const [errorMaseg , setErrorMaseg] = useState('');



  async function registerSubmunt(values) {

    setLoding(true)
    let {data} = await axios.put(`https://ecommerce.routemisr.com/api/v1/users/updateMe/`,  {
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
      logOut()

    }
    
  }


let validationSchema =Yup.object({
      name: Yup.string().required(' name is repuird').min(3,' name must be minem 3 ').max(20,'name must be maxm 20') ,
      email: Yup.string().required(' email is repuird').email(' email is not valed '),
      phone:Yup.string().required(' phone is repuird').matches(/^01[0125][0-9]{8}$/ ,'Enter egipt Numper'), 
})


 let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: ''
    },validationSchema
    , onSubmit: registerSubmunt  
  })




  return <>

    <div className="row">
      <div className="col-md-9 mx-auto py-4">
        <h2 className="text-center">Update Me</h2>
        {errorMaseg? <div className="alert alert-danger py-2 ">{errorMaseg}</div>:''}
        <form action="" onSubmit={formik.handleSubmit}>

        <div className="form-group my-3">
            <label htmlFor="name">Name </label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className="form-control" id="name" placeholder="Enter name" />
            {formik.errors.name&&formik.touched.name ? <div className="alert alert-danger py-2">{formik.errors.name}</div>:null}
          </div>

          <div className="form-group my-3 ">
            <label htmlFor="email">Email </label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="email" className="form-control" id="email" placeholder="Enter email" />
            {formik.errors.email&&formik.touched.email ? <div className="alert alert-danger py-2">{formik.errors.email}</div>:null}

          </div>

          <div className="form-group my-3 ">
            <label htmlFor="phone">Phone </label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" className="form-control" id="phone" placeholder="Enter phone" />
            {formik.errors.phone&&formik.touched.phone ? <div className="alert alert-danger py-2">{formik.errors.phone}</div>:null}
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