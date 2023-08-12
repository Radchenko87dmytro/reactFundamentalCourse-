import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from '../../pages/About'
import Posts from '../../pages/Posts'
import Counter from '../Counter'
import ClassCounter from '../ClassCounter'
import Error from '../../pages/Error'
import PostIdPage from '../../pages/PostIdPage'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/about' element={<About/>}/> 
        <Route path='/posts' element={<Posts/>}/>
        <Route path='/posts/:id' element={<PostIdPage/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/classCounter' element={<ClassCounter/>}/>
        <Route path="*" element={<Posts/>}/>
        {/* <Route path='*' element={<Error/>}/> */}
    </Routes>
  )
}

export default AppRouter