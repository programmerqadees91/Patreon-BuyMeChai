"use client"
import useSWR from 'swr'
import React, { useState,useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
        if (!session) {
            router.push("/login")
        }
    }, [router,session])

    const handlechange=(e) => {
      setform=({...form,[e.target.name]:e.target.value})
    }
    return  (
        <div className="container mx-auto px-5">
            <h1 className="text-3xl font-bold text-center ">Welcome To YourDashboard</h1>
            <form className="max-w-2xl mx-auto">
                <div className="my-2">
                 {/* input for name */}
                    <label htmlFor="name" className="block">Name</label>
                    <input type="text" name="name" id="name" className="border border-slate-300 rounded w-full" onChange={handlechange} />
                </div>
                <div className="my-2">
                    {/* input for email */}
                    <label htmlFor="email" className="block">Email</label>
                    <input type="email" name="email" id="email" className="border border-slate-300 rounded w-full" onChange={handlechange} />
                </div>
                <div className="my-2">
                    {/* input for password */}
                    <label htmlFor="password" className="block">Password</label>
                    <input type="password" name="password" id="password" className="border border-slate-300 rounded w-full" onChange={handlechange} />
                </div>
                <div className="my-2">
                    {/* input for confirm password */}
                    <label htmlFor="confirmPassword" className="block">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" className="border border-slate-300 rounded w-full" onChange={handlechange} />
                </div>

                <div className="my-2">
                    {/* input for profile pictutre for input type text */}
                    <label htmlFor="profilePicture" className="block">Profile Picture</label>
                    <input type="text" name="profilePicture" id="profilePicture" className="border border-slate-300 rounded w-full" onChange={handlechange} />
                    </div>

                <div className="my-2">
                    {/* input for username */}
                    <label htmlFor="username" className="block">Username</label>
                    <input type="text" name="username" id="username" className="border border-slate-300 rounded w-full" onChange={handlechange} />
                    </div>

                <div className="my-2">
                    {/* input for cover picture */}
                    <label htmlFor="coverPicture" className="block">Cover Picture</label>
                    <input type="text" name="coverPicture" id="coverPicture" className="border border-slate-300 rounded w-full" onChange={handlechange} />
                    </div>
                    <div className="my-2">
                        {/* input for razor pay credentials */}
                        <label htmlFor="razorpay" className="block">Razorpay Credentials</label>
                        <input type="text" name="razorpay" id="razorpay" className="border border-slate-300 rounded w-full" onChange={handlechange} />  
                    </div>
            </form>


        </div>
    )
}
export default Dashboard   
    

   