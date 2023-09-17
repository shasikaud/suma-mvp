'use client'

import { getUserByUserName, registerUser } from "@/utils/apiCalls"
import { useState } from "react"
import { useRouter } from "next/navigation"

const RegisterForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

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
        <div className="flex justify-center p-4 bg-blue-100 text-sky-400 m-10">
          <form onSubmit={submitForm} className="flex flex-col gap-2 m-4 p-4">
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
            <button type="submit" onClick={submitForm}>Register</button>
          </form>
        </div>
      )
}

export default RegisterForm