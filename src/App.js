import React, { Component } from 'react'; 
import { useState } from 'react';
import ClassCounter from './Components/ClassCounter';
import './App.scss';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
import MyButton from './Components/UI/button/MyButton';
import MyInput from './Components/UI/input/MyInput';
import Counter from './Components/Counter';


function App() {
    //  constructor(props){}
    //       this.state
    const[posts, setPosts] = useState(  [
        {id: 1, title: "Javascript", body: "Description"},
        {id: 2, title: "Javascript 2", body: "Description"},
        {id: 3, title: "Javascript 3", body: "Description"},
    ])
    // const[posts2, setPosts2] = useState(  [
    //     {id: 1, title: "Python", body: "Description"},
    //     {id: 2, title: "Python 2", body: "Description"},
    //     {id: 3, title: "Python 3", body: "Description"},
    // ])
     

    const [value, setValue] = useState("Text in input");

    // const inputHandler = (event)=>{
    //     setValue(event.target.value);
    // }

   
    return(
        <div className='App' >
          
            <Counter/>
            <ClassCounter/>

            <form>
                
                {/*
                <MyInput type="text" placeholder='Name of post'></MyInput>
                <MyInput type="text" placeholder='Description of post'></MyInput>*/} 
                <MyButton >Create post</MyButton>
                
            </form>
           <PostList posts={posts} title="Posts about JS"></PostList>
           {/* <PostList posts={posts2} title="Posts about Python"></PostList> */}
            
        </div>
    )
}

export default App;
