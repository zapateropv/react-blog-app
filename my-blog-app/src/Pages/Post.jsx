import React from 'react'

const Post = ({title, comment, setTitle, setComment, submitPost}) => {
  
  return (
    <div className='flex flex-col justify-center  p-5'>
      <div>
        <p className='text-3xl mb-2'>New Post</p>
      </div>
      <div>
        <p className='text-xl mb-1'>Title:</p>
        <input placeholder='Enter a title...' className='w-full  border outline-none p-2 text-lg' 
        value={title}
        onChange={(e) => setTitle(e.target.value)}/>
      </div>
      <div>
        <p className='mt-10 text-xl mb-1'>Post:</p>
        <textarea placeholder="Enter a comment"
         className='w-full border p-2 h-70 outline-none text-lg rounded-md'
         value={comment}
         onChange={(e) => setComment(e.target.value)}>
        
         </textarea>
      </div>
      <div>
        <button className='w-full bg-gray-600 hover:cursor-pointer text-white
        p-2 text-xl mt-5 rounded-sm hover:bg-gray-800 transition' onClick={submitPost}>Submit</button>
      </div>
    </div>
  )
}

export default Post
