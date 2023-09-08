import React, { useRef, useState } from 'react';
import "./Conatct.css"
import emailjs from 'emailjs-com';
import checklogo from "./checklogo.svg"

export default function Contact() {
    const form = useRef();
    //Use state hooks:
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [done, setDone] = useState(false)
    const [loader, setLoader] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_Gurdev', 'template_5jz77vb', form.current, 'H8vkd_gVpB4gRCw-_')
            .then((result) => {
                console.log(result.text);
                setEmail("");
                setName("");
                setMessage("");
                setDone(true);
                setLoader(true);
                setTimeout(() => {
                    setLoader(false);
                }, 3000)
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='contacts' to='contacts'>
            <div className="contacts-left">
                <span className='ContactsHeading1' >Get in touch</span>
                <span className='ContactsHeading2'>Contact me</span>
            </div>
            <div className="contacts-right">
                {done ? (

                    loader ? (
                    <div class="loader-container succefulMessage">
                        <div class="loader"></div>
                    </div>) : (
                        <div className='succefulMessage'>
                            <div className='Checklogo'>
                                <img className="logoImg" src={checklogo} alt="" width="200px" height="100px"></img>
                            </div>
                            <div>
                            <p style={{fontSize:'30px'}}>Message Sent Succefully</p>
                            <button className='button contactAgain' onClick={()=>{setDone(false)}}>Send again</button>
                            </div>
                            
                        </div>)

                )
                    : (<form className='contactsForm' ref={form} onSubmit={sendEmail}>
                        <input className="inputText" type='text' name="user_name" value={name} onChange={(e) => { setName(e.target.value) }} placeholder='Name'></input><br></br>
                        <input className="inputText" type='email' name="user_email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder='email'></input><br></br>
                        <textarea className="textArea" rows="7" name="message" value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder='message'></textarea>
                        <button type='submit' value="Send" className='button contactsbtn'>Submit</button>
                        <p style={{ color: '#3ca83' }}>{done && "Message Sent Succefully"}</p>
                    </form>)
                }
            </div>
        </div>);

}
