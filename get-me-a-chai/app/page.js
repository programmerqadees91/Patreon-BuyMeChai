// "use client"
import Image from "next/image";
// import React from 'react'
// import { useSession, signIn, signOut } from "next-auth/react"
// import { useRouter } from 'next/navigation'

export default function Home() {
  //   const { data: session } = useSession()

  //   if(!session) {
  //  const router=useRouter()
  //  router.push("/login")
  // }
  return (
    <>

      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-4 ">
        <div className="font-bold flex gap-2 justify-center items-center text-5xl">Buy Me a Chai <span><img src="/tea.gif" width={88} alt="" /></span></div>
        <p>A crowdfunding platform for creators. Get funded by your fans and followers. Start now! </p>
        <div>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Read More</button>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h2 className="text-3xl font-bold text-center mb-14">Your Fans can buy you a Chai</h2>
        <div className="flex gap-5 justify-around ">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={100} src="/man.gif" alt="" />
            <p className="font-bold">Fans want to help </p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={100} src="/cmd.gif" alt="" />
            <p className="font-bold">Fans want to help </p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={100} src="/home.gif" alt="" />
            <p className="font-bold">Fans want to help </p>
            <p className="text-center">Your Fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10">
      </div>

      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/C4LBV38aqb0?si=SpgigI00Wln3oMyN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </>
  );
}
