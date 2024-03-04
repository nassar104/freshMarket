import React from "react";
import FeaturedProduct from "../FeaturedProduct/FeaturedProduct";
import MineProdect from "../MineProdect/MineProdect";
import { Helmet } from "react-helmet";


export default function Home() {




  return <>
  
    <Helmet>
      <meta charSet="utf-8" />
      <title>Fresh Cart</title>
    </Helmet>
    
    <MineProdect />
    <FeaturedProduct />

  </>
}