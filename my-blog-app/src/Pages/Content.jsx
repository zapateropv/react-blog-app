import React from 'react'

const Content = ({ content, deletePost }) => {
  return (
    <div className='p-5 overflow-y-scroll'>
      
        {content.map((item, index) => (
          <div key={index} className=' cursor-pointer' >
            <div>
              <p className='text-4xl  font-medium mb-2 mt-2 font-arial'>{item.title}</p>
              <p className='text-gray-7600'>{item.date}</p>
            </div>
            <div>
              <p className='text-xl mt-5 mb-10'>{item.comment}</p>
            </div>
            <div>
                <button className='bg-red-800 hover:bg-red-700 rounded-md p-3 hover:cursor-pointer  text-white text-lg'
                onClick={()=> deletePost(item.index)}>Delete Post</button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Content
