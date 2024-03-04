import React from "react";
import style from "./Brands.module.css"
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Brands () {
  <Helmet>
      <meta charSet="utf-8" />
      <title>Brand</title>
    </Helmet>
  function getBrandImg() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
    
  }
  let { data } = useQuery('GetImgeBrand',getBrandImg, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 300000,
  })
  // to={`/productDetail/${brandItem._id}`}
// console.log(data?.data.data);
  return<>
  
  <h1 className="mt-5 text-center">Brands</h1>
  <div className="row">
    {data?.data.data.map((brandItem) => <div key={brandItem._id} className="col-md-2 g-3 product"> <Link  >
<div className="img mx-1">
<img className="w-100"  src={brandItem.image} alt={brandItem.name} />

</div>
</Link>   </div>)}
  </div>
  </>
}