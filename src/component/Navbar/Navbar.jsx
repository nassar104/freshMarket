import React, { useContext, useEffect, useState } from "react";
import style from "./Navbar.module.css"
import logo from '../../Assets/img/freshcart-logo.svg'
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import UserLogo from '../../Assets/img/noimguser.jpg';
import { prodectCartContext } from './../../Context/ProdectCartContext';
import { prodectWishContext } from './../../Context/ProdectWishContext';


export default function Navbar() {


  let { userToken, setUserToken } = useContext(UserContext)
  let navigate = useNavigate()




  let { getProdect, userCountCart, setUserCountCart } = useContext(prodectCartContext);
  let { getWish, userCountWish, setUserCountWish } = useContext(prodectWishContext);






  async function cartNum() {
    let { data } = await getProdect()
    setUserCountCart(data?.numOfCartItems);
  }


  async function cartNumwish() {
    let { data } = await getWish()

    setUserCountWish(data?.count);
  }






  function logOut() {
    localStorage.removeItem('token')
    setUserToken(null)
    navigate('/login')
  }

  useEffect(() => {
    cartNum()
    cartNumwish()
  }, [])

  return <>


    <nav className="navbar navbar-expand-lg bg-main-light  px-3 fixed-top">

      <Link className="navbar-brand" to={"/"}>
        <img src={logo} alt="freshcart cart" />
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {userToken != null ? <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to={"/"}>Home </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to={"Products"}>Products </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to={"categories"}>Categories </Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to={"brands"}>Brands </Link>
          </li>



        </ul> : null}


        <ul className="navbar-nav ms-auto">


          <li className="nav-item active d-flex d-flex align-items-center ">
            <Link to={'https://www.facebook.com/'}><i className="fab fa-facebook me-3 facbok"></i></Link>
            <Link to={'https://twitter.com/'}><i className="fab fa-twitter me-3 twiter"></i></Link>
            <Link to={'https://www.instagram.com/'}><i className="fab fa-instagram me-3 insta"></i></Link>
            <Link to={'https://www.youtube.com/'}><i className="fab fa-youtube tube"></i></Link>


          </li>



          {userToken != null ? <>

            <li className="nav-item activeme-2 ms-3 ">
              <Link className="nav-link position-relative" to={"cart"}><i className="fa-solid fa-cart-shopping"></i> {userCountCart != '0' ? <span className="bg-main carticon "><p className="">{userCountCart}</p></span> : ''} </Link>
            </li>
            <li className="nav-item activeme-2 me-3 ms-2">
              <Link className="nav-link position-relative" to={"wishlist"}><i className="fa-solid fa-heart"></i> {userCountWish != '0' ? <span className="bg-wish carticon "><p className="">{userCountWish}</p></span> : ''} </Link>
            </li>
            <div className="dropdown">
          <button className="border-0 dropdown-toggle dropstart " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={UserLogo} alt="user img" width={30} className="rounded-5" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              
            <li><Link to={'changeMyPassword'} className="dropdown-item" >Change My Password</Link></li>
            <li><Link to={'updateMe'} className="dropdown-item" >Update Me</Link></li>
            <li className="nav-item text-danger dropdown-item">
              <Link onClick={logOut} className="nav-link cursor-pointer" >Logout </Link>
            </li>
          </ul>
        </div>


          </> : <>
            <li className="nav-item active">
              <Link className="nav-link" to={"register"}>Register</Link>
            </li>

            <li className="nav-item active">
              <Link className="nav-link" to={"login"}>Login </Link>
            </li></>


          }




        </ul>


      </div>




    </nav>
    <div className="mb-5">.</div>
  </>
}