import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {login as authLogin} from '../store/authslice'
import Button from './Button'
import Input from './Input'
import Logo from './Logo'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'



function Signup() {
    const navigate= useNavigate();
    const [error,setError]=useState('');
    const dispatch= useDispatch();
    const {register,handleSubmit}= useForm();
    const signup = async(data)=>{
        setError("");
        try {
            const userData= await authService.createAccount(data);
            if(userData){
            const userData= await authService.getCurrentUser();
                if(userData) dispatch(login(userData));
                navigate('/');
            }
        } catch (error) {
            setError(error.message);
        }
    }
  return (
<div className="flex items-center justify-center">
    <div className={`mx-auto w-full max-w-lg bg-gray-100
    rounded-xl p-10 border border-black/10`}>
        </div>
        </div>  )
}

export default Signup