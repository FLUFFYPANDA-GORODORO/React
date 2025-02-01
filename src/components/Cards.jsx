import React from 'react'
import Card from './Card'
function Cards({users,handleRemove}) {
  return (
    <div className='w-full  max-h-72 overflow-auto p-4 flex justify-center gap-4 flex-wrap'>
        {users.map((item,index)=>{
            return <Card key={index} users={item} id={index} handleRemove={handleRemove}/>
        })}
        

    </div>
  )
}

export default Cards
