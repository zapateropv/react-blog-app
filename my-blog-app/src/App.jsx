import React from 'react'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import Home from './Pages/Home'
import Post from './Pages/Post'
import About from './Pages/About'
import Content from './Pages/Content'
import { useState } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import dayjs from 'dayjs';
const App = () => {

  const currentTime = dayjs().format('MMMM-D-YYYY hh:mm:ss:a').toString();
 
 
  const navigate = useNavigate()
  const [post, setPost] = useState([{title: "My first post", 
                                    comment: "lorem ipsum...",
                                    date: currentTime }])
  const [title, setTitle] = useState("")
  const [comment, setComment] = useState("");
  const [content, setContent] = useState([])

  
  const submitPost = () => {
   if(title !== ""){
    const newItem = [...post, {title, comment, date: currentTime}]

    setPost(newItem);
    setTitle("")
    setComment("")
    navigate('/home')
   }else{
    alert("pls input something! ")
   }
  }

  const goToContent = (index) => {
    const selected = post[index];
    setContent([{ ...selected, index }]);
   
    navigate('/content')
  }
  console.log(content)
  const deletePost = (indexes) => {
    const newItem = post.filter((item,i) => i !== indexes)
    setPost(newItem)
    navigate('/home')
  }
  

  return (
    <div className='bg-[rgba(255,255,255,0.7)]  w-3xl h-screen m-auto flex flex-col just  shadow-2xl '>
      <Header />
      <div className='flex justify-between items-center bg-stone-600 p-5 text-lg '>
        <div>
          <input placeholder='Search Posts' className='outline-none bg-white w-sm  rounded-sm p-1' />
        </div>
        <div>
          <ul className='flex justify-between items-center  text-white '>
            <li className='hover:bg-white transition p-2 hover:text-black'><Link to="/Home">Home</Link></li>
            <li className='hover:bg-white transition p-2 hover:text-black'><Link to="/Post">Post</Link></li>
            <li className='hover:bg-white transition p-2 hover:text-black'><Link to="/About">About</Link></li>
          </ul>
        </div>
      </div>
     
     
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/Home" element={<Home post={post} goToContent={goToContent}/>}></Route>
        <Route path="/Post" element={<Post title={title} comment={comment} 
        setTitle={setTitle} setComment={setComment} submitPost={submitPost}/>}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path='/Content' element={<Content content={content} setContent={setContent}
        deletePost={deletePost}/>}></Route>
      </Routes>
       <Footer />
    </div>
  )
}

export default App
