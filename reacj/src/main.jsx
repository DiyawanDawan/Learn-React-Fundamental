import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import ErrorPage from './pages/404'
import ProductPage from './pages/products'
import Profile from './pages/profile'
import DetailProduct from './pages/detailProduct'
// import LoginPage from ".."
const router = createBrowserRouter(
  [
    {
      path: "/",
    element: <div>Halo Word</div>,
    errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: '/register',
      element: <RegisterPage />
    },
    {
      path: '/product',
      element: <ProductPage />
    },
    {
      path: '/product/:id',
      element: <DetailProduct />
    },
    {
      path: '/profile',
      element: <Profile />
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
