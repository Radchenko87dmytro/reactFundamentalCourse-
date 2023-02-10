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
import PostForm from './Components/PostForm';
import MySelect from './Components/UI/select/MySelect';

function App() {
    //  constructor(props){}
    //       this.state
    const[posts, setPosts] = useState(  [
        {id: 1, title: "Java", body: "Desc"},
        {id: 2, title: "script 2", body: "Descri"},
        {id: 3, title: "Javascript 3", body: "Description3"},
    ])

    const [selectedSort, setSelectedSort] = useState("")
    const [searchQuery, setSearchQuery] = useState("")

    function getSortedPosts() {
        console.log("worked function SortedPosts")
        if(selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }

    

    const sortedPosts = getSortedPosts()

    // const[posts2, setPosts2] = useState(  [
    //     {id: 1, title: "Python", body: "Description"},
    //     {id: 2, title: "Python 2", body: "Description"},
    //     {id: 3, title: "Python 3", body: "Description"},
    // ])
     

    //const [value, setValue] = useState("Text in input");

    // const inputHandler = (event)=>{
    //     setValue(event.target.value);
    // }

    
    // const [title, setTitle] = useState("");
    // const [body, setBody] = useState("");

   
    const createPost = (newPost)=>{
        setPosts([...posts, newPost])
    }

    //We are getting post from daughter component
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        
    }

   
    return (
        <div className='App' >
          
            <Counter/>
            <ClassCounter/>
            
            <PostForm create={createPost}/>
            <hr style={{margin: '15px 0'}}></hr>
            <div>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Select by"
                    options={[
                        {value: 'title', name: 'By name'},
                        {value: 'body', name: 'By description'},
                    ]}
                />
            </div>
            {posts.length !== 0
                ? 
                <PostList remove={removePost} posts={sortedPosts} title="Posts list"/>
                : 
                <h1 >
                    Posts not found
                </h1>
            }
           
           {/* <PostList posts={posts2} title="Posts about Python"></PostList> */}
            
        </div>
    );
};

export default App;
