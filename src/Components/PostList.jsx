import React, { Component} from 'react';

import PostItem from './PostItem';
import { TransitionGroup, CSSTransition  } from 'react-transition-group';
 
import "../App.scss"

const PostList =({posts, title, remove})=>{

    if(!posts.length) {
        return (
            <h1 style={{textAlign: "center"}}>
                Posts not found
            </h1>
        )
    }
    
    return(
        <div>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            <TransitionGroup>
                {posts.map((post, index)=>
                    <CSSTransition 
                        key={post.id}
                        timeout={500}
                        classNames="post"
                    >      
                    <PostItem remove={remove} number={index + 1} post={post}></PostItem>
                    </CSSTransition>
                )} 
            </TransitionGroup>
            
        </div>
    )
}


export default PostList