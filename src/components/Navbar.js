import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

console.log("Done")
const Navbar = () =>{

    const {cart} = useSelector((state)=>state);
    return(
        <div>
            <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
               <NavLink to="/">
               <div className="ml-5">
                <img src="../logo.png " className="h-14"/>
                </div>
               </NavLink>

               <div className="flex items-center font-medium text-xl text-slate-100 mr-5 space-x-7">
               <NavLink to="/" >
                    <p>Home</p>
               </NavLink>

               <NavLink to="/cart">
                    <div className="relative">
                    <FaShoppingCart className="text-2xl"/>
                    {
                        cart.length>0 &&
                        <span className="absolute bg-green-600 text-xs w-4 h-4 text-center
                        animate-bounce rounded-full text-white -top-[0.3rem] -right-1">{cart.length}</span>
                    }
                  </div>
               </NavLink>
               </div>

              
      
                 
            </nav>
        </div>
    )
}
export default Navbar;