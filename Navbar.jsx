import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  
  return (
    <div>
        <nav>
            <Link to='/Home'><li>Home</li></Link>
            <Link to='/About'><li>About</li></Link>
            <Link to='/Login'><li>Login</li></Link>
            
        </nav>
    </div>
  )
}
export default Navbar