import React from 'react'
import { Link } from 'react-router-dom'
import InputField from '../../components/input.jsx'
import { handleClickLabel } from '../../utilities/functions.js'

 const Login = () => {
  return (
    <>
    <div className='logo-login'>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.167 10C52.271 10 46.667 15.612 46.667 22.5V65H40.833C33.938 65.003 28.333 70.611 28.333 77.5C28.333 84.393 33.938 90 40.83 90C47.725 90 53.333 84.393 53.333 77.5V35H59.167C66.059 35 71.667 29.395 71.667 22.5C71.667 15.605 66.059 10 59.167 10ZM46.667 77.5C46.6652 79.0471 46.0495 80.5303 44.9551 81.6239C43.8607 82.7175 42.3771 83.3322 40.83 83.333C39.2838 83.3311 37.8016 82.7159 36.7086 81.6223C35.6155 80.5287 35.0011 79.0462 35 77.5C35 74.287 37.617 71.67 40.833 71.667H46.667V77.5ZM59.167 28.333H53.333V22.5C53.3349 20.9534 53.9501 19.4707 55.0439 18.3771C56.1376 17.2836 57.6204 16.6686 59.167 16.667C62.383 16.667 65 19.284 65 22.5C65 25.716 62.383 28.333 59.167 28.333Z" fill="#DF6B47"/>
            <path d="M46.667 28.333H22.5C15.605 28.333 10 33.937 10 40.833C10 47.729 15.605 53.333 22.5 53.333H46.667V46.667H22.5C20.9534 46.6652 19.4707 46.0499 18.3771 44.9562C17.2836 43.8624 16.6686 42.3796 16.667 40.833C16.6689 39.2866 17.284 37.804 18.3775 36.7105C19.471 35.617 20.9536 35.0019 22.5 35H46.667V28.333ZM53.333 65H77.5C79.0464 64.9982 80.529 64.383 81.6225 63.2895C82.716 62.196 83.3311 60.7134 83.333 59.167C83.3314 57.6204 82.7164 56.1376 81.6229 55.0439C80.5293 53.9501 79.0466 53.3349 77.5 53.333H53.333V46.667H77.5C84.393 46.667 90 52.271 90 59.167C90 66.059 84.393 71.667 77.5 71.667H53.333V65Z" fill="#FFB74D"/>
        </svg>
    </div>
        <form className='loginDiv'>
        <h3 style={{textAlign: "center", marginBottom: "1rem"}}>Inicio de sesión</h3>
        <label htmlFor='zone' onClick={handleClickLabel}>Nombre de usuario:</label>    
        <InputField 
        type="text"
        id="zone"
        /* value="" */
        placeholder="Nombre de usuario"
        autoComplete="off"
        />
        <label htmlFor='password' onClick={handleClickLabel}>Contraseña:</label>
        <InputField 
        type="password"
        id="password"
        /* value="" */
        placeholder="Contraseña"
        autoComplete="off"
        />
        <Link to="/app/orders" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <button type='submit' className="btn btn-primary">Entrar</button>
        </Link>
        </form>
    </>
  )
}
export default Login;