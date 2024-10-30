import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = (username, pass) => {
        if(username == 'admin' && pass == '123'){
            navigate('/Home')
        }else{
            setError('Login failed')
        }
    }

  return (
    <h1>Login</h1>
  )
}

export default LoginForm


