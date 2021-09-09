import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Button, Modal } from 'react-bootstrap'
import { useState } from 'react'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import './Footer.css'

import mustachioLogo1 from '../../images/mustachio_logo_2_white.png'

const socMedHandles = {
    fb: "https://facebook.com/mustachioverse",
    ig: "https://instagram.com/mustachioverse",
    discord: "https://discord.gg/rfypRx4cjh",
    twitter: "https://twitter.com/mustachioverse",
}

function Footer() {
    const [emailAdd, setEmailAdd] = useState("")
    const [emailAddErr, setEmailAddErr] = useState("")

    const [showSubscribed, setShowSubscribed] = useState(false);
    const handleCloseSubscribed = () => setShowSubscribed(false);
    const handleShowSubscribed = () => setShowSubscribed(true);
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const handleCloseErrorEmail = () => setShowErrorEmail(false);
    const handleShowErrorEmail = () => setShowErrorEmail(true);

    const submitForm = (e) => {
        e.preventDefault()

        let re = /^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i;
    
        if (re.test(emailAdd)) {
            axios.post('https://ownly.tk/api/store-mustachio-subscriber', {email_address: emailAdd}).then(res => {
                document.getElementById("emailAdd").value = ""
                setEmailAdd("")
                handleShowSubscribed()
            })
        } else {
            handleShowErrorEmail()
        }
    }

    return (
        <footer className="footer">
            <div className="container">
                <hr className="footer-line" />
                <div className="row mx-0 py-5 align-items-center footer-content">
                    <div className="col-12 col-lg-4">
                        <div className="email-container">
                            <p className="text-white text-lg font-andes-med-italic mb-3">JOIN THE OWNLY VIP LIST</p>
                            <form onSubmit={submitForm}>
                                <div className="input-group">
                                    <input type="email" name="emailAdd" id="emailAdd" className="form-control font-andes" placeholder="Email Address" aria-label="Email Address" onChange={(e) => setEmailAdd(e.target.value)} />
                                    <button className="btn btn-custom-2 font-w-hermann w-hermann-reg" type="submit" id="footer-btn">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 text-center">
                        <img className="w-60" src={mustachioLogo1} alt="logo" />
                    </div>
                    <div className="text-center col-lg-4 col-sm-12 col-12">
                        <div className="d-flex justify-content-around">
                            <a href={socMedHandles.fb} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-white footer-icons" color="white" size="2x" icon={faFacebook} />
                            </a>
                            <a href={socMedHandles.ig} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-white footer-icons" color="white" size="2x" icon={faInstagram} />
                            </a>
                            <a href={socMedHandles.discord} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-white footer-icons" color="white" size="2x" icon={faDiscord} />
                            </a>
                            <a href={socMedHandles.twitter} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon className="text-white footer-icons" color="white" size="2x" icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-last"></div>

            {/* Modal for successful subscription */}
            <Modal show={showSubscribed} onHide={handleCloseSubscribed} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                    </div>
                    <p className="text-center font-andes text-lg">Thank you for subscribing!</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseSubscribed}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> 

            {/* Modal for error in email */}
            <Modal show={showErrorEmail} onHide={handleCloseErrorEmail} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                    </div>
                    <p className="text-center font-andes text-lg">Please provide a valid email address and try again.</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseErrorEmail}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal> 
        </footer>
    )
}

export default Footer