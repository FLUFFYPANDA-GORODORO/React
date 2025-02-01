import React from 'react'
import { useForm } from 'react-hook-form'

function Forms({handleFormSubmitData}) {

    const {register,handleSubmit,reset} = useForm()
    const handleFormSubmit = (data) =>{
        handleFormSubmitData(data)
        reset()
    } 

  return (
    <div className='mt-10 flex justify-center '>
      <form onSubmit={handleSubmit(handleFormSubmit)} className='flex gap-10'>
        <input {...register('name')}  className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Name'/>
        <input {...register('email')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="email" placeholder='Email'/>
        <input {...register('image')} className='rounded-md px-2 py-1 text-base font-semibold outline-none' type="text" placeholder='Image url'/>
        <input className='rounded-md px-5 py-1 bg-blue-500 text-white font-semibold' type="submit" />
      </form>
    </div>
  )
}

export default Forms
