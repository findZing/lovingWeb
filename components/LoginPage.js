import { setLogin } from '@/redux/slices/auth'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const LoginPage = () => {
  const [inputValue, setInputValue] = useState('')
  const [message, setMessage] = useState('')

  const dispatch = useDispatch()

  const handleLogin = () => {
    
    const login = inputValue.toLowerCase().split(' ').includes('linh')
    console.log(login)
    if(login) dispatch(setLogin({login: true})) 
    else setMessage('Nhập đúng tên đi mà')
  }

  return (
    <div className='bg-white w-screen h-screen flex items-center justify-center'>
        <div className='w-[350px] border border-black rounded-[10px] py-[20px] px-[15px] flex flex-col items-center gap-[25px]'>
          <h1 className='text-[20px] font-bold'>Login</h1>

          <div className='w-full flex flex-col items-center gap-[10px]'>
            <div className='w-full h-[40px] border border-black rounded-[10px] flex items-center justify-center px-[10px]'>
              <input 
                placeholder='Nhập tên của bạn'
                value={inputValue}
                onChange={(e) => {setInputValue(e.target.value)}}
                className='focus:outline-none flex-1 text-[14px]'
              />
            </div>
            <p className='text-[14px] text-red-700'>{message}</p>
            <button onClick={handleLogin} className='w-[80px] h-[40px] '>
              <p>Đăng nhập</p>
            </button>
          </div>
        </div>
    </div>
  )
}

export default LoginPage