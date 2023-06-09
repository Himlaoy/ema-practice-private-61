import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home';
import Shop from './components/Shop/Shop';
import Product from './components/Product/Product';
import Order from './components/Order/Order';
import Longin from './components/Login/Longin';
import cardProduct from './CardProduct/CardProduct';
import CheckOut from './components/CheckOut/CheckOut';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/Provider/AuthProvider';
import PrivateRoute from './components/Routes/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
      },
      {
        path: 'product',
        element: <Product></Product>
      },
      {
        path: 'order',
        element: <Order></Order>,
        loader: cardProduct,
      },
      {
        path: 'CheckOut',
        element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>,
      },
      {
        path: 'login',
        element: <Longin></Longin>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ],
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
