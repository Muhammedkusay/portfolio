import Input from './Input.jsx'
import Textarea from './Textarea.jsx'
import Title from './Title.jsx'
import ContactImg from './ContactImg.jsx'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import FormError from './FormError.jsx'

function Contact() {

    const form = useRef()
    const [errors, setErrors] = useState([])
    
    const sendEmail = (e) => {
        e.preventDefault()
        setErrors([])
        if(form.current.user_name.value.trim() == '') setErrors(prev => [...prev, "Name field is empty"])
        if(form.current.user_email.value.trim() == '') setErrors(prev => [...prev, "Email field is empty"])
        if(!isValidEmaild(form.current.user_email.value.trim())) setErrors(prev => [...prev, "Email is not valid"])
        if(form.current.subject.value.trim() == '') setErrors(prev => [...prev, "Subject field is empty"])
        if(form.current.message.value.trim() == '') setErrors(prev => [...prev, "Message field is empty"])
        
        // if(errors.length === 0) {
        //     emailjs.sendForm("service_69z2llc", "template_c1qb1gi", form.current, "R2dCDHA5MxaI0a5En")
        //             .then(() => {
        //                 alert('Email sent successfully')
        //                 form.current.reset()
        //             }, (error) => {
        //                 alert(`Error, could not send email: ${error.text || error.message}`)
        //             })
        // }
    }

    const isValidEmaild = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        return emailRegex.test(email)
    }

    return(
        <section id="contact" className='px-4 md:px-0 pt-16 mt-18 md:pt-18 md:mt-32'>
            <Title text={"Contact"} />
            <div className="w-full md:w-3/4 mx-auto mt-12 md:mt-28 flex flex-col md:flex-row gap-12 items-center justify-between">
                <form ref={form} onSubmit={sendEmail} className='w-full md:w-1/2'>
                    <Input label='Name' type='text' name='user_name' placeholder='Enter Your Name' />
                    <Input label='Email' type='email' name='user_email' placeholder='example@me.com' />
                    <Input label='Subject' type='text' name='subject' placeholder='Example Subject' />
                    <Textarea label='Message' name='message' placeholder='Enter Your Message' />
                    <Input type='submit' className='mt-4 py-1.5 cursor-pointer bg-indigo-500 text-white hover:bg-indigo-600 rounded-lg'/>
                    
                    {errors && errors.map((error, id) => <FormError key={id} message={error}/>)}
                    
                </form>
                <ContactImg />
            </div>
        </section>
    )
}

export default Contact