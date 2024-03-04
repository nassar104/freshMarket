import React, { useContext, useEffect, useState } from "react";
import style from "./Products.module.css"
import axios from "axios";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { prodectCartContext } from "../../Context/ProdectCartContext";
import { prodectWishContext } from "../../Context/ProdectWishContext";

import toast from "react-hot-toast";
import { Helmet } from "react-helmet";


export default function Products() {
  <Helmet>
  <meta charSet="utf-8" />
  <title>Products</title>
</Helmet>
  let { addProdect, setUserCountCart, getProdect } = useContext(prodectCartContext);
  let {getWish, addWish, setUserCountWish} =useContext(prodectWishContext);


  async function cartNum() {
    let { data } = await getProdect()
    setUserCountCart(data?.numOfCartItems);
  }


  async function postProdect(id) {


    let { data } = await addProdect(id)
    if (data.status == 'success') {
      toast.success('Product added successfully to your cart')
      cartNum()
    }
  }

  async function postwishlist(id) {


    let { data } = await addWish(id)
    if (data.status == 'success') {
      toast('Product added successfully to your Wishlist', {
        icon: '❤️',
      });
      
      cartNumwish()
    }
    
  }

  async function cartNumwish() {
    let { data } = await getWish()
    setUserCountWish(data?.count);
  }


  const [allproducts, setAllProducts] = useState([]);
  const [loding, setLoding] = useState(true);

  async function getAllProducts() {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/Products`)
    setAllProducts(data.data);
    // console.log(data.data);
    setLoding(false)
  }
  useEffect(() => {
    getAllProducts()
  }, [])




  return <>

    <h2>AllProducts</h2>

    {loding ? <div className="m-auto h-100">
      <Bars
        height="90"
        width="90"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=" w-100 text-center my-5 m-auto "
        visible={true}
      />
    </div> : <div className="row mt-2 g-3">
      {allproducts.map(minprod => <div className="col-lg-3" key={minprod.id}>
        <div className="product p-2">
          <Link to={`/productDetail/${minprod.id}`}>
            <img src={minprod.imageCover} alt={minprod.category.name} className="w-100" />
            <span className="font-sm text-main">{minprod.category.name}</span>
            <h3 className="h6 py-1">{minprod.title.split(' ').splice(0, 2).join('')}</h3>
            <div className="d-flex py-2 justify-content-between align-items-center">
              <span className="font-sm">{minprod.price}EGP</span>
              <span className="font-sm">
                <i className="fas fa-star rating-color me-1"></i>
                {minprod.ratingsAverage}
              </span>
            </div>
          </Link>
          <div className="row px-2">
            
            
            <button onClick={() => { postProdect(minprod.id) }} className="btn bg-main text-white w-75 ">Add To cart </button>

            <button onClick={() => { postwishlist(minprod.id) }} className="btn  w-25 text-danger "> <i className="fas fa-solid fa-heart"></i></button>
              </div>        </div>
      </div>
      )}
    </div>}
  </>

}
