import React, { Component } from 'react'; 
import { useState } from 'react';
import  classes from "./UI/button/MyButton.module.css";

const Counter = ()=> {
    const [Count, setCount]=useState(0)
    
    function increment(){
        setCount(Count+1)
    }
    function decrement(){
        setCount(Count-1)
    }

    return(
        <div>
            <h1>{Count}</h1>
        
            <button onClick={increment} className={classes.myBtn}>Increment</button>
            <button onClick={decrement} className={classes.myBtn}>Decrement</button>
        </div>
    )
}
export default Counter