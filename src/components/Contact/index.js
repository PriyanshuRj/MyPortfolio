// import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import Profile from '../../assets/images/portfoliopic.jpg'
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './index.scss'

const Contact = () => {
  // const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_clqcyvb',
        'template_5gqpwh4',
        form.current,
        "MOu_OwZCjgElKHMMX"
        
      )
      .then(
        (result) => {
          alert('Message successfully sent!');
          console.log(result.text);
          console.log("hi");
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="imageprofile">
          <img src={Profile} alt="dp" align="right" />
          <a href="https://drive.google.com/drive/u/0/folders/1JSNOayChxYbmDurSbAO2fYh5YznxClB4" target="_blank" rel="noreferrer"  className="flat-button" align="right">
            RESUME
          </a>
        </div>
        
        <div className="text-zone">
          <h1>
            Contact me
          </h1>
          <p id="para1">
          I am interested in any opportunity given to me in the field of Development or Machine Learning. However, if you have other
           requests or questions, don't hesitate to contact me using the below form either.

          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button1" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
       
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact