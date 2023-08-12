import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__links">
            {/* <Link to="/"></Link> */}
            <Link to="/about">About site</Link>
            <Link to="/posts">Posts</Link> 
            <Link to="/counter">Counter</Link> 
            <Link to="/classCounter">classCounterr</Link>
        </div>           
    </div>
    
  )
}

export default Navbar