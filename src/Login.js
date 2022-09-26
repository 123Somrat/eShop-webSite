import StorefrontIcon from '@mui/icons-material/Storefront';
import "./Login.css"
import {Link} from "react-router-dom"

function Login(){
   return(
       <div className='login'>
          <Link>
             <div className='login__logo'>
                   <StorefrontIcon className='login__logoImage' fontSize='large' />
                   <h2 className='login__logoTitle'>eShop</h2>
                </div>
       
            </Link>
           
        </div>
        
   )

}

export default Login;