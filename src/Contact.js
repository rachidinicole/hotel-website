import React, { useState } from 'react'
import spacejoy from "../src/images/spacejoy.jpg";
import untitled from "../src/images/Untitled.jpg";


function Contact() {
  const [email,setEmail]= useState('')
  return (
    <div>
      <img src={spacejoy}id='von'/>
      <img src={untitled}id='rich'/>
      <p className="slump">Contact us</p>  
      <p className='gleesh'>The elegant luxury bedrooms in this gallery showcase custom interior 
designs & decorating ideas. View pictures and find your
 perfect luxury bedroom design.</p>
<p className='stick'>FullNames</p>
 <input type='text'
        name='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='whole'
        placeholder='e.g Nicole Rachidi'/>
<p className='doodie'>Email</p>
<input type='text'
        name='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='boon'
        placeholder='rachidinicole1@gmail.com'/>
<p className='moonie'>Message</p>
<input type='text'
        name='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='moon'
        placeholder='message'/>
 
      
    </div>
  )
}

export default Contact
