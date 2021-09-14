import { useRef, useState } from 'react'
import FlipPage from 'react-flip-page'
import MobileDesign from './components/MobileDesign'
import './App.css'

// chapter 1
import chapter1Logo from './images/ch_1/page1-pic.png'
import firstPagePic from './images/ch_1/page2-pic.png'
import mustachioLogoFooter from './images/ch_1/mustachio-logo-book.png'
import mustachioLogo from './images/mustachio_logo_2_white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
 
function App() {
    var flipPage = useRef(null)

    const [page, setPage] = useState(0)

    const updatePage = pageIndex => {
        setPage(pageIndex)
    }

    const goToMustachioWebsite = () => {
        window.location.href = 'https://mustachioverse.com'
    }

    const socMedHandles = {
        fb: "https://facebook.com/mustachioverse",
        ig: "https://instagram.com/mustachioverse",
        discord: "https://discord.gg/rfypRx4cjh",
        twitter: "https://twitter.com/mustachioverse",
    }
    
    return (
        <div className="app">
            <div className="back-arrow d-none d-lg-block" onClick={() => page === 0 ? goToMustachioWebsite() : flipPage.gotoPreviousPage()}>
                <div class="d-flex align-items-center">
                    <FontAwesomeIcon icon={faArrowLeft} color="white" size="2x" />
                    { page === 0 ? (
                        <p className="arrow-content font-andes mb-0 text-white page-0 d-none">&nbsp;&nbsp;Back to Website</p>
                    ) : (
                        <p className="arrow-content font-andes mb-0 text-white d-none">&nbsp;&nbsp;Previous</p>
                    )}
                </div>
            </div>

            <div className="container">
                <div className="d-none d-lg-block">
                    <FlipPage
                        className="book"
                        disableSwipe="true"
                        flipOnTouch="false"
                        uncutPages
                        orientation="horizontal"
                        animationDuration="1000"
                        pageBackground="transparent"
                        width="992"
                        onPageChange={pageIndex => updatePage(pageIndex)}
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

                        {/* Prologue */}
                        <article className="page">
                            <div className="d-flex justify-content-around h-full">
                                <div className="w-2/4 bg-white"></div>
                                <div className="w-2/4 bg-white">
                                    <div className="h-full d-flex flex-column justify-content-start" style={{position: "relative"}}>
                                        <div className="w-1/3 mx-auto mt-5 mb-5">
                                            <img className="w-100" src={chapter1Logo} alt="Prologue" />
                                        </div>
                                        {/* <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 1</p> */}
                                        <h3 className="text-center font-w-hermann w-hermann-semibold">Prologue</h3>
                                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="page">
                            <div className="d-flex justify-content-around h-full">
                                <div className="w-2/4 bg-white">
                                    <div className="h-full d-flex flex-column justify-content-start" style={{position: "relative"}}>
                                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Prologue</p>
                                        <div className="w-1/3 mx-auto mt-3 mb-4">
                                            <img className="w-100" src={firstPagePic} alt="Prologue" />
                                        </div>

                                        {/* Stanzas */}
                                        <div className="mb-3 px-2">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">
                                                <span className="text-5xl">O</span>, cried the angels with not a whisper heard for the gods have bestowed tales in a land of few words. Hidden in fog and wary seas. MustachioVerse, where the Mustachios feasted, a realm rich with secrets, folklores and many adventures yet to be had.
                                            </p>
                                        </div>
                                        <div className="mb-3 px-2">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">One among these mustachioed beings, fabled among the land and yet quite mysterious. He is the bearer of the Golden Mustache and keeper of the Grooming Kit, 9 artifacts, each one a wondrous gift or a curse. Probably.</p>
                                        </div>
                                        <div className="mb-3 px-2">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">The Prospector as he is known. A valiant one whose exploits became legends! One can say moved mountains and changed the course of rivers.</p>
                                        </div>

                                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">3</p>
                                    </div>
                                </div>
                                <div className="w-2/4 bg-white">
                                    <div className="h-full d-flex flex-column justify-content-start" style={{position: "relative"}}>
                                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Prologue</p>

                                        {/* Stanzas */}
                                        <div className="mt-3 px-2">
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">And now the voice to tell the tales of MustachioVerse. Just so happens portal to this curious land has opened.</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">MustachioVerse beckons you!</p>
                                            </div>
                                        </div>

                                        <div className="mb-5 ch-footer">
                                            <div className="w-1/6 mx-auto">
                                                <img className="w-100" src={mustachioLogoFooter} alt="Mustachio Logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Chapter 1 */}
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
                                        <div className="mb-3 px-2">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">
                                                <span className="text-5xl">I</span>t is morning in MustachioVerse. Sun hidden in a heavy downpour. A strong wind blows the pouring water into a spray, masking what could be the smell of pine cones into a reminder of how soggy your clothes can be.
                                            </p>
                                        </div>
                                        <div className="mb-3 px-2">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">An epic time to start a quest if you ask a bored Mustachio. The great wind seemingly nudges a group of Mustachios to an old cave.</p>
                                        </div>
                                        <div className="mb-3 px-2">
                                            <p className="text-center font-w-hermann w-hermann-semibold mb-0">Alas! The old Bigode Cave glowed bright like fire in the winter. And so the young Mustachios, curious as they are, trudged the wet trail to see what the glow is all about.</p>
                                        </div>

                                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">7</p>
                                    </div>
                                </div>
                                <div className="w-2/4 bg-white">
                                    <div className="h-full d-flex flex-column justify-content-start" style={{position: "relative"}}>
                                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>

                                        {/* Stanzas */}
                                        <div className="mt-3 px-2">
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">As they come upon the cave's mouth, they see the glow pulsating from behind the rocks. Half hidden with debris, they find the source of this immense glow. It looks like a book with light leaking out from cracks on the cover and the pages.</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">As the light dims, they see an aged journal, torn and beat up but shaking like it is charging up. It lights back up again. This time blasting an intense array of light and a booming sound that echoes around the cave. It sounds almost like a deep voice. An announcement as the different colored lights swirl into many interesting shapes. Dancing enchantingly fast and jovial. Then slows down, floats into a circular shape. A tunnel.</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">The deep voice whispers into a fading echo. “The portal opens.” The winds enter the cave, flipping the pages of the now normal looking journal.</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Abracadoobie with his staff, a deceitful distraction, heard an echo from a distance, smirking, ready for some action. As Bandwip showed deep interest in treasures and adventures, even Cairo, the great thief, lighted up like a candle in the darkness. With a snigger he said, “Ready or not, the next legend is upon us.” Eyes glazing as Berry, the high-pitched wild berry warrior, exclaimed “The coast is clear, now we’re ready for some more!”.</p>
                                            </div>
                                        </div>

                                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">8</p>
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
                                        <div className="mt-3 px-2">
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Gamer Boi, the avid video gamer, stopped dead in his tracks as he picked up The Lost Diary. “He who dared seek victory through audacious exploits”, it read. “Shall claim The Grooming Kit and Golden Mustache, some light years ahead.”</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">As Aster, the man on a moon mission, flipped over to the next sheet, it showed nine mysterious artifacts, marking nine impossible feats. Bacon Prince, the next ruler of the mouthwatering Breakfast Kingdom, also wanted to pitch in some of his egg and bacon wisdom.</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Bug, the melancholic Mustachio, grinned from ear to ear. Now in such good spirits, for the first time in a hundred years! Delighted, Bee Lee jumped up and down in his bespoke yellow jumpsuit. “The time has come for me to depart for the wildest pursuit!”. And so Pulsar flapped his wings, beyond thrilled to fly, for the greatest mystery unsolved emerged and no Mustachio knows why.</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">The Sages Rant as the embossed text in the journal reads. The curious Mustachios find themselves engrossed in the torn up pages. As paints outlandish stories of their land. Of a Golden Mustache and magical artifacts.</p>
                                            </div>
                                        </div>

                                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">9</p>
                                    </div>
                                </div>
                                <div className="w-2/4 bg-white">
                                <div className="h-full d-flex flex-column justify-content-start" style={{position: "relative"}}>
                                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>

                                        {/* Stanzas */}
                                        <div className="mt-3 px-2">
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Quests! Their brains already buzzing in excitement as they dragged their horses and satchels and got ready the start of their own saga.</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Ah, little did these youngsters know of the greatest adventures set before them. I know for they will follow my steps. I am The Prospector, and my tales will be your quest.</p>
                                            </div>
                                            <div className="mb-3">
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">Mint your Mustachio now and enter the portal that will transport you to MustachioVerse!</p>
                                                <p className="text-center font-w-hermann w-hermann-semibold mb-0">
                                                    <a href="https://mustachioverse.com/">https://mustachioverse.com/</a>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mb-5 ch-footer">
                                            <div className="w-1/6 mx-auto">
                                                <img className="w-100" src={mustachioLogoFooter} alt="Mustachio Logo" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="page">
                            <div className="d-flex justify-content-around h-full">
                                <div className="w-2/4 bg-white"></div>
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

                <MobileDesign socMedHandles={socMedHandles} flipPage={flipPage} />
            </div>           
            
            <div className="next-arrow d-none d-lg-block" onClick={() => flipPage.gotoNextPage()}>
                <div class="d-flex align-items-center">
                    <p className="arrow-content font-andes mb-0 text-white d-none">Next&nbsp;&nbsp;</p>
                    <FontAwesomeIcon icon={faArrowRight} color="white" size="2x" />
                </div>
            </div>
    </div>
    )
}

export default App
