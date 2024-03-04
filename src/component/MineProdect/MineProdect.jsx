import React from "react";
import style from "./MineProdect.module.css"
import Slider from "react-slick";
import slider1 from '../../Assets/img/slider-image-1.jpeg'
import slider2 from '../../Assets/img/slider-image-2.jpeg'
import slider3 from '../../Assets/img/slider-image-3.jpeg'
import img1 from '../../Assets/img/grocery-banner.png'
import img2 from '../../Assets/img/grocery-banner-2.jpeg'
import axios from "axios";
import { useQueries, useQuery } from "react-query";



export default function MineProdect () {

  
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

  const settingsMult = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
  };

function getCatogreImg() {
  return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
  
}
let { data } = useQuery('GetImgeCatogre',getCatogreImg, {
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  cacheTime: 300000,
})
// console.log(data?.data.data);








  return<>
  
<div className="row my-3">
  <div className="col-md-9 g-1 p-0">
<Slider  {...settings}>

<img src={slider1} className="w-100" height={300} alt="Mine slider Prodact" />
<img src={slider2} className="w-100" height={300} alt="Mine slider Prodact" />
<img src={slider3} className="w-100" height={300} alt="Mine slider Prodact" />

</Slider>
  </div>
  <div className="col-md-3">
  <img src={img1} className="w-100" height={150} alt="Side Mine slider Prodact" />
  <img src={img2} className="w-100" height={150} alt="Side Mine slider Prodact" />
  </div>
  
  </div> 
  
  <div className="row">
  <div className="slider-container">
      <Slider {...settingsMult}>
        {data?.data.data.map((catogreImgs, index) => <div key={index} className="col-md-2">
<div className="img mx-1">
<img className="w-100" height={150} width={150} src={catogreImgs.image} alt={catogreImgs.name} />

</div>
        </div>)}
      </Slider>
    </div>
  </div>
  
  
  
   </>
}