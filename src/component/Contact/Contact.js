import React from 'react'
import  './Contact.css'
import contactimage from '../../Assets/contact us.jpg';
import Header from '../Homepage/Header/Header'
import Contactcard from './Contactcard/Contactcard';
import Submit from './Submit/Submit';
function Contact() {
  return (
    <div>
        <Header/>
    <div className='contactcontainer'>
        <div className='contact-item'>
        <div className='all-contact'>
            <h1 className='con-text'>Get in touch</h1>
            <img src={contactimage} alt='' className='contimage'/>
                <div className='socialmedia-container'>
                    <Contactcard/>
                    <Submit/>
        </div>
        </div>
        </div>
        </div>
        </div>
      
  )
}

export default Contact