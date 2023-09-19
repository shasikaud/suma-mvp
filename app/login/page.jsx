'use client'

import Link from "next/link";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const LoginForm = () => {

    const { data: session } = useSession();
    if (session) redirect('/');

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const loginEnabled = formData.email !== '' && formData.password !== ''

    const submitForm = async(e) => {
        e.preventDefault();
        setFormData({
            email: '',
            password: ''
        })

        try {
        const res = await signIn("credentials", {
            email: formData.email, 
            password: formData.password,
            redirect:false,
            fallback:'/dashboard'
        })

        if (res.error) {
            console.log('invalid credentials');
            alert('Invalid email or password!');
            return; 
        }
        } catch (e) {
            console.log(`Sign in failed: ${e}`)
        }
    }

    const updateForm = (name, value) => {
        const data = { [name] : value };
        const updatedFormData = { ...formData, ...data }
        setFormData(updatedFormData);
    }

    return (
        <div className="flex justify-center items-center w-screen bg-orange-100 text-slate-500">
            <form onSubmit={submitForm} 
                className="flex flex-col content-center justify-center
                 w-60 gap-1 border-2 rounder-lg p-4 border-orange-300 rounded-lg">

                <input 
                    type='text' 
                    placeholder="Email" 
                    name="email"
                    value={formData.username}
                    className="h-8"
                    onChange={e => updateForm(e.target.name, e.target.value)}
                />

                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={formData.password}
                    className="h-8"
                    onChange={e => updateForm(e.target.name, e.target.value)}
                />

                <button 
                    type="submit" 
                    onClick={submitForm} 
                    disabled={!loginEnabled}
                    className={`px-2 h-8 rounded-lg ${loginEnabled ? "border-green-300 bg-green-100 " 
                    : "border-slate-50 bg-orange-200 px-2 text-slate-50 h-8"}`}
                >
                    Login
                </button>

                <Link href='/register' 
                    className="bg-orange-300 h-8 rounded-lg text-slate-50 text-center">
                    Register
                </Link>

            </form>
        </div>
    )
}

export default LoginForm