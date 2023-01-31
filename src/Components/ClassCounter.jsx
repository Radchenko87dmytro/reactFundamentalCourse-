import React, { Component } from 'react'; 
//import MyButton from './Components/UI/button/MyButton';
import  classes from "./UI/button/MyButton.module.css";

class ClassCounter extends React.Component{ //component schould extends anothwer class

   constructor(props){
    super(props)                           // super-> parents constructor - call React.Component and give him props 
    this.state={
        count: 0
    }
    this.increment = this.increment.bind(this) //now props are an part of object therefore   .this
    this.decrement = this.decrement.bind(this)
}

    //const [Count, setCount]=useState()
    
     increment(){
        this.setState({count: this.state.count +1})
    }
     decrement(){
        this.setState({count: this.state.count -1})
    }
    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                 <button onClick={this.increment} className={classes.myBtn}>Increment</button>
                {/* <button onClick={this.increment}>Increment</button> */}
                <button onClick={this.decrement} className={classes.myBtn}>Decrement</button>
                
            </div>
        )
    }
}

export default ClassCounter