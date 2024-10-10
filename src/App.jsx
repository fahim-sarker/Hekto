import './App.css'
import RootLayout from './components/RootLayout';
import Home from './Pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider}from "react-router-dom";
import Shop from './Pages/Shop';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Cart from './Pages/Cart';
import Myaccount from './Pages/Myaccount';
import Productdetails from './Pages/Productdetails';
import Checkout from './Pages/Checkout';
import Error from './Pages/Error';
import Shoplist from './Pages/Shoplist';
import Category from './Pages/Category';
import Order from './Pages/Order';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/shop' element={<Shop/>}></Route>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/blog' element={<Blog/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/myaccount' element={<Myaccount/>}></Route>
    <Route path='/shop/:id' element={<Productdetails/>}></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
    <Route path='/shoplist' element={<Shoplist/>}></Route>
    <Route path='/category' element={<Category/>}></Route>
    <Route path='/error' element={<Error/>}></Route>
    <Route path='/order' element={<Order/>}></Route>
    <Route path='/myaccount' element={<Myaccount/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
  </Route>
))

function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
