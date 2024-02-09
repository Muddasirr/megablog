import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import {login as authLogin} from '../store/authslice'
import Button from './Button'
import Input from './Input'
import Logo from './Logo'
import {useDispatch} from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'



function Login() {

const navigate= useNavigate();
const dispatch= useDispatch();
const {register,handleSubmit}= useForm();
const[error,setError]=useState(null);

const login = async(data)=>{
  setError("");
  try {
   const session= await authService.login(data);
    if(session){
      const userData= await authService.getCurrentUser();
      if(userData){
        dispatch(authLogin(userData));
        navigate("/");
      }
      
    }
  } catch (error) {
    setError(error.message);
  }
}
  return (

    <div className='flex items-center justify-center w-full'
    ><div className='mx-auto w-full max-w-lg bg-gray-100 rounded-sl p-10 border border-black/10'><div
    className='mb-2 flex justify-center'>
    <span className='inline-block w-full max-w-[100px]'>
      <Logo width='100%'/>
      
      </span>  
    </div>
    <h2 className='text-center text-2xl font-bold leading-tight'>
      Sign in to your account</h2>
<p className='mt-2 text-center text-base text-blak/60'>
  Don't Have any account?
  <Link to='/signup' className='font-medium text-primary transition-all duration-200 hover:underline'>
    Sign Up
    
    </Link>
</p>
{error && <p className='text-red-500 text-center text-sm mt-2'>{error}</p>}
<form onSubmit={handleSubmit(login)} className='mt-8'>

<div className="space-y-5">
 
  <Input label="Email: "
  placeholder="Enter your name"
  type="email"{
    ...register("email"),{required:true,
    validate:{matchPattern:(value)=>{
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)||"Invalid Email"
    }}}}/>
    <Input
label="Password: "
type="password"
placeholder="Enter your password"
{...register("password"),{required:true}}/>

<Button
type="submit"
className="w-full">Sign In</Button>


</div>





</form>
    
    </div>
    </div>
  )
}

export default Login