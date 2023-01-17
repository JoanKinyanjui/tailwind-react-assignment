import React from 'react';
import './ProfileDetails.css';
import Divider from '@mui/material/Divider';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function ProfileDetails({object}) {
    console.log(object)
  return (
<div className='profile-details-main mt-2 grid place-content-center'>

<div className='profile flex justify-between place-items-center border-b py-8' >
    <div className='text-gray-700 text-lg'>Profile</div>
<Link to="/signout"  state={{ object: object.name,image:object.profilepicture }}   ><div className=' text-gray-700  text-lg flex place-items-center'><img src={object.profilepicture} className='profile-img rounded-full mr-1'/>{object.name}</div></Link>
</div>
{/* <Divider  className='profile-divider w-full '/> */}

<div className='profile-details mt-9 flex place-content-center'>
{/* <Grid maxWidth='xl'> */}
<div className='profile-details-one'>
    <div><img className='rounded-full profile-details-image mx-auto'  src={object.profilepicture} /></div>
    <div className='py-2 text-l text-xl'>
        <p className='text-gray-700'>{object.name}</p>
        <div className='flex place-content-center'>
        <div className='text-base lg:text-xl md:text-lg'>
<ul className='text-gray-500 w-full grid pace-content-start '>
    <li className='py-1 flex justify-end'>Username :</li>
    <li className='py-1 flex justify-end'>email :</li>
    <li  className='py-1 flex justify-end'>Phone :</li>
    <li  className='py-1 flex justify-end'>Website :</li>
</ul>
        </div>
        <div className='text-base lg:text-xl md:text-lg'>
<ul className='text-gray-700  grid justify-content-end'>
    <li  className='py-1 flex justify-content-start pl-2'>{object.username}</li>
    <li  className='py-1 flex justify-content-start pl-2'>{object.email}</li>
    <li  className='py-1 flex justify-content-start pl-2'>{object.phone}</li>
    <li  className='py-1 flex justify-content-start pl-2'>{object.website}</li>
</ul>
        </div>
        </div>
    </div>
    
    <div className='py-2'>
        <p className='text-gray-500 py-2  text-xl border-t w-5/6 mx-auto'>Company</p>
    <div className='flex place-content-center '>
        <div className='text-base lg:text-xl md:text-lg'>
<ul className='text-gray-500 '>
    <li  className='py-1 flex justify-end'>Name :</li>
    <li  className='py-1 flex justify-end'>catchphrase :</li>
    <li  className='py-1 flex justify-end'>Bs :</li>
  
</ul>
        </div>
        <div className='text-base lg:text-xl md:text-lg'>
<ul className='text-gray-700 '>
    <li  className='py-1 flex justify-content-start pl-2'>{object.company.name}</li>
    <li  className='py-1 flex justify-content-start pl-2 '>{object.company.catchPhrase}</li>
    <li  className='py-1 flex justify-content-start pl-2'>{object.company.bs}</li>
   
</ul>
        </div>
        </div>
    </div>
    </div>
{/* </Grid> */}
    <div className='border border-gray-200'></div>
    <div className='profile-details-two'>
    <div className='pb-4'>
        <p className='flex place-content-start ml-4 text-gray-500 py-2  text-xl  ml-0 md:ml-16 lg:ml-36'>Address :</p>
    <div className='flex place-content-center'>
        <div className='text-base lg:text-xl md:text-lg'>
<ul className='text-gray-500 '>
    <li  className='py-1 flex justify-end'>Street :</li>
    <li  className='py-1 flex justify-end'>Suite :</li>
    <li  className='py-1 flex justify-end'>City :</li>
    <li  className='py-1 flex justify-end'>ZipCode:</li>
  
</ul>
        </div>
        <div className='text-base lg:text-xl md:text-lg'>
<ul className='text-gray-700  '>
    <li  className='py-1 flex justify-content-start pl-2'>{object.address.street}</li>
    <li  className='py-1 flex justify-content-start pl-2'>{object.address.suite}</li>
    <li  className='py-1 flex justify-content-start pl-2'>{object.address.city}</li>
    <li  className='py-1 flex justify-content-start pl-2'>{object.address.zipcode}</li>
   
</ul>
        </div>
        </div>
    </div>
        <div className='block'>
           <div className='flex place-content-center'> <img className='address-image rounded-md ' src='/images/map.jpg'/></div>
            <div className='flex text-xs  place-content-center lg:place-content-end text-zinc-400 pt-2'>
              Lat:  <p className='mr-2 text-zinc-700 text-sm'>{object.address.geo.lat}</p>
              Long:  <p className='ml-2 text-zinc-700 text-sm'>{object.address.geo.lng}</p>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default ProfileDetails;