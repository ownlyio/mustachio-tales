import FlipPage from 'react-flip-page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './MobileDesign.css'

// chapter 1
import chapter1Logo from '../images/ch_1/page1-pic.png'
import firstPagePic from '../images/ch_1/page2-pic.png'
import mustachioLogoFooter from '../images/ch_1/mustachio-logo-book.png'

// chapter 1 characters
import abracadoobie from '../images/ch_1/characters/abracadoobie.png'
import aster from '../images/ch_1/characters/aster.png'
import baconprince from '../images/ch_1/characters/baconprince.png'
import bandwip from '../images/ch_1/characters/bandwip.png'
import beelee from '../images/ch_1/characters/beelee.png'
import berry from '../images/ch_1/characters/berry.png'
import bug from '../images/ch_1/characters/bug.png'
import cairo from '../images/ch_1/characters/cairo.png'
import gamerboi from '../images/ch_1/characters/gamerboi.png'
import pulsar from '../images/ch_1/characters/pulsar.png'

function MobileDesign({ socMedHandles, flipPage}) {
    return (
        <div className="d-block d-md-none">
            <FlipPage
                className="book"
                showTouchHint
                uncutPages
                orientation="vertical"
                animationDuration="1000"
                disableSwip="true"
                flipOnTouch="true"
                // pageBackground="transparent"
                responsive
                ref={(component) => { flipPage = component }}
            >
                <article className="page h-90vh">
                    <div className="page-cover-mobile h-90vh" style={{position: "relative"}}></div>
                </article>

                {/* Prologue */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={chapter1Logo} alt="Prologue" />
                        </div>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">Prologue</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Prologue</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={firstPagePic} alt="Prologue" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">O</span>, cried the angels with not a whisper heard for the gods have bestowed tales in a land of few words. Hidden in fog and wary seas. MustachioVerse, where the Mustachios feasted, a realm rich with secrets, folklores and many adventures yet to be had.
                            </p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">One among these mustachioed beings, fabled among the land and yet quite mysterious. He is the bearer of the Golden Mustache and keeper of the Grooming Kit, 9 artifacts, each one a wondrous gift or a curse. Probably.</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The Prospector as he is known. A valiant one whose exploits became legends! One can say moved mountains and changed the course of rivers.</p>
                        </div>                        

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">3</p>
                    </div>
                </article>

                {/* Prologue */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Prologue</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">And now the voice to tell the tales of MustachioVerse. Just so happens portal to this curious land has opened.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">MustachioVerse beckons you!</p>
                            </div>
                        </div>

                        <div className="mb-5 ch-footer mustachio-logo-mobile-wrap">
                            <div className="w-1/6 mx-auto mustachio-logo-mobile">
                                <img className="w-100" src={mustachioLogoFooter} alt="Mustachio Logo" />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 1 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={chapter1Logo} alt="Chapter 1" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 1</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">The Inception</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={firstPagePic} alt="Chapter 1" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">I</span>t is morning in MustachioVerse. Sun hidden in a heavy downpour. A strong wind blows the pouring water into a spray, masking what could be the smell of pine cones into a reminder of how soggy your clothes can be.
                            </p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">An epic time to start a quest if you ask a bored Mustachio. The great wind seemingly nudges a group of Mustachios to an old cave.</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Alas! The old Bigode Cave glowed bright like fire in the winter. And so the young Mustachios, curious as they are, trudged the wet trail to see what the glow is all about.</p>
                        </div>                        

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">5</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As they come upon the cave's mouth, they see the glow pulsating from behind the rocks. Half hidden with debris, they find the source of this immense glow. It looks like a book with light leaking out from cracks on the cover and the pages.</p>
                            </div>

                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As the light dims, they see an aged journal, torn and beat up but shaking like it is charging up. It lights back up again. This time blasting an intense array of light and a booming sound that echoes around the cave. It sounds almost like a deep voice. An announcement as the different colored lights swirl into many interesting shapes. Dancing enchantingly fast and jovial. Then slows down, floats into a circular shape. A tunnel.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Abracadoobie with his staff, a deceitful distraction, heard an echo from a distance, smirking, ready for some action. As Bandwip showed deep interest in treasures and adventures, even Cairo, the great thief, lighted up like a candle in the darkness. With a snigger he said, “Ready or not, the next legend is upon us.” Eyes glazing as Berry, the high-pitched wild berry warrior, exclaimed “The coast is clear, now we’re ready for some more!”.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">6</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Gamer Boi, the avid video gamer, stopped dead in his tracks as he picked up The Lost Diary. “He who dared seek victory through audacious exploits”, it read. “Shall claim The Grooming Kit and Golden Mustache, some light years ahead.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As Aster, the man on a moon mission, flipped over to the next sheet, it showed nine mysterious artifacts, marking nine impossible feats. Bacon Prince, the next ruler of the mouthwatering Breakfast Kingdom, also wanted to pitch in some of his egg and bacon wisdom.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Bug, the melancholic Mustachio, grinned from ear to ear. Now in such good spirits, for the first time in a hundred years! Delighted, Bee Lee jumped up and down in his bespoke yellow jumpsuit. “The time has come for me to depart for the wildest pursuit!”. And so Pulsar flapped his wings, beyond thrilled to fly, for the greatest mystery unsolved emerged and no Mustachio knows why.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">7</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 1: The Inception</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The Sages Rant as the embossed text in the journal reads. The curious Mustachios find themselves engrossed in the torn up pages. As paints outlandish stories of their land. Of a Golden Mustache and magical artifacts. Quests! Their brains already buzzing in excitement as they dragged their horses and satchels and got ready the start of their own saga.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Ah, little did these youngsters know of the greatest adventures set before them. I know for they will follow my steps. I am The Prospector, and my tales will be your quest.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Mint your Mustachio now and enter the portal that will transport you to MustachioVerse!</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                    <a href="https://mustachioverse.com/">https://mustachioverse.com/</a>
                                </p>
                            </div>
                        </div>

                        <div className="mb-5 ch-footer mustachio-logo-mobile-wrap">
                            <div className="w-1/6 mx-auto mustachio-logo-mobile">
                                <img className="w-100" src={mustachioLogoFooter} alt="Mustachio Logo" />
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 1 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={abracadoobie} alt="AbracaDoobie" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">AbracaDoobie</p>

                        <div className="px-2">
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">Twas in Mustachioverse before magic was known,</p>
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">a man named Doobie existed.</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">He does this weird stuff while moving his staff,</p>
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">like teleport things out of nowhere</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">No one knows, it is in his dark 'stache,</p>
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">where the magic came from and started</p>
                            </div>
                            <div className="mb-2">
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">The staff is a diversion — his deceitful distraction</p>
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">to keep his mustache power a secret</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">The other Mustachios scared of his magic,</p>
                                <p className="content-characters-mobile text-center font-w-hermann w-hermann-reg mb-0">started calling him Abracadoobie.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={aster} alt="Aster" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Aster</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Aster is a cool and secretive Mustachio</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">who like to tell others that she is on a mission</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“What mission?” they ask,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She wouldn’t give them an answer</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">When they keep pestering her</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She’d say “It’s confidential and it would put them in danger”</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She goes to the MOON, that’s all everyone knows</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">What she does there, that’s still a big question</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Maybe during a random day, the Mustachioverse will find</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">What MOON stands for, it will surely blow their mind</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={baconprince} alt="Bacon Prince" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Bacon Prince</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The bacon prince is one who likes to brag,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“I’m the next ruler of breakfast kingdom” while he waved their flag</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The prince is an only child and he is smart,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But sometimes his humor is off and quite dark.</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll ask visitors how they like to cook their eggs,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If they answered wrong, he’ll jokingly ask the guard to take their head</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">That makes bacon prince a bit of a loner,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">For making good jokes, he has yet to master</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He might have everything but there’s one thing he wish for,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A friend he can laugh with his darkest humor</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={bandwip} alt="Bandwip" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Bandwip</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The bandit stays in taverns</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">While drinking something fancy</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s waiting to hear stories of treasures,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Of golden chests, diamonds, pears, and rubies</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He wants some dangerous adventures,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A chance to slash someone evil with his broad sword</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Everyone fears him because of he has two large horns,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They think to be a Samurai is the reason he is born</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They do not know having an animal sanctuary is his ultimate wish</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Use all the gold he stole to for dogs, alpacas, and his favorite fish</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={beelee} alt="Bee Lee" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Bee Lee</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">On the highest mountain top, a Mustachio is born</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She is of royalty, descendant from Bee</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She only wears jumpsuit in yellow and black,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Complains that royal outfits are very uncomfy and hurts her back</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Bee Lee’s been training herself for several years,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">To control other bees because someday she’ll be their queen</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She looks so innocent but don’t mess with her,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">This girl’s fully capable of Mustachio murder</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">A bit unstable but who can complain,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">She’s top-tier Mustachio pretty and worth all the pain</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={berry} alt="Berry" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Berry</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">There’s this Mustachio whose hair resembles fire,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Whose Karate skills can make you scream and cry</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">With her high-pitched voice,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">she’ll make your ears bleed</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">When she sing you songs, you can’t complain</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Or else she’ll make sure you can’t talk ever again</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">People are always cautious when she’s around,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">They’re wary of the bad girl who is self-crowned</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Her original name was actually little cherry,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But she made everyone call her beautiful wild berry</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={bug} alt="Bug" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Bug</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Bug was one melancholic Mustachio,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">who feels everyday is kind of a drag</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He has depression and anxiety,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But he thinks that he is just born sad</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said he heard some buzzing in his head,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“It’s just your mind and imagination” they said</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He know’s it’s real, he’s not making it up</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But no one seems to listen</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“One day”, he said “someone will understand”</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“I won’t be lonely; I’ll be genuinely glad”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={cairo} alt="Cairo" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Cairo</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Cairo was a bit of a klepto</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Who had four eyes and lives in the Metro</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He likes to steal things that aren’t his</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Without making everyone feel that something’s amiss</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Cairo knows he is a master thief</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Can never be caught by the Mustachio chief</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">If you like something to stolen,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">You need to prepare him a generous fee</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Where did he learns his skills, that you might wonder</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He grew up on the streets and was taught by his Father</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={gamerboi} alt="Gamer Boi" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Gamer Boi</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The pied piper said Gamer Boi came from an old rusty computer,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His tale of existence is much of a questionable order</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">His mother asked for child through every night in a prayer</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“Almighty, give me a son, take whatever you want”</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Then the next day a baby appeared,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">But weirdly enough, her old computer is gone.</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">The child has a large monitor on his head,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He made beeping sounds while he sleeps on his bed</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He loved video games and he always win</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Except for his social skills – is quite missing, that’s the thing</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/2 mx-auto mb-3">
                            <img className="w-100" src={pulsar} alt="Pulsar" />
                        </div>
                        <p className="content-characters-subtitle text-center font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="content-characters-title text-center text-2xl font-w-hermann w-hermann-ultrabold mb-4">Pulsar</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Tales have been told about the space angel’s origin,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Songs have been sung about myths where he began,</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Many have tried to ask this Mustachio where he came from,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">“The Third Heavens” he said as he began to describe the realm</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He said beyond MustachioVerse exists another place,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">where stars feel closer and things float in infinite space,</p>
                            </div>
                            <div className="mb-3">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Many believed that’s why he has wings,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">To fly and explore, try to discover things</p>
                            </div>
                            <div className="mb-0">
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">He is almost perfect and everyone treated him well,</p>
                                <p className="content-characters-mobile text-center text-lg font-w-hermann w-hermann-reg mb-0">Believing later on, he is some kind of “god” and not just an angel</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Up Next */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">CHAPTER 2</h3>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-3">Release Date: September 20, 2021 - 9PM SGT</p>
                        
                        <div className="d-flex justify-content-around mb-3 w-1/2 mx-auto mobile-socmed-icons">
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
                </article>
            </FlipPage>
        </div>
    )
}

export default MobileDesign