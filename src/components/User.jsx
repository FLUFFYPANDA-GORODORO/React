import React from 'react'
import { Link,Outlet } from "react-router-dom";


function User() {
  return (
    <div>
    <div className='bg-zinc-100 w-1/2 m-auto mt-10 p-5' >
    <h1 className='text-5xl font-semibold'>User</h1>
    <p className='text-xs mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic incidunt debitis cum architecto similique, eveniet assumenda eligendi repudiandae nobis officiis temporibus tenetur esse molestiae earum facilis atque vel facere maiores!</p>

    <div className='flex w-1/2 flex-col mt-3'>
      <Link className='p-3 bg-red-200 text-2xl m-2' to="/user/John">John</Link>
      <Link className='p-3 bg-red-200 text-2xl m-2' to="/user/Gaurav">Gaurav</Link>
      <Link className='p-3 bg-red-200 text-2xl m-2' to="/user/Sumedh">Sumedh</Link>
    </div>
    </div>

    <hr />
      <Outlet />    


  
  </div>

  
  )
}

export default User
