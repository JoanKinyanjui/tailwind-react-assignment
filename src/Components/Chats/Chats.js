import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import {users} from '../users';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import "./Chats.css"

function Chats() {
  return (
    <Accordion className='accordion rounded-t-xl text-white'>
    <Accordion.Item eventKey="0" className='border-none  rounded-t-xl'>
      <Accordion.Header className='bg-blue-600 rounded-t-xl  text-white'>
        <div className='text-white'>
        <ChatBubbleOutlineIcon className='text-white' /> Chats
        </div>
      </Accordion.Header>
      <Accordion.Body className='bring'>
        <ul>
        <li className='flex justify-between' >
         <div className='flex place-content-center'> <img src="/images/girl.jpg" className='w-4 md:w-8 h-4 md:h-8 rounded-full'/><p className='ml-1  text-sm font-light'>Patricia Lebsack</p></div>
         <div className='bg-gray-500 w-2 h-2 rounded-full'></div>
         </li>

        <li className='flex justify-between' >
         <div className='flex place-content-center'> <img src="/images/girl.jpg" className='w-4 md:w-8 h-4 md:h-8 rounded-full'/><p className='ml-1 text-sm font-light'>Ervin Howell</p></div>
         <div className='bg-green-600 w-2 h-2 rounded-full'></div>
        </li>

        <li className='flex justify-between' >
         <div className='flex place-content-center'> <img src="/images/girl.jpg" className='w-4 md:w-8 h-4 md:h-8 rounded-full'/><p className='ml-1  text-sm font-light'>Clementine Bauch</p></div>
         <div className='bg-gray-500 w-2 h-2 rounded-full'></div>
        </li>

        <li className='flex justify-between' >
         <div className='flex place-content-center'> <img src="/images/girl.jpg" className='w-4 md:w-8 h-4 md:h-8 rounded-full'/><p className='ml-1 text-sm font-light'>Ervin Howell</p></div>
         <div className='bg-green-600 w-2 h-2 rounded-full'></div>
        </li>
        <li className='flex justify-between' >
         <div className='flex place-content-center'> <img src="/images/girl.jpg" className='w-4 md:w-8 h-4 md:h-8 rounded-full'/><p className='ml-1  text-sm font-light'>Patricia Lebsack</p></div>
         <div className='bg-gray-500 w-2 h-2 rounded-full'></div>
        </li>

        <li className='flex justify-between' >
         <div className='flex place-content-center'> <img src="/images/girl.jpg" className='w-4 md:w-8 h-4 md:h-8 rounded-full'/><p className='ml-1  text-sm font-light'>Dennis Schulist</p></div>
         <div className='bg-green-600 w-2 h-2 rounded-full'></div>
        </li>

        <li className='flex justify-between' >
         <div className='flex place-content-center'> <img src="/images/girl.jpg" className='w-4 md:w-8 h-4 md:h-8 rounded-full'/><p className='ml-1  text-sm font-light'>Glenna Reichert</p></div>
         <div className='bg-green-600 w-2 h-2 rounded-full'></div>
        </li>
          </ul>
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}

export default Chats