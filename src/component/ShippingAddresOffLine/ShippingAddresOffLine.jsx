import React, { useContext, useState } from "react";
import style from "./ShippingAddresOffLine.module.css"
import { useFormik } from "formik";
import * as Yup from "yup"
import axios from "axios";
import { Bars } from 'react-loader-spinner'
import { Link, useNavigate, useParams } from "react-router-dom";
import { prodectCartContext } from "../../Context/ProdectCartContext";
import { Helmet } from 'react-helmet';
import { Offline } from 'react-detect-offline';
import toast from "react-hot-toast";




export default function ShippingAddresOffLine () {
  
 
<Helmet>
      <meta charSet="utf-8" />
      <title>Shipping Addres Offline </title>
    </Helmet>


let {idCartoff} =useParams()
let {checkOutSessionorder} = useContext(prodectCartContext)
  let Navigate =useNavigate()

  const [loding ,setLoding ] = useState(false);

  const [errorMaseg , setErrorMaseg] = useState('');

  async function registerSubmunt(values) {

    setLoding(true)
    let {data} = await checkOutSessionorder(idCartoff, values)
    if (data.status == "success") {
      toast.success('yor order complet ')
      Navigate('/')
    }
    
  }


let validationSchema =Yup.object({
  details: Yup.string().required(' name is repuird').min(3,' name must be minem 3 ').max(20,'name must be maxm 20') ,
  phone:Yup.string().required(' phone is repuird').matches(/^01[0125][0-9]{8}$/ ,'Enter egipt Numper'), 
  city: Yup.string().required(' name is repuird').min(3,' name must be minem 3 ').max(20,'name must be maxm 20')
})


 let formik = useFormik({
    initialValues: {
      details: '',
      phone: '',
      city: '',
      
    },validationSchema
    , onSubmit: registerSubmunt  
  })




  return <>

    <div className="row">
      <div className="col-md-9 mx-auto py-4">
        <h2>Shipping Addres</h2>
        {errorMaseg? <div className="alert alert-danger py-2 ">{errorMaseg}</div>:''}
        <form action="" onSubmit={formik.handleSubmit}>

        <div className="form-group my-3">
            <label htmlFor="details">details </label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="text" className="form-control" id="details" placeholder="Enter details" />
            {formik.errors.details&&formik.touched.details ? <div className="alert alert-danger py-2">{formik.errors.details}</div>:null}
          </div>

          <div className="form-group my-3 ">
            <label htmlFor="phone">phone </label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur} type="tel" className="form-control" id="phone" placeholder="Enter email" />
            {formik.errors.phone&&formik.touched.phone ? <div className="alert alert-danger py-2">{formik.errors.phone}</div>:null}

          </div>

          <div className="form-group my-3 ">
            <label htmlFor="city">city </label>
            <input onChange={formik.handleChange} onBlur={formik.handleBlur}  type="text" className="form-control" id="city" placeholder="Enter city" />
            {formik.errors.city&&formik.touched.city ? <div className="alert alert-danger py-2">{formik.errors.city}</div>:null}

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
          
        </form>

      </div>
    </div>


  </>

}