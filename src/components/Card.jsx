import React from 'react'

function Card({users,handleRemove,id}) {
  return (
 
    
   <div className='w-52 h-full bg-zinc-100 rounded-md flex flex-col items-center p-2'>
    <div className='image w-[3vw] h-[3vw] rounded-full bg-blue-500'>
      <img className='w-full h-full object-cover overflow-hidden rounded-full' src={users.image} alt="" />
    </div>
    <h1 className='mt-1 text-xl font-semibold'>{users.name}</h1>
    <h4 className='opacity-60 text-xs font-emibold'>{users.email}</h4>
    <p className='mt-2 text-center text-xs font-semibold leading-1 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae id placeat ad.</p>
    <button onClick={()=>handleRemove(id)} className='px-3 py-1 bg-red-400 text-xs rounded-lg font-semibold text-white mt-4 '>Remove</button>
  </div>
  
   
  )
}

export default Card










































// import React from 'react'

// function Card() {

//   const data = [
//     {image:"https://images.unsplash.com/photo-1522780550166-284a0288c8df?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"Amazon Basics", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam asperiore",instock:true},
    
//     {image:"https://images.unsplash.com/photo-1522780550166-284a0288c8df?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"Apple", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam asperiore",instock:false},

//     {image:"https://images.unsplash.com/photo-1522780550166-284a0288c8df?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" , name:"Helloo Bhaiii", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aperiam asperiore",instock:true}

//   ]

//   return (
//     <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
//        {data.map((elem,index) => (
//         <div key={index} className='width-52 bg-zinc-100 rounded-md overflow-hidden'>
//         <div className='w-full h-32 bg-zinc-300'>
//           <img className='w-full h-full object-cover object-top' src={elem.image} alt="" />
//         </div>
//         <div className='w-52 px-3 py-4'>
//             <h2 className='font-semibold'>{elem.name}</h2>
//             <p className='text-xs mt-5'>{elem.description}</p>
//             <button className={`px-4 py-2 ${elem.instock ? 'bg-blue-400' : 'bg-red-400'} text-xs rounded-md mt-3 ml-8`}>{elem.instock ? "In Stock" : "Out of Stock"}</button>
//             {/* YE dekoho yaha pe humne use kiya ternanry operator use kiya . one of the coolest thing . Agar true hoga to In stock print karega nai to false hoga to out of stock print karega */}
//         </div>
//       </div>
//        ))}
//     </div>
//   )
// }

// export default Card
