'use client'

import RegisterForm from "@/components/registerForm"
import { getServerSession } from 'next-auth';
import { redirect } from 'next/dist/server/api-utils';
import { authOptions } from "../api/auth/[...nextauth]/route";

const Register = async() => {
  return (
    <RegisterForm/>
  )
}

export default Register