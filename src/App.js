import React, { Component, useEffect } from 'react'; 
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
import PostService from './API/PostService';
import Loader from './Components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';
import {getPageCount,  getPagesArray } from './utils/pages';

function App() {
    
    const[posts, setPosts] = useState(  [
        // {id: 1, title: "Java", body: "First title"},
        // {id: 2, title: "Python", body: "Second title"},
        // {id: 3, title: "C++", body: "Third title"},
    ])

    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(10)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    let pagesArray = getPagesArray(totalPages)


    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data);
        console.log(response);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(getPageCount(totalCount, limit))
    })

    
    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost)=>{
        setPosts([...posts, newPost])
        setModal(false)
    }

    //We are getting post from daughter component
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
        fetchPosts()
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
            {postError && 
                <h1>Get in error ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: 'center', marginTop: 50}}><Loader/></div>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts list"/>
            }
            <div className='page__wrapper'>
                {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p} 
                    className={page === p ? "page page__current" : " page"}>{p}</span>
                )}
            </div>
            
            
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
