
import React, { useState } from 'react'

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase";
import Avatar from "../img/Avatar.png";
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import { MdAdd, MdLogout } from 'react-icons/md';

export const Header = () => {
  const navigate = useNavigate();
    const [isNewpage, setIsNewpage] = useState(false);
    const [{user},dispatch] = useStateValue();
    const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
   
  const login = async () => {
    if(!user)
    {
     const {user: { refreshToken, providerData }} = await signInWithPopup(firebaseAuth, provider);
     
     dispatch({
       type: actionType.SET_USER,
       user: providerData[0],
     });
     localStorage.setItem('user', JSON.stringify(providerData[0]));
    }
    else{
     setIsNewpage(!isNewpage);
    }
   };
 
 
 const logout = () => {
   setIsNewpage(false);
   localStorage.clear();
   navigate("/");
   dispatch({
     type: actionType.SET_USER,
     user: null,
   });
 };
  return (
    <header>
    <div className="container-fluid">
      <div className="row py-3 border-bottom">
        <div className="col-sm-4 col-lg-2 text-center text-sm-start d-flex gap-3 justify-content-center justify-content-md-start">
          <div className="d-flex align-items-center my-3 my-sm-0">
            <Link to="/*">
              <img src="images/logo.svg" alt="logo" className="img-fluid" />
            </Link>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <svg width={24} height={24} viewBox="0 0 24 24"><use xlinkHref="#menu" /></svg>
          </button>
        </div>
        <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-4">
          { <div className="search-bar row bg-light p-2 rounded-4">
            <div className="col-md-4 d-none d-md-block">
              <select className="form-select border-0 bg-transparent">
                <option>All Categories</option>
                <option>Groceries</option>
                <option>Drinks</option>
                <option>Chocolates</option>
              </select>
            </div>
              <div className="col-11 col-md-7">
              <form id="search-form" className="text-center" action="index.html" method="post">
                <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for more than 20,000 products" />
              </form>
            </div>
             <div className="col-1">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" /></svg>
            </div> 
          </div> }
        </div>
        
        <div className="col-lg-4">
            
          <ul className="navbar-nav list-unstyled d-flex flex-row gap-3 gap-lg-5 justify-content-center flex-wrap align-items-center mb-0 fw-bold text-uppercase text-dark">
            <li className="nav-item active">
              <Link to="/*" className="nav-link">Home</Link>
              
            </li>

            <li className="nav-item dropdown">

              <a className="nav-link dropdown-toggle pe-3" role="button" id="pages" data-bs-toggle="dropdown" aria-expanded="false">Pages</a>
              <ul className="dropdown-menu border-0 p-3 rounded-0 shadow" aria-labelledby="pages">
              <li><Link to="/login" className="dropdown-item">SingUp </Link></li>
                <li><a href="index.html" className="dropdown-item">About Us </a></li>
                <li><a href="index.html" className="dropdown-item">Shop </a></li>
                <li><a href="index.html" className="dropdown-item">Single Product </a></li>
                <li><a href="index.html" className="dropdown-item">Cart </a></li>
                <li><a href="index.html" className="dropdown-item">Blog </a></li>
                <li><a href="index.html" className="dropdown-item">Single Post </a></li>
                <li><a href="index.html" className="dropdown-item">Styles </a></li>
                <li><a href="index.html" className="dropdown-item">Contact </a></li>
                <li><a href="index.html" className="dropdown-item">Thank You </a></li>
                <li><a href="index.html" className="dropdown-item">404 Error </a></li>
              </ul>

            </li>
           
           
        

          </ul>
          
        </div>
        <div className="col-sm-8 col-lg-2 d-flex gap-5 align-items-center justify-content-center justify-content-sm-end">
          <ul className="d-flex justify-content-end list-unstyled m-0">
            <li>
     
            <div className="relative">
            <motion.img
              whileTap={{ scale: 0.7 }}
              src={user ? user.photoURL : Avatar} alt=""
              className="w-10 min-w-[20px] h-10 min-h-[20px] drop-shadow-2xl rounded-full cursor-pointer"
              onClick={login}
            />
            { isNewpage&&(
              <div className='w-40 bg-gray-10 shadow-xl rounded-lg flex flex-col absolute top-11 right-0'>
           <Link to ={'/*'}>
             <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 easein-out text-textColor text-base"onClick={()=>setIsNewpage(false)}> <MdAdd />New_page</p>
             </Link>
             <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base" onClick={logout}> <MdLogout />Check_Out</p>
            
          </div>
            ) }
            </div>
            
            </li>
            <li>
              <a href="#" className="p-2 mx-1">
                <svg width={24} height={24}><use xlinkHref="#wishlist" /></svg>
              </a>
            </li>
            <li>
              <a href="#" className="p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                <svg width={24} height={24}><use xlinkHref="#shopping-bag" /></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  
  )
}
