import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/auth'






const LogoutBtn = () => {
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })


    }

  return (
    <div>
        <button className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounder-full">
            
            Logout
        </button>
    </div>
  )
}

export default LogoutBtn