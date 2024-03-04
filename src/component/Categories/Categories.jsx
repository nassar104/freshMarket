import React, { useEffect, useState } from "react";
import style from "./Categories.module.css"
import axios from "axios";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import { Helmet } from "react-helmet";

export default function Categories () {
  <Helmet>
      <meta charSet="utf-8" />
      <title> Categories </title>
    </Helmet>
 
  const [categories ,setCategories]=useState([]);
  const [loding ,setLoding]=useState(true);

async function getCategories(){
  let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  setCategories(data.data);
  setLoding(false)
}
useEffect(()=>{
  getCategories()
},[])

  return<>

  
<h1 className="mt-5 text-center">Categories</h1>
  <div className="row">
    {categories.map((brandItem) => <div key={brandItem._id} className="col-md-2 g-3 product"> <Link  >
<div className="img mx-1">
<img className="w-100"  src={brandItem.image} alt={brandItem.name} />
     <h3 className="h6 py-1">{brandItem.name}</h3>
</div>
</Link>   </div>)}
  </div>






  {/* {loding?<div className="m-auto h-100">
    <Bars
  height="90"
  width="90"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=" w-100 text-center my-5 m-auto "
  visible={true}
  />
   </div>:<div className="row mt-2 g-3">
   { categories.map(categories =>
   <div className="col-lg-2" key={categories._id}>
    <Link to={`/categoriesDetail/${categories._id}`}>
   <div className="categories p-2">
     <img src={categories.image} alt={categories.slug} className="w-100" />
     <span className="font-sm text-main">{categories.slug}</span>

     <div className="d-flex py-2 justify-content-between align-items-center">

     </div>
     <button className="btn bg-main text-white w-100 ">Add To cart </button>
   </div>
   </Link>
 </div>
)}
  </div>} */}
  </>

}