import React from 'react'
import SigUp from './SignUp'
import Aboutus from './Aboutus'

export default function Homepage() {
  return (
    <>
    
    <div className='homepage'>
        <h1 className='check'>GB Events</h1>
        <p className='homepageText'>welcome to our home page we are here for online business </p>
         
    </div>
    <Aboutus />
    <SigUp />
    
    </>
    
  )
}
