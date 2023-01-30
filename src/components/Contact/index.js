import './contact.scss';


import { BsFillTelephoneFill } from "react-icons/bs";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { IoEarth } from "react-icons/io5";

export const Contact = () => {

    return (
        <div className="contact-container">
            <h2 className='services-header'>Services</h2>
            <div className="contact-wrapper">
                <h2 className='subHeader'>Have You Any Questions ?</h2>
                <p className='descr'>I'm at your service</p>
                <div className="contact-cards">
                    <div className="contact-card">
                        <p ><BsFillTelephoneFill className='contact-icon'/></p>
                        <p className="contact-title">Call Me On</p>
                        <p className="contact-info">+49 1771465002</p>
                    </div>
                    <div className="contact-card">
                        <p><ImLocation2 className='contact-icon'/></p>
                        <p className="contact-title">Home</p>
                        <p className="contact-info">Egon-Reiner Straße 19, Saarbrücken</p>
                    </div>
                    <div className="contact-card">
                        <p><MdEmail className='contact-icon'/></p>
                        <p className="contact-title">Email</p>
                        <p className="contact-info">eduard-lab@web.de</p>
                    </div>
                    <div className="contact-card">
                        <p><IoEarth className='contact-icon'/></p>
                        <p className="contact-title">Website</p>
                        <p className="contact-info">eddie-dv-project.com</p>
                    </div>
                </div>
                <div className="send-email">
                    <h2 className="subHeader">Send me an email</h2>
                    <p className="descr">I'm very responsive to messages</p>

                    <form className='form' action="submit">
                        <div className="nameEmailwrapper">
                            <input type="text" placeholder='Name'/>
                            <input type="email" placeholder='Email'/>
                        </div>
                        <input type="text" placeholder='Subject'/>
                        <textarea name="" rows='5' placeholder='Message'></textarea>
                        <button className='form-submit' type='submit'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}