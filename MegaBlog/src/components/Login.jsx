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
  return (

    <div>Login</div>
  )
}

export default Login