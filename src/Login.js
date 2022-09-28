import StorefrontIcon from '@mui/icons-material/Storefront';
import "./Login.css"
import {Link} from "react-router-dom"
import { useState } from 'react';

function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
   return(
       <div className='login'>
          <Link to="./login" style={{textDecoration:"none"}}>
             <div className='login__logo'>
                   <StorefrontIcon className='login__logoImage' fontSize='large' />
                   <h2 className='login__logoTitle'>eShop</h2>
                </div>
            </Link>
            <div className="login__container">
                 <h1>Sign-in</h1>
                <form>
                     <h5>Email</h5>
                     <input type="text" value={email}onChange={e=>setEmail(e.target.value)}/>
                     <h5>Password</h5>
                     <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                     <button type="submit" className='login__signInButton'>Sign in</button>
                </form>
                 <p>
                    By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                 </p>
                 <button className='login__registretionButton'>Crete Your eShop A</button>
            </div>
        </div>
        
   )

}

export default Login;