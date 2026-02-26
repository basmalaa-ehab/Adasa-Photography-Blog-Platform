import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from './../Footer/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from "../ScrollToTop";

export default function Layout() {
  return (
    <div>
            <ScrollToTop />

      <Navbar/>
   <div className=" ">
        <Outlet/>
      </div>

      <Footer/>
    </div>
  )
}
