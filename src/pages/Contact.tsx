import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Snackbar } from '@material-ui/core'
import { AlertTitle } from '@material-ui/lab'
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert'
// import { CSSTransition } from 'react-transition-group'
import '../styles/pages/contact.scss'

const Contact = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [sending, setSending] = useState<boolean>(false)
    const [success, setSuccess] = useState<boolean>(false)
    const [failed, setFailed] = useState<boolean>(false)
    
    const handleClose = (e: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setSuccess(false)
        setFailed(false)
    };

    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
        props,
        ref,
    ) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
    });

    const sendEmail = (e:any) => {
        e.preventDefault()
        setSending(true)

        emailjs.sendForm(
            'service_86n7yd8', 
            'contact_form', 
            e.target, 
            'rzyEjNXUjzaT97ZQ2'
        )
        .then(res => {
            setSuccess(true)
            setName('')
            setEmail('')
            setNumber('')
            setMessage('')
            setSending(false)
        })
        .catch(error => {
            setSending(false)
            setFailed(true)
            setSuccess(false)
        })
    } 

    return(
        <div id="contact">
            <div className="contact-container">
                <h2>Contact Me</h2>
                <p>I'm open to opportunities(jobs and internships) to work and improve my skills. Also, you can reach out to me on any of the mentioned media for collaboration.</p>
                <div className='media'>
                    <a href="https://github.com/Meekunn/" target="_blank" rel="noreferrer" style={{backgroundColor: "rgb(51, 51, 51)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                        </svg>
                    </a>
                    <a href='https://wa.link/lpzl3e' target="_blank" rel="noreferrer" style={{backgroundColor: 'rgb(37, 211, 102)'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/adedamola-orofin/" target="_blank" rel="noreferrer" style={{backgroundColor: "rgb(14, 118, 168)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                        </svg>
                    </a>
                    <a href="mailto:orofinadedamola@gmail.com" target="_blank" rel="noreferrer" style={{backgroundColor: "rgb(234, 67, 53)"}} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/>
              rel="noreferrer"           </svg>
                    </a>
                    <a href="https://stackoverflow.com/users/15853307/orofin-adedamola" target="_blank" rel="noreferrer" style={{backgroundColor: "rgb(239, 130, 54)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"/>
                        </svg>
                    </a>
                </div>
                <div className="form">
                    <h3>Get In Touch</h3>
                    <form onSubmit={sendEmail}>
                        <input
                            className='input' 
                            required
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder='Full Name'
                            value={name}
                            onChange={(e)=>{setName(e.target.value)}}
                        /><br/>
                        <input
                            className='input' 
                            required
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder='Email'
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                        /><br/>
                        <input
                            className='input' 
                            type="text" 
                            name="number" 
                            id="phone_number" 
                            placeholder='Phone Number'
                            value={number}
                            onChange={(e)=>{setNumber(e.target.value)}} 
                        /><br/>
                        <textarea 
                            required
                            name="message" 
                            id="" 
                            cols={20} 
                            rows={4}
                            placeholder='Enter Message Here...'
                            value={message}
                            onChange={(e)=>{setMessage(e.target.value)}}>
                        </textarea><br/>
                        <input 
                            type="submit" 
                            value="SEND" 
                            className= {sending ? 'disabled' : 'submit'}
                        />
                    </form>
                    {success && (
                        <Snackbar 
                        open={success} 
                        autoHideDuration={10000} 
                        onClose={handleClose}
                        >
                            <Alert onClose={handleClose} severity="success" >
                                <AlertTitle>Sent</AlertTitle>
                                Message Sent Successfully!
                            </Alert>
                        </Snackbar>
                    )}
                    {failed && (
                        <Snackbar 
                        open={failed} 
                        autoHideDuration={10000} 
                        onClose={handleClose}
                        >
                            <Alert onClose={handleClose} severity="error" >
                                <AlertTitle>Failed</AlertTitle>
                                An error occured!
                            </Alert>
                        </Snackbar>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact