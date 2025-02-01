import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Userdetail() {
    const {name} = useParams()
    const navigate = useNavigate()

    const gobackHandler = () => {
        navigate("/user")
    }
  return (
    
    <div className='bg-zinc-100 w-1/2 m-auto mt-10 p-5' >
    <h1 className='text-5xl font-semibold'>User Details</h1>
    <h2 className='text-3xl m-2 '>Hii {name}</h2>
    <p className='text-xs mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic incidunt debitis cum architecto similique, eveniet assumenda eligendi repudiandae nobis officiis temporibus tenetur esse molestiae earum facilis atque vel facere maiores!</p>
    <div className='flex justify-center items-center'>
      <button onClick={gobackHandler} className='px-2 py-2 rounded bg-blue-400 m-4 '>Go back</button>
      </div>
  </div>
  )
}

export default Userdetail
