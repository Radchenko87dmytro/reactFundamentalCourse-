import React, { Component } from 'react';
import classes from  "./MyButton.scss";

const MyButton =({children, ...props})=>{
    return(
       <button {...props} className='myBtn'>
           {children}
       </button>
    )
}


export default MyButton