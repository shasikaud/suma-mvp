'use client'

import { getUserByUserName, registerUser } from "@/utils/apiCalls"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

const RegisterForm = () => {

    const formObj = {

    } 

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        repeatPassword: ''
    })

    const validEntries = formData.username !== '' && 
                          formData.password !== '' &&
                          (formData.password === formData.repeatPassword)

    const router = useRouter();
    
    const submitForm = async(e) => {
        // console.log('submitting')
        e.preventDefault();
        const user = await getUserByUserName(formData.username);
        // console.log(`returned user ${user}`);
        setFormData({
          username: '',
          password: ''
      })
        if (user) {
          alert(`User already exists with username ${formData.username}`);
          return;
        }
        // console.log('Registering user.')
        const success = await registerUser(formData);
        if (success) router.push('/');
        if (!success) alert(`User registration failed, please retry or contact the team.`)
    }
    
      const updateForm = (name, value) => {
        const data = { [name] : value };
        const updatedFormData = { ...formData, ...data }
        setFormData(updatedFormData);
      }
    
      return (
        <div className="flex justify-center p-4 bg-blue-100 text-black-200 m-10">
          <form onSubmit={submitForm} className="flex flex-col gap-2 m-4 p-4">

            <div className="flex flex-row gap-2">
              <input 
                type='text' 
                placeholder="First Name" 
                name="firstName"
                value={formData.firstName}
                onChange={e => updateForm(e.target.name, e.target.value)}
              />
              <input 
                type='text' 
                placeholder="Last Name" 
                name="lastName"
                value={formData.LastName}
                onChange={e => updateForm(e.target.name, e.target.value)}
              />
            </div>

            <input 
              type='email' 
              placeholder="Your email address" 
              name="username"
              value={formData.username}
              onChange={e => updateForm(e.target.name, e.target.value)}
            />

            <input 
              type='text' 
              placeholder="Company name" 
              name="companyName"
              value={formData.companyName}
              onChange={e => updateForm(e.target.name, e.target.value)}
            />

            <input 
              type="password" 
              placeholder="Password" 
              name="password"
              value={formData.password}
              onChange={e => updateForm(e.target.name, e.target.value)}
            />

            <input 
              type="password" 
              placeholder="Repeat password" 
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={e => updateForm(e.target.name, e.target.value)}
            />

            <button 
              type="submit" 
              onClick={submitForm} 
              className={`border-2 rounded-sm ${validEntries ? "border-red-600 bg-red-100" : "bg-slate-300 text-slate-50"}`}
              disabled={!validEntries}
            >
              Register
            </button>

            <div className="flex justify-center">
              <h1>Already have an account? <span> <Link href='/login' className="underline">Login</Link></span></h1>
            </div>
          </form>

        </div>
      )
}

export default RegisterForm