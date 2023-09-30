'use client'

import React from "react"
import { getUserByEmail, registerUser } from "@/utils/apiCalls"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import LISTS from "@/utils/lists"
import LoadingScreen from "@/components/loading/LoadingScreen"

const RegisterForm = () => {

    const countries = LISTS.COUNTRIES;

    const initialState = {
      firstName: '',
      lastName: '',
      companyName: '',
      registeredCountry: countries[0],
      email: '',
      password: '',
      repeatPassword: ''
    } 

    const [formData, setFormData] = useState(initialState);
    const [isLoading, setIsLoading] = useState(false);

    const validEntries = formData.firstName !== '' && 
                          formData.lastName !== '' &&
                          formData.companyName !== '' &&
                          formData.email !== '' &&
                          formData.password !== '' &&
                          (formData.password === formData.repeatPassword) 

    const router = useRouter();
    
    const submitForm = async(e) => {
      try {
          setIsLoading(true);
          e.preventDefault();
          const user = await getUserByEmail(formData.email);
          setFormData(initialState);
          if (user) {
            alert(`User already exists with email ${formData.email}`);
            setIsLoading(false);
            return;
          }
          const success = await registerUser(formData);
          if (success) router.push('/');
          setIsLoading(false);
          if (!success) alert(`User registration failed, please retry or contact the team.`)
      } catch(e) {
        console.log(e);
        setIsLoading(false)
      }
    }
    
      const updateForm = (name, value) => {
        const data = { [name] : value };
        const updatedFormData = { ...formData, ...data }
        setFormData(updatedFormData);
      }

      if (isLoading) return <LoadingScreen/>

      return (
        <div className="flex justify-center items-center w-screen bg-slate-50 text-slate-500">
          <form onSubmit={submitForm} className="flex flex-col gap-2 m-4 p-4 border-2 rounded-lg border-primary">

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
                value={formData.lastName}
                onChange={e => updateForm(e.target.name, e.target.value)}
              />
            </div>

            <input 
              type='email' 
              placeholder="Your email address" 
              name="email"
              value={formData.email}
              onChange={e => updateForm(e.target.name, e.target.value)}
            />

            <input 
              type='text' 
              placeholder="Company name" 
              name="companyName"
              value={formData.companyName}
              onChange={e => updateForm(e.target.name, e.target.value)}
            />

            <select 
              name='registeredCountry'
              onChange={e => {updateForm(e.target.name, e.target.value)}} 
              value={formData.registeredCountry}>
              {
                countries.map((country, index) => {
                  return (<option key={index}>{country}</option>)
                })
              }
            </select>

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
              className={`border-2 rounded-sm  text-slate-50 ${validEntries ? "border-primary bg-primary text-primary" 
                : "bg-slate-300"}`}
              disabled={!validEntries}
            >
              Register
            </button>

            <div className="flex justify-center">
              <h1>Already have an account? <span> <Link href='/login' className="underline text-primary">Login</Link></span></h1>
            </div>
          </form>

        </div>
      )
}

export default RegisterForm