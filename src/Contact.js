import React, { useState } from 'react'
import spacejoy from "../src/images/spacejoy.jpg";
import untitled from "../src/images/Untitled.jpg";
import { Link } from 'react-router-dom';


function Contact() {
  const [email,setEmail]= useState('')
  const Savechange =()=>{
    return <p>wabon</p>
  }
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
 <div className='cease'>
 <p className="jack">COLE ESSENCE</p>
<p className="vibe">The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us)</p>
<p className="Gunna">Quick Links</p>
<Link className="cut">Room booking</Link>
<Link className="hen">Rooms</Link>
<Link className="cow">Contact</Link>
<Link className="dog">Explore</Link>
<p className="bad">Company</p>
<Link className="city">Privacy policy</Link>
<Link className="bat">Refund policy</Link>
<Link className="yah">F.A.Q</Link>
<Link className="king">About</Link>
<p className="queen">Social Media</p>
<Link className="prince">Facebook</Link>
<Link className="art">Twitter</Link>
<Link className="sweet">Instagram</Link>
<Link className="salt">LinkedIn</Link>
<p className="girl">Newsletter</p>
<p className="drink">Kindly subscribe to our newsletter to get latest deals on our rooms and vacation discount.</p>
<input value={email}
       type="text"
       name="Email"
       onChange={Savechange}
       placeholder="enter email "
       className="new"
 />
<button className='sky'>Subscribe</button>
 </div>
      
    </div>
  
    
  )
}

export default Contact
