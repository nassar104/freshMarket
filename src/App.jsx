import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import ProdectWishContextProvider from "./Context/ProdectWishContext";
import ProdectCartContextProvider from "./Context/ProdectCartContext";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import UserProvider from "./Context/UserContext";



// import Home from "./component/Home/Home";
const Home = lazy(() => import('./component/Home/Home'));

// import NotFound from "./component/NotFound/NotFound";
const NotFound = lazy(() => import('./component/NotFound/NotFound'));

// import Categories from "./component/Categories/Categories";
const Categories = lazy(() => import('./component/Categories/Categories'));

// import Cart from "./component/Cart/Cart";
const Cart = lazy(() => import('./component/Cart/Cart'));

// import Brands from "./component/Brands/Brands";
const Brands = lazy(() => import('./component/Brands/Brands'));

// import Products from "./component/Products/Products";
const Products = lazy(() => import('./component/Products/Products'));

// import Register from "./component/Register/Register";
const Register = lazy(() => import('./component/Register/Register'));

// import Loginuser from "./component/Loginuser/Loginuser";
const Loginuser = lazy(() => import('./component/Loginuser/Loginuser'));

// import PtotectedRoute from "./component/PtotectedRoute/PtotectedRoute";
const PtotectedRoute = lazy(() => import('./component/PtotectedRoute/PtotectedRoute'));

// import ProductDetail from "./component/ProductDetail/ProductDetail";
const ProductDetail = lazy(() => import('./component/ProductDetail/ProductDetail'));

// import ForgotPasswords from "./component/ForgotPasswords/ForgotPasswords";
const ForgotPasswords = lazy(() => import('./component/ForgotPasswords/ForgotPasswords'));

// import Wishlist from "./component/Wishlist/Wishlist";
const Wishlist = lazy(() => import('./component/Wishlist/Wishlist'));

// import ChangeMyPassword from './component/ChangeMyPassword/ChangeMyPassword';
const ChangeMyPassword = lazy(() => import('./component/ChangeMyPassword/ChangeMyPassword'));

// import UpdateMe from './component/UpdateMe/UpdateMe';
const UpdateMe = lazy(() => import('./component/UpdateMe/UpdateMe'));

// import ShippingAddres from "./component/ShippingAddres/ShippingAddres";
const ShippingAddres = lazy(() => import('./component/ShippingAddres/ShippingAddres'));

// import Allorders from './component/Allorders/Allorders';
const Allorders = lazy(() => import('./component/Allorders/Allorders'));

// import ShippingAddresOffLine from './component/ShippingAddresOffLine/ShippingAddresOffLine';
const ShippingAddresOffLine = lazy(() => import('./component/ShippingAddresOffLine/ShippingAddresOffLine'));





export default function App() {

  let routers = createBrowserRouter([{
    path: '', element:
      <Layout />, children: [
        {
          index: true, element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <PtotectedRoute><Home /></PtotectedRoute>
            </Suspense>
        },
        {
          path: 'products', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <PtotectedRoute><Products /></PtotectedRoute>
            </Suspense>
        },
        {
          path: 'productDetail/:id', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <PtotectedRoute><ProductDetail /></PtotectedRoute>
            </Suspense>
        },
        {
          path: 'categories', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <PtotectedRoute><Categories /></PtotectedRoute>
            </Suspense>
        },
        {
          path: 'Brands', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <PtotectedRoute><Brands /></PtotectedRoute>
            </Suspense>
        },
        {
          path: 'cart', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <PtotectedRoute><Cart /></PtotectedRoute>
            </Suspense>
        },
        {
          path: 'wishlist', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <PtotectedRoute><Wishlist /></PtotectedRoute>
            </Suspense>
        },
        {
          path: 'shippingAddres/:idCart', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <PtotectedRoute><ShippingAddres /></PtotectedRoute>
            </Suspense>
        },
        {
          path: 'shippingAddresoffLine/:idCartoff', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <PtotectedRoute><ShippingAddresOffLine /></PtotectedRoute>
            </Suspense>
        },
        {
          path: 'allorders', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <PtotectedRoute><Allorders /></PtotectedRoute>
            </Suspense>
        },
        {
          path: 'changeMyPassword', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <PtotectedRoute><ChangeMyPassword /></PtotectedRoute>
            </Suspense>
        },
        {
          path: 'updateMe', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <PtotectedRoute><UpdateMe /></PtotectedRoute>
            </Suspense>
        },
        {
          path: 'login', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <Loginuser />
            </Suspense>
        },
        {
          path: 'forgotPasswords', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <ForgotPasswords />
            </Suspense>
        },
        {
          path: 'register', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <Register />
            </Suspense>
        },
        {
          path: '*', element:
            <Suspense fallback={<div className="vh-100 text-center"><h2>looding</h2></div>}>
              <NotFound />
            </Suspense>
        },

      ]
  }])


  return <>
    <ProdectWishContextProvider>
      <ProdectCartContextProvider>
        <UserProvider>
          <Provider store={store}>
            <RouterProvider router={routers}></RouterProvider>
            <Toaster
              position="bottom-right"
              reverseOrder={false}
            />
          </Provider>
        </UserProvider>
      </ProdectCartContextProvider>
    </ProdectWishContextProvider>
  </>
}