import React from 'react'

function Song() {

    const data =[
        { name: "Maahi vee" , description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero rem recusandae molestiae."},
        { name: "Dope Shope" , description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero rem recusandae molestiae."}

    ]

    const HandleEvent = () =>{alert("Helloooooo")}

  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col justify-center  items-center gap-10'>
       {data.map((elem,index)=>(
         <div key={index} className='w-60 px-3 py-2  bg-zinc-100 rounded'>
         <h3 className='flex  font-semibold text-xl '>{elem.name}</h3>
         <p className='text-xs mt-2'>{elem.description}</p>
         <button onClick={HandleEvent} onMouseOver={HandleEvent} className='px-4 py-2 bg-blue-400 text-xs font-semibold text-zinc-100 rounded-md mt-3 ml-16'>Download</button>
     </div>
       ))}
    </div>
  )
}

export default Song
