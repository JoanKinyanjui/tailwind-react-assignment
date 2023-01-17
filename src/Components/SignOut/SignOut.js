import { Button, Divider } from '@mui/material'
import React from 'react';
import "./SignOut.css";
import { useLocation,Link } from "react-router-dom";


function SignOut() {
  const location = useLocation();
const data = location.state?.object;
const image = location.state?.image;
console.log(data,image)
  return (
   <div className='signout-main w-screen h-screen bg-neutral-100 '>
        
    <div className='signout-card absolute r-0 md:right-16 bg-white rounded-lg py-8 px-12'>
          <div className='grid place-content-center py-4'><img src={image} className=' signout-img'/></div>
          <div><p className='text-stone-700 text-lg'>{data}</p></div>
          <div className='pb-2'><p className='text-neutral-400 font-light'>Sincere@april.biz</p></div>
          <div>
            <ul>
                <li className='flex px-4 py-2 border-t border-gray-300 '><img className=' signout-account-options rounded-full' src="/images/girl.jpg"/> <p className='grid place-content-center ml-4 text-zinc-900 font-light text-sm' >Clementine Bauch</p></li>
                <li className='flex py-2 px-4 border-t border-gray-300 '><img className='signout-account-options rounded-full' src="/images/girl.jpg"/>  <p className='grid place-content-center ml-4 text-zinc-900 font-light text-sm' >Patricia Lebsack</p></li>
            </ul>
          </div>
          <Link to='/'><div className='py-1'><button className='signout-btn bg-red-500 py-1  px-4 rounded-full text-white '>Sign Out</button></div></Link>
    </div>
        
    </div>
  )
}

export default SignOut