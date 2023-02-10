import React, { Component } from 'react';
import classes from  "./MyButton.module.css";
;

const MyButton =({children, ...props})=>{
    return(
        //  className='myBtn'
       <button  {...props} className={classes.myBtn}>
           {children}
       </button>
    )
}


export default MyButton