import React from 'react'
import { NavLink,Link } from "react-router-dom";

function Nav() {
  return (
    <div>
       <nav className='mt-10 flex justify-center gap-10'>
        <NavLink style={(e)=>{
            return{
                color: e.isActive ? "tomato" : "",
                fontWeight: e.isActive ? "bold" : ""
            }
        }} to="/home">Home</NavLink>
        <NavLink style={(e)=>{
            return{
                color: e.isActive ? "tomato" : "",
                fontWeight: e.isActive ? "bold" : ""
            }
        }} to="/user">User</NavLink>
        <NavLink style={(e)=>{
            return{
                color: e.isActive ? "tomato" : "",
                fontWeight: e.isActive ? "bold" : ""
            }
        }}to="/about">About</NavLink>
      </nav>
    </div>
  )
}

export default Nav





// <nav className='mt-10 flex justify-center gap-10'>
// <NavLink style={(e)=>{
//     console.log(e)
// }} to="/home">Home</NavLink>
// <NavLink to="/user">User</NavLink>
// <NavLink to="/about">About</NavLink>
// </nav>

// This function gives is two values isactive & ispending
// With the help of isactive we can know that the current link is active and we can perform functions , styling and other things on it