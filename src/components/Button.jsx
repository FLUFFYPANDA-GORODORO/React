import React from 'react'

function Button({name,profession,image,HandleFriends,friends,index}) {

   

  return (
    <div className='w-52 bg-zinc-200 p-3'>
      <div className='w-full h-60 bg-sky-200 '>
        <img className='w-full h-full object-cover ' src={image} alt="" />
      </div>
      <div className='w-full p-3'>
        <h3>{name}</h3>
        <h5>{profession}</h5>
        <button className={`px-3 py-1 text-xs text-white ${friends === true ? "bg-red-200" : "bg-blue-400" } font-semibold rounded-md`} onClick={()=>HandleFriends(index)}>{friends === true ? "Remove Friend" : "Add Friend"}</button>
      </div>
    </div>
  )
}

export default Button


// humara naya task ye he ke humara data app component mein hoga aur hum use props ke through pass karenge cards mein , har card paar ek add friend ka button hoga and humein uss add friend ke button par click hone par alert dena hai 



{/* <button className={`px-3 py-2 ${color} text-zinc-100 text-xs rounded m-4`}>{text}</button> */}