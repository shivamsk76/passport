import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () =>{
    return(
        <nav>
            
            <h3>KALUA</h3>
             <ul className="nav-links">
              <Link to='/register'><li>Register Here</li> </Link>
              <Link to='/login'><li>Login Page</li> </Link>
                

                
            
            </ul>
        


        </nav>
        
    ) 
}

export default Nav
