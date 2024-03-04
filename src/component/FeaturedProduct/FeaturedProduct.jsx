import React, { useEffect, useState } from "react";
import style from "./FeaturedProduct.module.css"
import axios from "axios";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import { useQuery } from "react-query";
import { useContext } from "react";
import { prodectCartContext } from "../../Context/ProdectCartContext";
import toast from "react-hot-toast";
import { prodectWishContext } from "../../Context/ProdectWishContext";





export default function FeaturedProduct() {


  let { addProdect, setUserCountCart, getProdect } = useContext(prodectCartContext);
let {getWish, addWish, setUserCountWish} =useContext(prodectWishContext);






  async function postProdect(id) {


    let { data } = await addProdect(id)
    if (data.status == 'success') {
      toast.success('Product added successfully to your cart')
      cartNum()
    }
  }

  async function cartNum() {
    let { data } = await getProdect()
    if (data.numOfCartItems) {
      setUserCountCart(data?.numOfCartItems);

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





  function getProdauct() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    cartNum()


  }

  let { data, isError, isLoading, isFetched } = useQuery('FeaturedProduct', getProdauct, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    cacheTime: 300000,
  })
  // console.log(data?.data.data);







  return <>

    <h2>FeaturedProduct</h2>

    {isLoading ? <div className="m-auto h-100">
      <Bars
        height="90"
        width="90"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=" w-100 text-center my-5 m-auto "
        visible={true}
      />
    </div> : <>


      <div className="row mt-2 g-3">
        {data?.data.data.map(product => <div className="col-lg-2" key={product.id}>
          <div className="product p-2">
            <Link to={`/productDetail/${product.id}`}>
              <img src={product.imageCover} alt={product.category.name} className="w-100" />
              <span className="font-sm text-main">{product.category.name}</span>
              <h3 className="h6 py-1">{product.title.split(' ').splice(0, 2).join('')}</h3>
              <div className="d-flex py-2 justify-content-between align-items-center">
                <span className="font-sm">{product.price}EGP</span>
                <span className="font-sm">
                  <i className="fas fa-star rating-color me-1"></i>
                  {product.ratingsAverage}
                </span>
              </div>
            </Link>
            <div className="row px-2">
            
            
            <button onClick={() => { postProdect(product.id) }} className="btn bg-main text-white w-75 ">Add To cart </button>

            <button onClick={() => { postwishlist(product.id) }} className="btn  w-25 text-danger "> <i className="fas fa-solid fa-heart"></i></button>
              </div>
            </div>

        </div>
        )}
      </div>
    </>

    }


  </>
}



  // const [product ,setProduct]=useState([]);
  // const [loding ,setLoding]=useState(true);

  // async function getProduct(){
  //   let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
  //   setProduct(data.data);
  //   setLoding(false)
  // }
  // useEffect(()=>{
  //   getProduct()
  // },[])
