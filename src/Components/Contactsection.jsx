import { section } from 'framer-motion/client'
import { useRef } from 'react'
import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import cn from '../lib/utils'
import React from 'react'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';

import { EmailJSResponseStatus } from '@emailjs/browser'




const Contactsection = () => {

    const form = useRef(); // useRef to point to form element

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xuu8apg',    // Replace with your EmailJS service ID
        'template_ov951bd',   // Replace with your EmailJS template ID
        form.current,
        'JwVjZDnzNsgRNcy3I'     // Replace with your EmailJS public key
      )
      .then(
        (result) => {
           Swal.fire({
            title: 'Message Sent!',
            text: 'Thanks for contacting me. I will get back to you soon.',
            icon: 'success',
            confirmButtonText: 'OK',
            background: '#1a1a1a',
            color: '#fff'
          });
            form.current.reset();
        },
        (error) => {
            
         Swal.fire({
            title: 'Oops!',
            text: 'Something went wrong. Please try again.',
            icon: 'error',
            confirmButtonText: 'OK',
            background: '#1a1a1a',
            color: '#fff'
          });
        }
      );


  };



  return <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
    <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
            Get In <span className='text-primary'>Touch</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Have a project in mind or just want to say hello? I’d love to connect! Whether it’s collaboration, freelance work, or a tech discussion, feel free to reach out — let’s build something amazing together.

        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div className='space-y-8'>
                <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                <div className='space-y-6 justify-center'>
                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Mail className='text-primary h-6 w-6'/>{" "}
                        </div>
                        <div>
                            <h4>Email</h4>
                            <a href="souravkumar152004@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                                souravkumar152004@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <Phone className='text-primary h-6 w-6'/>{" "}
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <a href="tel:9873386616" className='text-muted-foreground hover:text-primary transition-colors'>
                                9873386616
                            </a>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4'>
                        <div className='p-3 rounded-full bg-primary/10'>
                        <MapPin className='text-primary h-6 w-6'/>{" "}
                        </div>
                        <div>
                            <h4>Location</h4>
                            <a  className='text-muted-foreground hover:text-primary transition-colors'>
                                Faridabad,Haryana
                            </a>
                        </div>
                    </div>
                </div>
                <div className='pt-8'>
                    <h4 className='font-medium mb-4'>Connect With Me</h4>
                    <div className='flex space-x-4 justify-center'>
                        <a href='www.linkedin.com/in/souravkumar15' target='_blank'><Linkedin/></a>
                        <a href='https://www.instagram.com/kumarsourav.15/?next=%2F&hl=en'target='_blank'><Instagram/></a>
                        <a href='#'target='_blank'><Twitter/></a>
                    </div>
                </div>
            </div>


            <div className='bg-card p-8 rounded-lg shadow-xs'>
                <h3 className='text-2xl font-semibold mb-6 '>Send a Message</h3>

                <form  ref={form} onSubmit={sendEmail} className='space-y-6'>
                    <div>
                        <label htmlFor='name' className='block text-sm font-medium mb-2 '>Your Name</label>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary'
                        placeholder='sourav kuamr....'
                        />
                    </div>

                     <div>
                        <label htmlFor='email' className='block text-sm font-medium mb-2 '>Your Name</label>
                        <input
                        type="text"
                        id="Email"
                        name="email"
                        required
                        className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary'
                        placeholder='Shyam@gmail.com'
                        />
                    </div>

                     <div>
                        <label htmlFor='message' className='block text-sm font-medium mb-2 '>Your Message</label>
                        <textarea
                        id="message"
                        name="message"
                        required
                        className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-primary'
                        placeholder='hi you want to connect with me ?'
                        />

                    </div>
                  <button type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2",

                  )}>
                    Send Message
                <Send size={16}/>
                  </button>
                  
                </form>
            </div>
        </div>
    </div>
  </section>
}

export default Contactsection