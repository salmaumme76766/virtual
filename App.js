import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import RegistrationPage from "./RegistrationPage";
import AdminDashboard from "./Admin/AdminDashboard";
import ManageProducts from "./Admin/ManageProducts";
import UserDashboard from "./User/UserDashboard";
import Products from "./User/Products";
import Cart from './User/Cart';
import { ToastContainer } from "react-toastify";
import MyOrders from "./User/MyOrders";
import ManageCustomers from "./Admin/ManageCustomers";
import HomeHeader from "./HomeHeader";
import Contact from "./Contact";
import HomeInfo from "./HomeInfo";
import ManageOrders from "./Admin/ManageOrders";
import AuthContext from "./Context";
import About from "./About";
export const TOAST_PROP={position:"top-center",hideProgressBar:true};

 function App() {
 return(
 
  <BrowserRouter>
  <AuthContext>
  <ToastContainer />
  
  <Routes>
  <Route path="/" element={<HomeHeader />}>
  <Route path="/" element={<HomeInfo />} />
  <Route path="login" element={<Login />} />
  <Route path="register" element={<RegistrationPage/>} />
  <Route path="shop" element={<Products />} />
  <Route path="about" element={<About/>} />
  <Route path="contactus" element={<Contact/>} />
  
</Route>

  <Route path="AdminDashboard" element={<AdminDashboard />}>
    <Route path="" element={<ManageProducts />} />
    <Route path="allorders" element={<ManageOrders/>} />
    <Route path="manageusers" element={<ManageCustomers/>} />
    <Route path="manageproducts" element={<ManageProducts />} />
    
    </Route>
    
    <Route path="userdashboard" element={<UserDashboard />} >
    <Route path="" element={<Products />} />
    <Route path="cart" element={<Cart />} />
    <Route path="products" element={<Products />} />
    <Route path="myorders" element={<MyOrders />} />

   </Route>
  </Routes>
  </AuthContext>
  </BrowserRouter>
 );
}
export default App;
