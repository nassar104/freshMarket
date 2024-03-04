import React, { useContext, useEffect, useState } from "react";
import style from "./Cart.module.css"
import { prodectCartContext } from "../../Context/ProdectCartContext";
import { Bars } from 'react-loader-spinner';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';



export default function Cart() {

<Helmet>
      <meta charSet="utf-8" />
      <title>cart</title>
    </Helmet>
  const [cartItem, setCartItem] = useState(null);
  const [loding, setLoding] = useState(true);

  let { getProdect, deleteProdect, updateProdect, dletAllProdect, setUserCountCart, checkOutSessionorder } = useContext(prodectCartContext);

  async function cartNum() {
    let { data } = await getProdect()
    setUserCountCart(data?.numOfCartItems);
  }

  async function getProdectViwe() {

    let { data } = await getProdect()

    if (data != null) {

      setCartItem(data)
      cartNum()
      setLoding(false)

    } else {

      setLoding(false)

    }


  }

  async function dletProd(drodId) {

    setLoding(true)
    let { data } = await deleteProdect(drodId)

    if (data != null) {
      setCartItem(data)
      cartNum()
      setLoding(false)
    }

  }

  async function updateProd(drodId, count) {

    if (count < 1) {

      let { data } = await deleteProdect(drodId)
      setCartItem(data)
      cartNum()

    } else {

      let { data } = await updateProdect(drodId, count)
      setCartItem(data)
      cartNum()

    }

  }


  async function dletAllProd() {

    setLoding(true)
    let { data } = await dletAllProdect()
    setCartItem(data)
    setUserCountCart('0');
    setLoding(false)

  }



  useEffect(() => {
    getProdectViwe()
  }, [])







  return <>

    <div className="bg-main-light  mt-4 p-3">
      <h2 className="text-center">Cart</h2>
      
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
      </div> : <div className='row '>
        {
          cartItem?.data ? <>
          <div className="row m-0 p-2 border-2 border-bottom align-items-center">
          <div className="col-md-10">
            <p className='text-main'>numOfCartItems :{cartItem?.numOfCartItems}</p>
            <p className='text-main'>totalCartPrice :{cartItem?.data?.totalCartPrice} EGP</p>
          </div>
          <div className="col-md-2">
            <button onClick={() => { dletAllProd() }} className="btn btn-danger"> cleer all cat</button>
          </div>
        </div>
            {
              cartItem?.data?.products.map(pro => <div key={pro.product.id} className="row m-0 p-2 border-2 border-bottom align-items-center">
                <div className="col-md-1 ">
                  <div className="img">
                    <img className="w-100" src={pro.product.imageCover} alt={pro.product.title} />
                  </div>
                </div>
                <div className="col-md-10">
                  <div className="item">
                    <h3 className="h5 fw-bold">{pro.product.title.split(' ').slice(0, 3).join(' ')}</h3>
                    <p className='text-main' >price: {pro.price * pro.count} EGP</p>
                    <button onClick={() => dletProd(pro.product.id)} className="btn"><i className="fa-solid fa-trash-can text-danger"></i> Removes</button>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="count bg-light justify-content-between">
                    <button onClick={() => { updateProd(pro.product.id, pro.count + 1) }} className="btn py-0 bord-min px-1">+</button>
                    <span className="mx-2">{pro.count}</span>
                    <button onClick={() => { updateProd(pro.product.id, pro.count - 1) }} className="btn py-0 bord-min px-1">-</button>
                  </div>
                </div>
              </div>)

            }
            
            <Link to={`/shippingAddres/${cartItem?.data?._id}`} className="btn bg-main m-2 text-white w-25 "> <i className="fa-solid fa-credit-card"></i> go payment onLIne </Link>
            <Link to={`/shippingAddresoffLine/${cartItem?.data?._id}`} className="btn bg-secondary m-2 text-white w-25"> <i className="fa-solid fa-wallet"></i> go payment offline </Link>

          </> : <>
            <div className="alert alert-warning text-center ">
              You haven't shopped yet, what are you waiting for? 😠 <Link to={'/'} > PRODACT</Link>
            </div>
          </>


        }



      </div>
      }
    </div>
  </>





}


