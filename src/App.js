import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './App.css'
 
function App() {
    const socMedHandles = {
        fb: "https://facebook.com/mustachioverse",
        ig: "https://instagram.com/mustachioverse",
        discord: "https://discord.gg/rfypRx4cjh",
        twitter: "https://twitter.com/mustachioverse",
    }

    return (
        <div className="app">
            <div className="app-back-arrow">
                <a href="https://mustachioverse.com" className="text-decoration-none" title="Go back to Mustachio Website">
                    <FontAwesomeIcon color="white" size="2x" icon={faArrowLeft} />
                    <span className="app-back-arrow-text text-white font-w-hermann w-hermann-semibold">Back</span>
                </a>
            </div>
            <div className="app-next-arrow">
                <span className="app-next-arrow-text chapter text-white text-2xl font-w-hermann w-hermann-heavy">Chapter 1: The Inception</span>
                <span className="app-next-arrow-text subtitle text-white font-w-hermann w-hermann-semibold d-none d-sm-inline-block">Release Date: Sept. 13, 2021 - 9:00PM SGT</span>
                <span className="app-next-arrow-text subtitle text-white font-w-hermann w-hermann-semibold d-inline-block d-sm-none">Release Date: Sept. 13, 2021<br />9:00PM SGT</span>
                <FontAwesomeIcon color="white" size="2x" icon={faArrowRight} />
            </div>

            <div className="app-soc-med">
                <div className="left-soc d-flex justify-content-center w-100">
                    <a href={socMedHandles.fb} target="_blank" rel="noreferrer" className="d-inline-block" style={{marginRight: "4rem"}}>
                        <FontAwesomeIcon className="text-white footer-icons" color="white" size="2x" icon={faFacebook} />
                    </a>
                    <a href={socMedHandles.ig} target="_blank" rel="noreferrer" className="d-inline-block">
                        <FontAwesomeIcon className="text-white footer-icons" color="white" size="2x" icon={faInstagram} />
                    </a>
                </div>
                <div className="right-soc d-flex justify-content-center w-100">
                    <a href={socMedHandles.discord} target="_blank" rel="noreferrer" className="d-inline-block" style={{marginRight: "4rem"}}>
                        <FontAwesomeIcon className="text-white footer-icons" color="white" size="2x" icon={faDiscord} />
                    </a>
                    <a href={socMedHandles.twitter} target="_blank" rel="noreferrer" className="d-inline-block">
                        <FontAwesomeIcon className="text-white footer-icons" color="white" size="2x" icon={faTwitter} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default App
