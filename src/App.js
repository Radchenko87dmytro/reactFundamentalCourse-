import React, { Component } from 'react'; 
import { useState, useRef, useMemo } from 'react';
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
import PostFilter from './Components/PostFilter';
import MyModal from './Components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePost';
import axios from "axios";

function App() {
    
    const[posts, setPosts] = useState(  [
        {id: 1, title: "Java", body: "First title"},
        {id: 2, title: "Python", body: "Second title"},
        {id: 3, title: "C++", body: "Third title"},
    ])

    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    
    const createPost = (newPost)=>{
        setPosts([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(response.data);

    }

    //We are getting post from daughter component
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className='App' >
            <button onClick={fetchPosts}>GET POSTS</button>
            <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>
                Create user
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            
            <hr style={{margin: '15px 0'}}></hr>
            <PostFilter 
                filter={filter}
                setFilter={setFilter}
            /> 
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list"/>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <Counter/>
            <ClassCounter/>
        </div>
    );
};

export default App;
