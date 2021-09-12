import { useRef } from 'react'
import FlipPage from 'react-flip-page'
import './App.css'

// chapter 1
import chapter1Logo from './images/ch_1/page1-pic.png'
import firstPagePic from './images/ch_1/page2-pic.png'
import mustachioLogoFooter from './images/ch_1/mustachio-logo-book.png'
import mustachioLogo from './images/mustachio_logo_2_white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
 
function App() {
    let flipPage = useRef(null)

    const socMedHandles = {
        fb: "https://facebook.com/mustachioverse",
        ig: "https://instagram.com/mustachioverse",
        discord: "https://discord.gg/rfypRx4cjh",
        twitter: "https://twitter.com/mustachioverse",
    }
    
    return (
        <div className="app">
            <div className="container">
                <FlipPage
                    className="book"
                    showSwipeHint
                    uncutPages
                    orientation="horizontal"
                    animationDuration="1000"
                    pageBackground="transparent"
                    width="992"
                    ref={(component) => { flipPage = component }}
                >
                    <article className="page">
                        <div className="d-flex justify-content-around h-full">
                            <div className="w-2/4">
                                <div className="h-full d-flex flex-column justify-content-center" style={{position: "relative"}}>
                                    <div className="w-1/2 mx-auto mt-3 mb-2 animate-logo">
                                        <img className="w-100" src={mustachioLogo} alt="Mustachio Logo" />
                                    </div>
                                    <p className="text-center text-white text-4xl font-w-hermann w-hermann-reg mb-2">Presents...</p>
                                    <div className="d-flex justify-content-around ch-footer mb-3">
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
                            <div className="w-2/4 page-cover bg-white"></div>
                        </div>
                    </article>
                    <article className="page">
                        <div className="d-flex justify-content-around h-full">
                            <div className="w-2/4 bg-white"></div>
                            <div className="w-2/4 bg-white">
                                <div className="h-full d-flex flex-column justify-content-start" style={{position: "relative"}}>
                                    <div className="w-1/3 mx-auto mt-5 mb-5">
                                        <img className="w-100" src={chapter1Logo} alt="Chapter 1" />
                                    </div>
                                    <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 1</p>
                                    <h3 className="text-center font-w-hermann w-hermann-semibold">The Inception</h3>
                                    <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="page">
                        <div className="d-flex justify-content-around h-full">
                            <div className="w-2/4 bg-white">
                                <div className="h-full d-flex flex-column justify-content-start" style={{position: "relative"}}>
                                    <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>
                                    <div className="w-1/3 mx-auto mt-3 mb-4">
                                        <img className="w-100" src={firstPagePic} alt="Chapter 1" />
                                    </div>

                                    {/* Stanzas */}
                                    <div className="mb-3">
                                        <p className="text-center font-w-hermann w-hermann-semibold mb-0">
                                            <span className="text-5xl">O</span>, cried the angels with not a whisper heard
                                        </p>
                                        <p className="text-center font-w-hermann w-hermann-semibold mb-0">For the gods have bestowed tales in a land of few words</p>
                                    </div>
                                    <div className="mb-3">
                                        <p className="text-center font-w-hermann w-hermann-semibold mb-0">'Twas MustachioVerse, where all the Mustachios feasted</p>
                                        <p className="text-center font-w-hermann w-hermann-semibold mb-0">Realm to the secrets of the folklores and the many exploits ahead</p>
                                    </div>
                                    <div className="mb-3">
                                        <p className="text-center font-w-hermann w-hermann-semibold mb-0">One among these beings, fabled yet mysterious</p>
                                        <p className="text-center font-w-hermann w-hermann-semibold mb-0">How he sought the Grooming Kit, no Mustachio can ever deduce</p>
                                    </div>
                                    <div className="mb-3">
                                        <p className="text-center font-w-hermann w-hermann-semibold mb-0">The Prospector as we know him, valiant he may be</p>
                                        <p className="text-center font-w-hermann w-hermann-semibold mb-0">Bearer of the Golden Mustache, a legend - we all agree</p>
                                    </div>
                                    <div className="mb-3">
                                        <p className="text-center font-w-hermann w-hermann-semibold mb-0">Til one rainy morning, when the wind blew hard with interest</p>
                                        <p className="text-center font-w-hermann w-hermann-semibold mb-0">The smell of pine cones on the wet streets signaled ready for a quest</p>
                                    </div>

                                    <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">3</p>
                                </div>
                            </div>
                            <div className="w-2/4 bg-white">
                                <div className="h-full d-flex flex-column justify-content-start" style={{position: "relative"}}>
                                    <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>

                                    {/* Stanzas */}
                                    <div className="mt-3">
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Abracadoobie with his staff, a deceitful distraction</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Heard an echo from a distance, smirking, ready for some action</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Alas! The old Bigode Cave glowed bright like fire in the winter</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">As Bandwip showed deep interest in treasures and adventures</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Even Cairo, the great thief, lighted up like a candle in the darkness</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">With a snigger he said, "Ready or not, the next legend is upon us."</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Eyes glazing as Berry, the high-pitched wild berry warrior</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Exclaimed "The coast is clear, now we’re ready for some more!"</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">And so the young Mustachios went to see what the glow is all about</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">When a torn up journal behind the rocks was bestowed to the scouts</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Gamer Boi, the avid video gamer, stopped dead in his tracks</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">As he picked up The Lost Diary, which in seconds was unlocked</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">"He who dared seek victory through audacious exploits", it read</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">"Shall claim The Grooming Kit and Golden Mustache, some light years ahead"</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">As Aster, the man on a moon mission, flipped over to the next sheet</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">It showed nine mysterious artifacts, marking nine impossible feats</p>
                                        </div>
                                    </div>

                                    <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">4</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <article className="page">
                        <div className="d-flex justify-content-around h-full">
                            <div className="w-2/4 bg-white">
                                <div className="h-full d-flex flex-column justify-content-start" style={{position: "relative"}}>
                                    <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>

                                    {/* Stanzas */}
                                    <div className="mt-3">
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Bacon Prince, the next ruler of the mouthwatering Breakfast Kingdom</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Also wanted to pitch in some of his egg and bacon wisdom</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Bug, the melancholic Mustachio, grinned from ear to ear</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Now in such good spirits, for the first time in a hundred years</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Delighted, Bee Lee jumped up and down in his bespoke yellow jumpsuit</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">"The time has come for me to depart for the wildest pursuit!"</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">TAnd so Pulsar flapped his wings, beyond thrilled to fly</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">For the greatest mystery unsolved emerges and no Mustachio knows why</p>
                                        </div>
                                        <div className="mb-3">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Little did they know I’ve set them up for the greatest mystery</p>
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">For I am The Prospector, the best Mustachio in all of history.</p>
                                        </div>
                                    </div>

                                    {/* <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">5</p> */}
                                    <div className="mb-5 ch-footer">
                                        <div className="w-1/6 mx-auto">
                                            <img className="w-100" src={mustachioLogoFooter} alt="Mustachio Logo" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-2/4 bg-white">
                                <div className="h-full d-flex flex-column justify-content-center" style={{position: "relative"}}>
                                    {/* <div className="w-1/3 mx-auto mt-5 mb-5">
                                        <img className="w-100" src={chapter1Logo} alt="Chapter 1" />
                                    </div> */}
                                    {/* <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 2</p> */}
                                    <h3 className="text-center font-w-hermann w-hermann-semibold">CHAPTER 2</h3>
                                    <p className="text-center text-lg font-w-hermann w-hermann-reg mb-3">Release Date: September 20, 2021 - 9PM SGT</p>
                                    {/* <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p> */}
                                    
                                    <div className="d-flex justify-content-around mb-3 w-1/2 mx-auto">
                                        <a href={socMedHandles.fb} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon className="text-black footer-icons" color="black" size="2x" icon={faFacebook} />
                                        </a>
                                        <a href={socMedHandles.ig} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon className="text-black footer-icons" color="black" size="2x" icon={faInstagram} />
                                        </a>
                                        <a href={socMedHandles.discord} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon className="text-black footer-icons" color="black" size="2x" icon={faDiscord} />
                                        </a>
                                        <a href={socMedHandles.twitter} target="_blank" rel="noreferrer">
                                            <FontAwesomeIcon className="text-black footer-icons" color="black" size="2x" icon={faTwitter} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </FlipPage>
            </div>
    </div>
    )
}

export default App
