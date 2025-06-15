import React from 'react'

const Home = ({ post, goToContent }) => {

  console.log(post)
  return (
    <div className='flex flex-col p-4 overflow-y-scroll h-screen '>
     
        {post.length >= 1 ?post.map((content, index) => (
          <div key={index} className='border-b-1 cursor-pointer' onClick={()=> goToContent(index)}>
            <div>
              <p className='text-4xl  font-medium mb-2 mt-2 font-arial'>{content.title}</p>
              <p className='text-gray-7600'>{content.date}</p>
            </div>
            <div>
              <p className='text-xl mt-5 mb-10'>{content.comment}</p>
            </div>
          </div>
        )) : <span className='text-center text-4xl text-red-800'>Blog is empty</span>}
     
    </div>
  )
}

export default Home
