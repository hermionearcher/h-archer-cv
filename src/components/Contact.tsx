import React, { useState, useRef } from 'react';
// import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef(null)
    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     emailjs.sendForm('service_6wd1e49', 'template_de8kw9l', form.current, 'ezj4Fc7KhnYynEBlJ')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     e.target.reset()
    // }
    return (
        <section className="section--page" id="contact">
            <h2>Contact Form</h2>
            <div className='contact--container'>
                <form ref={form} className='form--control'>
                    <span>To attach files please share a link in your message</span>
                    <input type="text" placeholder="Your Name *" name="user_name" required />
                    <input type="email" placeholder="Your email address *" name="user_email" required />
                    <input type="text" placeholder="Subject (optional)" name="subject" />
                    <textarea placeholder="Your message *" name="message" required ></textarea>
                    <button type='submit' className='card--techstack btn'>Send Message</button>
                    {/* <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span> */}
                </form>
            </div>
        </section>
    );

}

export default Contact