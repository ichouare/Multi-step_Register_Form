import RegisterForm from '@/app/UI/Register/RegisterForm'
import StepsLogin from '@/app/UI/Register/StepsLogin'
import Image from '@/app/UI/Register/Image'
import React from 'react'

const Login = () => {
  return (
    <div className=' w-full h-full  grid grid-flow-row  grid-rows-[120px_1fr_200px] '>
        <StepsLogin/>
        <RegisterForm/>
        <Image/>
    </div>
  )
}

export default Login