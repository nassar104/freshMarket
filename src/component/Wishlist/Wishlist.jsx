import React, { useContext, useEffect, useState } from "react";
import style from "./Wishlist.module.css"
import { Bars } from 'react-loader-spinner';
import { Link } from "react-router-dom";
import { prodectWishContext } from "../../Context/ProdectWishContext";
import { prodectCartContext } from "../../Context/ProdectCartContext";
import { Helmet } from "react-helmet";





export default function Wishlist() {


  
<Helmet>
      <meta charSet="utf-8" />
      <title>Wishlist</title>
    </Helmet>


  const [WishItem, setWishItem] = useState(null);
  const [loding, setLoding] = useState(true);


  let { addProdect} = useContext(prodectCartContext);

  let { getWish, deleteWish, addWish, userCountWish, setUserCountWish } = useContext(prodectWishContext);


  async function WishNum() {
    let { data } = await getWish()
    setUserCountWish(data?.count);
  }


  async function getWishViwe() {

    let { data } = await getWish()

    if (data != null) {

      if (data.count != '0') {
        setWishItem(data)
      WishNum()
      setLoding(false)

      }
      else{
        setWishItem(null)
        setLoding(false)

      }
      
    } else {

      setLoding(false)

    }


  }

  async function dletWish(drodId) {

    setLoding(true)
    let { data } = await deleteWish(drodId)

    if (data != null) {
      setWishItem(data)
      WishNum()
      setLoding(false)
    }

  }




  useEffect(() => {
    getWishViwe()
  }, [])







  return <>

    <div className="bg-main-light  mt-4 p-3">
      <h2 className="text-center">Wishlist</h2>
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
      </div> : <div className="row">
        {WishItem?.data ? <>

          <div className="row m-0 p-2 border-2 border-bottom align-items-center">
            <div className="col-md-10">
              <p className='text-main'>numOfWishItems :{WishItem?.count}</p>
            </div>
            {
      WishItem?.data?.map(

        pro => <div key={pro.id} className="row m-0 p-2 border-2 border-bottom align-items-center">
        <div className="col-md-1 ">
          <div className="img">
            <img className="w-100" src={pro.imageCover} alt={pro.title} />
          </div>
        </div>
        <div className="col-md-10">
          <div className="item">
            <h3 className="h5 fw-bold">{pro.title}</h3>
            <p className='text-main' >price: {pro.price} EGP</p>
            <button onClick={() => dletWish(pro.id)} className="btn"><i className="fa-solid fa-trash-can text-danger"></i> Removes</button>
            <button onClick={() => addProdect(pro.id)} className="btn"><i className="fa-solid fa-cart-plus text-main"></i> Add To Card</button>
          </div>
        </div>
        
      </div>

      )

    }
          </div>

        </> : <>    <div className="alert alert-warning text-center ">
      You haven't shopped yet, what are you waiting for? 😠 <Link to={'/'} > PRODACT</Link>
    </div>
</>}
      </div>}
    </div>

  </>
}
{/* 
<div className='row '>

      

{
  WishItem?.data ? <>
   

    
  </> : <>
  </>


}



</div>
}
</div>
</> */}
