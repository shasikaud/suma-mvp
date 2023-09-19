'use client'

import Link from "next/link";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

const LoginForm = () => {

    const { data: session } = useSession();
    if (session) redirect('/');

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const loginEnabled = formData.username !== '' && formData.password !== ''

    const router = useRouter();

    const submitForm = async(e) => {
        e.preventDefault();
        setFormData({
        username: '',
        password: ''
        })

        try {
        const res = await signIn("credentials", {
            username: formData.username, 
            password: formData.password,
            redirect:false,
            fallback:'/dashboard'
        })

        if (res.error) {
            console.log('invalid credentials');
            alert('Invalid username or password!');
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
        <div className="flex p-4 m-4 bg-blue-100 text-slate-500">
            <form onSubmit={submitForm} className="flex flex-row  justify-center gap-2">

                <input 
                    type='text' 
                    placeholder="Username" 
                    name="username"
                    value={formData.username}
                    onChange={e => updateForm(e.target.name, e.target.value)}
                />

                <input 
                    type="password" 
                    placeholder="Password" 
                    name="password"
                    value={formData.password}
                    onChange={e => updateForm(e.target.name, e.target.value)}
                />

                <button 
                    type="submit" 
                    onClick={submitForm} 
                    disabled={!loginEnabled}
                    className={loginEnabled ? "border-green-300 bg-green-100 px-2" : "border-slate-50 bg-slate-300 px-2 text-slate-50"}
                >
                    Login
                </button>

                <Link href='/register' className="border-orange-300 bg-orange-100 px-2">Register</Link>
            </form>
        </div>
    )
}

export default LoginForm