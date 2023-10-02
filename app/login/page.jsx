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
        <div className="flex justify-center items-center w-screen bg-backgroundColor text-black">
            <form onSubmit={submitForm} 
                className="flex flex-col content-center justify-center
                 w-[560px] gap-1 border-2 py-10 px-8 border-gray-400 rounded-xl">
                
                {/* SUMA LOGO */}
                <img src="../assets/suma-logo.svg" alt="SUMA Logo" className="mb-10 w-[100px]"/>

                {/* Sign in to SUMA title */}
                <h2 className="text-2xl font-semibold mb-6">Sign in to SUMA</h2>

                {/* EMAIL input field */}
                <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>
                <input
                    id="email"
                    type='text' 
                    placeholder="Email" 
                    name="email"
                    value={formData.username}
                    className="h-10 mb-4 border-gray-400 rounded-md border p-2 bg-backgroundColor"
                    onChange={e => updateForm(e.target.name, e.target.value)}
                />

                {/* Password input field */}
                <label htmlFor="password" className="text-sm font-medium mb-1">Password</label>
                <input 
                    id="password"
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={formData.password}
                    className="h-10 border-gray-400 rounded-md border p-4 bg-backgroundColor"
                    onChange={e => updateForm(e.target.name, e.target.value)}
                />

                <button 
                    type="submit" 
                    onClick={submitForm} 
                    disabled={!loginEnabled}
                    className={`text-white px-2 py-3 rounded-lg mt-8 font-medium ${loginEnabled ? "bg-primary hover:bg-primaryHover cursor-pointer" 
                    : "bg-black text-white cursor-default"}`}
                >
                    Sign in
                </button>

                <span className="mt-4 text-center">
                    Don't have an account? 
                    <Link href='/register' className="text-primary font-semibold ml-1 hover:underline">
                        Sign up
                    </Link>
                </span>


            </form>
        </div>
    )
}

export default LoginForm