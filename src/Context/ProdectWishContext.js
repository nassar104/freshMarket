import axios from "axios";
import { createContext, useState } from "react";





export let prodectWishContext = createContext()



export default function ProdectWishContextProvider(props) {


    
    
    const [userCountWish, setUserCountWish] = useState("0")

    let headers = {
        token: localStorage.getItem('token')
    }




    function getWish() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            headers
        })
            .then((response) => response)
            .catch((err) => err)

    }


    function addWish(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
            productId
        }, {
            headers
        })
            .then((response) => response)
            .catch((err) => err)

    }




    function deleteWish(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
            headers
        })
            .then((response) => response)
            .catch((err) => err)

    }



    return <prodectWishContext.Provider value={{getWish, addWish, deleteWish ,userCountWish, setUserCountWish}}>

        {props.children}

    </prodectWishContext.Provider>
    
}