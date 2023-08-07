import React from 'react';
import { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: "", body: ""})
    
    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        //setPosts([...posts, {...post, id: Date.now()}])  // expand the old array (...posts) and add in the endOfArray a (newPost)
        create(newPost)
        setPost({title: "", body: ""});
    }

    return (
        <form  style={{margin: '0px 0'}}>
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
    );
};

export default PostForm;