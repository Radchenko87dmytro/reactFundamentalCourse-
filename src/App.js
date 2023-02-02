import React, { Component } from 'react'; 
import { useState, useRef } from 'react';
import ClassCounter from './Components/ClassCounter';
import './App.scss';
import PostItem from './Components/PostItem';
import PostList from './Components/PostList';
//import  classes from "./Components/UI/button/MyButton.module.css";
import MyInput from './Components/UI/input/MyInput';
import Counter from './Components/Counter';
import MyButton from './Components/UI/button/MyButton';


function App() {
    //  constructor(props){}
    //       this.state
    const[posts, setPosts] = useState(  [
        {id: 1, title: "Javascript", body: "Description1"},
        {id: 2, title: "Javascript 2", body: "Description2"},
        {id: 3, title: "Javascript 3", body: "Description3"},
    ])
    // const[posts2, setPosts2] = useState(  [
    //     {id: 1, title: "Python", body: "Description"},
    //     {id: 2, title: "Python 2", body: "Description"},
    //     {id: 3, title: "Python 3", body: "Description"},
    // ])
     

    //const [value, setValue] = useState("Text in input");

    // const inputHandler = (event)=>{
    //     setValue(event.target.value);
    // }

    const [post, setPost] = useState({title: "", body: ""})
    // const [title, setTitle] = useState("");
    // const [body, setBody] = useState("");

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, {...post, id: Date.now()}])  // expand the old array (...posts) and add in the endOfArray a (newPost)
        setPost({title: "", body: ""});
    }


   
    return(
        <div className='App' >
          
            <Counter/>
            <ClassCounter/>
            
            <form>
                {/* managed component */}
                <MyInput 
                    type="text" 
                    placeholder='Name of post'
                    value={post.title}
                    onChange={e => setPost({...post, title: e.target.value})}
                    />
                    {/* <input ref={bodyInputRef}></input> */}
                    {/* Unmanaged Component/uncontrolled component */}
                <MyInput 
                    value={post.body}
                    onChange={e => setPost({...post, body: e.target.value})}
                    type="text" 
                    placeholder='Description of post'/>
                {/*style={{textAlign: 'center'}} */}
                <MyButton onClick={addNewPost}>Create post</MyButton>
                
            </form>
           <PostList posts={posts} title="Posts list"></PostList>
           {/* <PostList posts={posts2} title="Posts about Python"></PostList> */}
            
        </div>
    )
}

export default App;
