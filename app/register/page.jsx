'use client'

import React from "react"
import { getUserByEmail, registerUser } from "@/utils/apiCalls"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import LISTS from "@/utils/lists"
import LoadingScreen from "@/components/loading/loadingScreen"

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
        <div className="flex flex-col justify-center items-center w-screen bg-backgroundColor text-black min-h-screen overflow-y-auto">
          {/* SUMA LOGO */}
          <img src="../assets/suma-logo.svg" alt="SUMA Logo" className="mb-4 w-[200px]"/>
          
          <form onSubmit={submitForm} className="flex flex-col gap-2 m-4 p-4">

            {/* Sign in to SUMA title */}
            <h2 className="text-2xl font-semibold mb-6">Create an account</h2>

            <div className="flex flex-row gap-4">
              {/* First Name */}
              <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-sm font-medium mb-3">First name</label>
                  <input
                      id="firstName"
                      type='text' 
                      placeholder="First Name" 
                      name="firstName"
                      value={formData.firstName}
                      className="h-10 mb-4 border-gray-400 rounded-md border p-2 bg-backgroundColor"
                      onChange={e => updateForm(e.target.name, e.target.value)}
                  />
              </div>
    
              {/* Last Name */}
              <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-sm font-medium mb-3">Last name</label>
                  <input
                      id="lastName"
                      type='text' 
                      placeholder="Last Name" 
                      name="lastName"
                      value={formData.lastName}
                      className="h-10 mb-4 border-gray-400 rounded-md border p-2 bg-backgroundColor"
                      onChange={e => updateForm(e.target.name, e.target.value)}
                  />
              </div>
            </div>

            <label htmlFor="email" className="text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type='email' 
              placeholder="Your email address" 
              name="email"
              value={formData.email}
              className="h-10 mb-4 border-gray-400 rounded-md border p-2 bg-backgroundColor"
              onChange={e => updateForm(e.target.name, e.target.value)}
            />

            <label htmlFor="companyName" className="text-sm font-medium mb-1">Company name</label>
            <input 
              id="companyName"
              type='text' 
              placeholder="Company name" 
              name="companyName"
              value={formData.companyName}
              className="h-10 mb-4 border-gray-400 rounded-md border p-2 bg-backgroundColor"
              onChange={e => updateForm(e.target.name, e.target.value)}
            />

            <label htmlFor="registeredCountry" className="text-sm font-medium mb-1">Registered country</label>
            <select 
              id="registeredCountry"
              name='registeredCountry'
              className="h-10 mb-4 border-gray-400 rounded-md border p-2 bg-backgroundColor"
              onChange={e => {updateForm(e.target.name, e.target.value)}} 
              value={formData.registeredCountry}>
              {
                countries.map((country, index) => {
                  return (<option key={index}>{country}</option>)
                })
              }
            </select>

            <label htmlFor="password" className="text-sm font-medium mb-1">Password</label>
            <input
              id="password" 
              type="password" 
              placeholder="Password" 
              name="password"
              className="h-10 mb-4 border-gray-400 rounded-md border p-2 bg-backgroundColor"
              value={formData.password}
              onChange={e => updateForm(e.target.name, e.target.value)}
            />

            <label htmlFor="repeatPassword" className="text-sm font-medium mb-1">Repeat password</label>
            <input 
              id="repeatPassword"
              type="password" 
              placeholder="Repeat password" 
              name="repeatPassword"
              className="h-10 border-gray-400 rounded-md border p-2 bg-backgroundColor"
              value={formData.repeatPassword}
              onChange={e => updateForm(e.target.name, e.target.value)}
            />

            <button 
              type="submit" 
              onClick={submitForm} 
              className={`px-2 py-3 rounded-lg mt-8 font-medium text-white transition hover:bg-primaryHover cursor-pointer ${validEntries ? "border-primary bg-primary text-primary" 
                : "bg-primary"}`}
              disabled={!validEntries}
            >
              Create account
            </button>

            <div className="flex justify-center">
              <h1>Already have an account? <span> <Link href='/login' className="underline text-primary">Login</Link></span></h1>
            </div>
          </form>

        </div>
      )
}

export default RegisterForm