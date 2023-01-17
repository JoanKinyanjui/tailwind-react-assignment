import React from 'react';
import "../Posts/Posts.css";
import "../ProfileDetails/ProfileDetails.css"
import { Divider } from '@mui/material';

function Gallery({object}) {
  return (
<div>
<div className=' posts-main h-full w-full '>
    <div className='profile flex justify-between place-items-center border-b py-12' >
    <div className='text-gray-700 text-lg'>Gallery</div>
    <div className=' text-gray-700  text-lg flex place-items-center'><img src={object.profilepicture} className='profile-img rounded-full mr-1'/>{object.name}</div>
    </div>

    <Divider  className='profile-divider w-full '/>

</div>

<div className='coming-soon-div grid place-content-center'>
<p className='text-8xl text-neutral-200 font-extrabold' >Coming Soon</p>
</div>
</div>
  )
}

export default Gallery