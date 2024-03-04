import React, { useContext, useEffect, useState } from "react";
import style from "./ProductDetail.module.css"
import { useParams } from "react-router-dom";
import axios from "axios";
import { Bars } from "react-loader-spinner";
import Slider from "react-slick";
import { prodectCartContext } from "../../Context/ProdectCartContext";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import { prodectWishContext } from "../../Context/ProdectWishContext";



export default function ProductDetail() {


  let {getWish, addWish, setUserCountWish} =useContext(prodectWishContext);


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



  let {addProdect} = useContext(prodectCartContext)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed :1500,
    dots:false,

  };

  let { id } = useParams()
  const [detail, setDetail] = useState([]);
  const [loding, setLoding] = useState(true);


  async function getProduct(id) {
    let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setDetail(data.data);
    setLoding(false)

  }

  async function postProdect(id) {

    let{data}= await addProdect(id)
    // console.log(data);
   if (data.status == 'success') {
    toast.success('Product added successfully to your cart')
   }
    }
  


  useEffect(() => {
    getProduct(id)
  }, [])

  return <>
   {loding?<div className="m-auto h-100">
    <Bars
  height="90"
  width="90"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=" w-100 text-center my-5 m-auto "
  visible={true}

  />
   </div>:<>
   <Helmet>
                <meta charSet="utf-8" />
                <title>{detail.title}</title>
            </Helmet>


            <div className="row align-items-center my-4">
      <div className="col-md-4">
        {/* <img src={detail.imageCover} alt={detail.title} className="w-100" /> */}
        <Slider {...settings}>
          {detail.images.map(imge=><img src={imge} key={detail.id} alt={detail.title} />
)}
      
      </Slider>

      </div>

      <div className="col-md-8">
        <div className="details">
          
        <h2 className="h5">{detail.title}</h2>
        <p className="mt-2 p-3">{detail.description}</p>

        

          <span className="font-sm text-main">{detail.category.name}</span>
      

        <div className="d-flex py-3 justify-content-between align-items-center">
          <span className="font-sm">{detail.price}EGP</span>
          <span className="font-sm">
            <i className="fas fa-star rating-color me-1"></i>
            {detail.ratingsAverage}
          </span>
        </div>

        <div className="row px-2">
            
            
            <button onClick={() => { postProdect(detail.id) }} className="btn bg-main text-white w-75 ">Add To cart </button>

            <button onClick={() => { postwishlist(detail.id) }} className="btn  w-25 text-danger "> <i className="fas fa-solid fa-heart"></i></button>
              </div>

        </div>
      </div>
    </div>
   </>
   
}









  </>
}