"use client"
import { Input, Button } from 'antd';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const Login = () => {
    const router = useRouter();
    const [input, setInput] = useState({
        email: '',
        password: '',
        admin: false
    });

    const HandlerOnchange = (e) => {
        let { value, name } = e.target;
        setInput(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        setInput({
            email: '',
            password: '',
            admin: false
        })
    }

    return (
        <div className='w-[100%] sm:w-[70%] rounded h-[70vh]  m-auto mt-3 mb-3  p-2 '>
            <h1 className=' text-center mb-6 text-2xl uppercase'>Login Account </h1>
            <Input value={ input.email } name='email' onChange={ (e) => HandlerOnchange(e) } size='large' type="email" className='mt-2' placeholder='Enter email' />
            <Input value={ input.password } name='password' onChange={ (e) => HandlerOnchange(e) } size='large' type="password" className='mt-2' placeholder='Password' />
            <Button type="primary" onClick={ handleSubmit } size='large' className=' mt-3 w-[100%]'>Login Account</Button>

            <p className=' mt-10 flex'><span className=' text-gray-500'>Don't have an account? </span><li style={ { listStyle: "none" } } className=' ml-3 text-blue-500 cursor-pointer' onClick={ () => router.push('/dashboard/signUp') }> Sign up</li></p>
        </div>
    );
};

export default Login;
