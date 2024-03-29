import React, { useState, useEffect } from 'react'; 
import '../App.scss';
import PostList from '../Components/PostList';
//import  classes from "./Components/UI/button/MyButton.module.css";
import MyButton from '../Components/UI/button/MyButton';
import PostForm from '../Components/PostForm';
import PostFilter from '../Components/PostFilter';
import MyModal from '../Components/UI/MyModal/MyModal';
import { usePosts } from '../hooks/usePost';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages'; 
import Pagination from '../Components/UI/pagination/Pagination';

function Posts() {
    
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
    console.log(page);


    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page)
        setPosts(response.data);
        console.log(response);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(getPageCount(totalCount, limit))
    })

    
    useEffect(() => {
        fetchPosts(limit, page)
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
        fetchPosts(limit, page)
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
            <Pagination 
                page={page} 
                changePage={changePage} 
                totalPages={totalPages}
            />
        </div>
    );
};

export default Posts;
