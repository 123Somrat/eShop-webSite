import StorefrontIcon from '@mui/icons-material/Storefront';
import "./Login.css"

function Login(){
   return(
       <div className='login'>
           <div className='login__logo'>
                <StorefrontIcon className='login__logoImage' fontSize='large' />
                <h2 className='login__logoTitle'>eShop</h2>
           </div>
       </div>

   )

}

export default Login;