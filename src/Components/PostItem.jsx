import React, { Component } from 'react'; 
import MyButton from './UI/button/MyButton';
import "../App.scss"
import {useNavigate} from "react-router-dom"


const PostItem= (props)=>{

    const navigate = useNavigate()
    
    
    return(
        <div className='post'>
                <div className='post_content'>
                    <strong>
                        {props.post.id}. {props.post.title}
                    </strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className='post_btns'>
                    <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>Open</MyButton>
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
        </div>
    )
}


export default PostItem