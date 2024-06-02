import { useEffect, useState } from 'react'
import { getUsernem } from '../services/auth'

export const useLogin = () => {
    const [username, setUsername] = useState()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            
            setUsername(getUsernem(token))
        }else {
            window.location.href = '/login'
        }
     }, [])
return username;
}
