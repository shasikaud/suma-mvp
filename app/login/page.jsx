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
            redirect:false
        })

        if (res.error) {
            console.log('invalid credentials');
            alert('Invalid username or password!');
            return; 
        }
        redirect('/');
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
        <div className="flex p-4 m-4 bg-blue-100 text-sky-400">
        <form onSubmit={submitForm} className="flex flex-row gap-2">
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
            <button type="submit" onClick={submitForm}>Login</button>
            <Link href='/register'>Register</Link>
        </form>
        </div>
    )
}

export default LoginForm