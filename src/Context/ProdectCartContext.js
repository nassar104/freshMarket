import axios from "axios";
import { createContext, useContext, useState } from "react";

export let prodectCartContext = createContext();

export default function ProdectCartContextProvider(props) {

    const [userCountCart, setUserCountCart] = useState("0")

    let headers = {
        token: localStorage.getItem('token')
    }




    function getProdect() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
            headers
        })
            .then((response) => response)
            .catch((err) => err)

    }


    function addProdect(productId) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
            productId
        }, {
            headers
        })
            .then((response) => response)
            .catch((err) => err)

    }


    function checkOutSession(cartId , shippingAddress) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`, {
            shippingAddress
        }, {
            headers
        })
            .then((response) => response)
            .catch((err) => err)

    }

    function checkOutSessionorder(cartId , shippingAddress) {
        return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`, {
            shippingAddress
        }, {
            headers
        })
            .then((response) => response)
            .catch((err) => err)

    }

    function deleteProdect(productId) {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
            headers
        })
            .then((response) => response)
            .catch((err) => err)

    }



    function updateProdect(productId, count) {
        return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
            count
        }, {
            headers
        })
            .then((response) => response)
            .catch((err) => err)

    }



    function dletAllProdect() {
        return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
            headers
        })
            .then((response) => response)
            .catch((err) => err)

    }







    return <prodectCartContext.Provider value={{ addProdect, getProdect, deleteProdect, updateProdect, dletAllProdect, userCountCart, setUserCountCart, checkOutSession, checkOutSessionorder }}>
        {props.children}
    </prodectCartContext.Provider>



}

