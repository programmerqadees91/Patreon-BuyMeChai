import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative">
        <img className="object-cover w-full h-[350px]" src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/688268/8628ef60983c4806867cccd45545ce07/eyJ3IjoxNjAwLCJ3ZSI6MX0%3D/10.jpeg?token-time=1730678400&token-hash=FLx01wFQFz3GSFjaNmtjZSoez5G7Le1vb-ohwOgWXUk%3D" alt="" />
        <div className='profilepic absolute -bottom-20 right-[46%] border-2 border-white rounded-full'>
          <img width={150} heigth={150} className="rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5TFr2P4Shfl2xEc1R-nbZw_9DosQThOJYw&s" alt="" />
        </div>
      </div>
      <div className="info flex justify-center items-center my-24 flex-col gap-2">
        <div className="font-bold text-lg">
          @{params.username}

        </div>
        <div className="text-slate-400">
          Creating a podcast with ben avery, devan costa and jace avery
        </div>
        <div className="text-slate-400">
          8,769 members . 285 posts . $35,680/month
        </div>
        <div className="payment flex mt-11 gap-3 w-[80%]">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg p-8">
            {/* Show list of all supporters  */}
            <h2 className="text-2xl font-bold mb-3">Supporters</h2>
            <ul className="mx-5 text-lg">
              <li className="my-4 flex gap-2 items-center">
                <img width={33} src="/avatar.gif" alt="" />
                <span>
                  Qadees donated <span className="font-bold">$30</span> with a message "I Support You Bro With alots of ❤"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={33} src="/avatar.gif" alt="" />
                <span>
                  Qadees donated <span className="font-bold">$30</span> with a message "I Support You Bro With alots of ❤"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={33} src="/avatar.gif" alt="" />
                <span>
                  Qadees donated <span className="font-bold">$30</span> with a message "I Support You Bro With alots of ❤"
                </span>
              </li>
              <li className="my-4 flex gap-2 items-center">
                <img width={33} src="/avatar.gif" alt="" />
                <span>
                  Qadees donated <span className="font-bold">$30</span> with a message "I Support You Bro With alots of ❤"
                </span>
              </li>
            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg p-10">
            <h2 className="text-2xl font-bold mb-3">Make a Payment</h2>
            <div className="flex flex-col gap-2">
              {/* input for name and message */}
              <input type="text" name="" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Name" id="" />
              <input type="text" name="" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Message" id="" />



              <input type="text" name="" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter Amount" id="" />
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                <span class="w-full text-md font-bold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-slate-900 rounded-md group-hover:bg-opacity-0">
                  Pay
                </span>
              </button>
            </div>
            {/* or choose from these buttons */}
            <div className="flex gap-2 mt-5">
              <button className=" p-3 rounded-lg bg-slate-800">Pay $10</button>
              <button className=" p-3 rounded-lg bg-slate-800">Pay $20</button>
              <button className=" p-3 rounded-lg bg-slate-800">Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
