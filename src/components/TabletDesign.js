import FlipPage from 'react-flip-page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import './TabletDesign.css'

// chapter 1
import sagesRant from '../images/ch_1/page1-pic.png'
import chapter1Logo from '../images/ch_1/page2-pic.png'
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

// chapter 2 characters
import chapter2Logo from '../images/ch_2/chap2.png'

// chapter 2 characters
import candycane from '../images/ch_2/characters/candycane.png'
import candywitch from '../images/ch_2/characters/candywitch.png'
import carabaohead from '../images/ch_2/characters/carabaohead.png'
import carbon from '../images/ch_2/characters/carbon.png'
import caster from '../images/ch_2/characters/caster.png'
import catchawave from '../images/ch_2/characters/catchawave.png'
import cavewizard from '../images/ch_2/characters/cavewizard.png'
import climber from '../images/ch_2/characters/climber.png'
import rench from '../images/ch_2/characters/rench.png'
import shucks from '../images/ch_2/characters/shucks.png'

function TabletDesign({ socMedHandles, flipPage}) {
    return (
        <div className="d-none d-md-block d-lg-none">
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
                            <img className="w-100" src={sagesRant} alt="Prologue" />
                        </div>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">Prologue</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Prologue</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter1Logo} alt="Prologue" />
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

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">2</p>
                    </div>
                </article>
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
                            <img className="w-100" src={sagesRant} alt="Chapter 1" />
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
                            <img className="w-100" src={chapter1Logo} alt="Chapter 1" />
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
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As they come upon the cave's mouth, they see the glow pulsating from behind the rocks. Half hidden with debris, they find the source of this immense glow. It looks like a book with light leaking out from cracks on the cover and the pages.</p>
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
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">As the light dims, they see an aged journal, torn and beat up but shaking like it is charging up. It lights back up again. This time blasting an intense array of light and a booming sound that echoes around the cave. It sounds almost like a deep voice. An announcement as the different colored lights swirl into many interesting shapes. Dancing enchantingly fast and jovial. Then slows down, floats into a circular shape. A tunnel.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Abracadoobie with his staff, a deceitful distraction, heard an echo from a distance, smirking, ready for some action. As Bandwip showed deep interest in treasures and adventures, even Cairo, the great thief, lighted up like a candle in the darkness. With a snigger he said, “Ready or not, the next legend is upon us.” Eyes glazing as Berry, the high-pitched wild berry warrior, exclaimed “The coast is clear, now we’re ready for some more!”.</p>
                            </div>
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

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">6</p>
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
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={abracadoobie} alt="AbracaDoobie" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">AbracaDoobie</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Twas in Mustachioverse before magic was known,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">a man named Doobie existed.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He does this weird stuff while moving his staff,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">like teleport things out of nowhere</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">No one knows, it is in his dark 'stache,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">where the magic came from and started</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The staff is a diversion — his deceitful distraction</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">to keep his mustache power a secret</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The other Mustachios scared of his magic,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">started calling him Abracadoobie.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={aster} alt="Aster" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Aster</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Aster is a cool and secretive Mustachio</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">who like to tell others that she is on a mission</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“What mission?” they ask,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She wouldn’t give them an answer</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">When they keep pestering her</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She’d say “It’s confidential and it would put them in danger”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She goes to the MOON, that’s all everyone knows</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">What she does there, that’s still a big question</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Maybe during a random day, the Mustachioverse will find</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">What MOON stands for, it will surely blow their mind</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={baconprince} alt="Bacon Prince" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Bacon Prince</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The bacon prince is one who likes to brag,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“I’m the next ruler of breakfast kingdom” while he waved their flag</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The prince is an only child and he is smart,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But sometimes his humor is off and quite dark.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’ll ask visitors how they like to cook their eggs,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If they answered wrong, he’ll jokingly ask the guard to take their head</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">That makes bacon prince a bit of a loner,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">For making good jokes, he has yet to master</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He might have everything but there’s one thing he wish for,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A friend he can laugh with his darkest humor</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={bandwip} alt="Bandwip" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Bandwip</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The bandit stays in taverns</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">While drinking something fancy</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He’s waiting to hear stories of treasures,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Of golden chests, diamonds, pears, and rubies</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He wants some dangerous adventures,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A chance to slash someone evil with his broad sword</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Everyone fears him because of he has two large horns,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They think to be a Samurai is the reason he is born</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They do not know having an animal sanctuary is his ultimate wish</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Use all the gold he stole to for dogs, alpacas, and his favorite fish</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={beelee} alt="Bee Lee" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Bee Lee</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">On the highest mountain top, a Mustachio is born</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She is of royalty, descendant from Bee</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She only wears jumpsuit in yellow and black,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Complains that royal outfits are very uncomfy and hurts her back</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Bee Lee’s been training herself for several years,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">To control other bees because someday she’ll be their queen</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She looks so innocent but don’t mess with her,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">This girl’s fully capable of Mustachio murder</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A bit unstable but who can complain,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She’s top-tier Mustachio pretty and worth all the pain</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={berry} alt="Berry" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Berry</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">There’s this Mustachio whose hair resembles fire,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Whose Karate skills can make you scream and cry</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With her high-pitched voice,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">she’ll make your ears bleed</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">When she sing you songs, you can’t complain</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Or else she’ll make sure you can’t talk ever again</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">People are always cautious when she’s around,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">They’re wary of the bad girl who is self-crowned</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Her original name was actually little cherry,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But she made everyone call her beautiful wild berry</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={bug} alt="Bug" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Bug</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Bug was one melancholic Mustachio,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">who feels everyday is kind of a drag</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He has depression and anxiety,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But he thinks that he is just born sad</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He said he heard some buzzing in his head,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“It’s just your mind and imagination” they said</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He know’s it’s real, he’s not making it up</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But no one seems to listen</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“One day”, he said “someone will understand”</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“I won’t be lonely; I’ll be genuinely glad”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={cairo} alt="Cairo" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Cairo</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Cairo was a bit of a klepto</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Who had four eyes and lives in the Metro</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He likes to steal things that aren’t his</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Without making everyone feel that something’s amiss</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Cairo knows he is a master thief</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Can never be caught by the Mustachio chief</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">If you like something to stolen,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">You need to prepare him a generous fee</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Where did he learns his skills, that you might wonder</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He grew up on the streets and was taught by his Father</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={gamerboi} alt="Gamer Boi" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Gamer Boi</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The pied piper said Gamer Boi came from an old rusty computer,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">His tale of existence is much of a questionable order</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">His mother asked for child through every night in a prayer</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“Almighty, give me a son, take whatever you want”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Then the next day a baby appeared,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But weirdly enough, her old computer is gone.</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The child has a large monitor on his head,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He made beeping sounds while he sleeps on his bed</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He loved video games and he always win</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Except for his social skills – is quite missing, that’s the thing</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={pulsar} alt="Pulsar" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Pulsar</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Tales have been told about the space angel’s origin,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Songs have been sung about myths where he began,</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Many have tried to ask this Mustachio where he came from,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“The Third Heavens” he said as he began to describe the realm</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He said beyond MustachioVerse exists another place,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">where stars feel closer and things float in infinite space,</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Many believed that’s why he has wings,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">To fly and explore, try to discover things</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He is almost perfect and everyone treated him well,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Believing later on, he is some kind of “god” and not just an angel</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Chapter 2 */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <div className="w-1/3 mx-auto mt-5 mb-5">
                            <img className="w-100" src={sagesRant} alt="Chapter 2" />
                        </div>
                        <p className="text-center text-xl font-w-hermann w-hermann-reg mb-2">CHAPTER 2</p>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">The Blade at Fellowcro</h3>
                        <p className="text-center text-xl font-w-hermann w-hermann-semibold-italic ch-footer mb-5">The Sages Rant</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 2: The Blade at Fellowcro</p>
                        <div className="w-1/4 mx-auto mt-3 mb-4 ">
                            <img className="w-100" src={chapter2Logo} alt="Chapter 2" />
                        </div>

                        {/* Stanzas */}
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">
                                <span className="text-5xl">S</span>ome very few days after the discovery of The Sages Rant, talks of the Prospector’s adventures buzz among the tongues of the citizens of MustachioVerse. How much truth is lost in his disappearance. And how much fantasy can be refuted by the journal.
                            </p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">But what reigns in the hearts of the young Mustachios is the curiosity of where the stories of the journal lead. What power does the artifacts hold? To be the bearer of the Golden Mustache and keeper of the Grooming Kit.</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The youngsters begin to seek for the artifacts. One group comes to the mouth of Fellowcro Forest. The arching, gnarled, and twisted black trees that line the edge of the forest bodes a dark and treacherous trek if one even has the courage to enter.</p>
                        </div>
                        <div className="mb-3 content-mobile-inner">
                            <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Guided by the clues and descriptions left by The Prospector, The Mustachios enter the forest with calm minds and sharp senses. That at least is needed for the trail that leads them to the belly of a beast.</p>
                        </div>                        

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">19</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 2: The Blade at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">It must be nearing sunset outside the forest's eternal night. The groups continue their hike into trails of the forest. Except for snarls and stares of creatures prowling behind the seemingly conscious overgrowth, nothing much exciting came along the way of the Mustachios. Safety in numbers, maybe.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">When suddenly a shrill scream breaks the thick forest air. In a rush of adrenaline, the young Mustachios leapt into action, searching for the source of the sound. Running and jumping through the branches and roots that came alive closing in on them, wanting to bind and crush. But the Mustachios are wily and athletic, they came upon a clearing where the plants weren’t able to follow them.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The scream goes off again, louder this time for right in front of them they see it. Bewilderment painted the faces of the Mustachios for this is not in the book.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Shining atop a pile of wriggling vines, The Cutlass’ thin sharp edge gleams as it dances and cuts through the vines as they try to constrict the artifact. Almost sentient, the vines scream with each cut. And sentient they are as they feel the presence of the Mustachios and creep slowly as vines do but without the intention of letting anyone leave the clearing.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">How will the Mustachios get The Cutlass?</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Cave Wizard, who inhabits the area beneath the rocks of a cliff, had experience guarding a magical space. He said to the Mustachios, “There must be some sort of riddle, so any of us could go on and get the razor.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">So Candy Witch, with her spells that can make any dessert, along with Shucks, who looks the opposite of his personality, told the Mustachios to gather and put their heads together.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">20</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 2: The Blade at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">They all glanced over Rench, a knight best known for his clever strategies and a tactician who can defeat any enemies. “But what am I to do?” Rench said. “I love war but this is another quest. It may not be military, but I’m always up for a game.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Climber smirked and said, “We can climb the trees and jump from one to another.” A man of great altitude, he aims to be. He looked at each Mustachio and said, “This one’s quite a daring challenge, no one will dare but me.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Catch-A-Wave, who was used to plot vengeance for his dear family who died in a spacecraft anomaly, thought to himself, “This is the right time for me to show everyone who’s the child of the sea.”</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">And so Caster, the spell-expert, lifted his wand. “Fellowcro Forest, show us your hand.”  Constellations light up the forest canopy and form into a set of words, a riddle to get the cutlass.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">A true Mustachio of ancient rituals, CarabaoHead, started shaking his body while chanting words of dread, while Carbon, a humanoid fighting against evil, was debating whether he could come up with something partly evil.</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Candy Cane, with her hair so white and her shirt so big, had this power unbeknownst to the other Mustachios. She can hypnotize them to sleep, and to buy her more time, that’s what she did.</p>
                            </div>
                        </div>

                        <p className="text-center font-w-hermann w-hermann-semibold-italic page-num">21</p>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-start" style={{position: "relative"}}>
                        <p className="text-center font-w-hermann w-hermann-italic mt-3">Chapter 2: The Blade at Fellowcro</p>

                        {/* Stanzas */}
                        <div className="mt-3 content-mobile-wrap">
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">The riddle from the sky says:</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold-italic mb-0">This famous pirate looks scruffy</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold-italic mb-0">As he doesn’t seem to have shaved</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold-italic mb-0">By not buying razors</p>
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold-italic mb-0">Lots of money he must have saved</p>
                            </div>
                            <div className="mb-3 content-mobile-inner">
                                <p className="content-mobile text-center font-w-hermann w-hermann-semibold mb-0">Will you be the first and only Mustachio to solve this riddle and get The Cutlass?</p>
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

                {/* Chapter 2 Characters */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={candycane} alt="Candy Cane" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Candy Cane</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">This girl is the definition of someone weird</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With hair so white and shirts so big</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Sometimes she goes to a concert just to scream</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">After that she’ll devour a big tub of ice cream</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Candy Cane is irony personified</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With emotions overflowing like a tide</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She likes the sweetest candies and saddest songs</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Loves heavy rock music and wants a pet unicorn</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Yet beware, her eyes can hypnotize you to sleep</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">You’ll have a deep slumber that’ll last more than a week</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={candywitch} alt="Candy Witch" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Candy Witch</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Candy Witch is popular with many children</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She is to them an angel, their sweet haven</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With her spells she can make any dessert</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Cakes, cookies, you name it – she’s the sweet tooth expert</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">She flies with her chocolate broom</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">While sprinkling delectable goodies</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A trail of pink candies is the sign</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Candy Witch here you’ll find</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">However, no one knows, this Mustachios diabetic</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And even loved many, she’s her own worst critic</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={carabaohead} alt="CarabaoHead" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">CarabaoHead</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A Mustachio of ancient rituals is CarabaoHead</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He shakes his body while chanting words of dread</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He speaks these words while dancing</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“existing, living, two different thing”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He milks his headdress everyday</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">To get some money to learn ballet</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He was orphan who didn’t know his parents</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Only knows he can produce milk with his headdress</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Although this mustached being is confused about his identity</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He promised to be the greatest dancer throughout Mustacheternity</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={carbon} alt="Carbon" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Carbon</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Carbon is literally more human than others</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Because He is a humanoid fighting against evil</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Legend says he killed more than a thousand</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Throughout space he is known by everyone</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Is he a good Mustachio? That’s still debatable</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Probably cause he’s also partly evil</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Carbon thinks there should be no exceptions</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Even to the slightest offensive allegations</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Some says his ways for punishment is a questionable matter</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But monsters can only be extinguished by another monster</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={caster} alt="Caster" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Caster</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Caster have always been popular in his class</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">There is no spell he cannot cast</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A bit of a bully who's lost in his ways</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But one day he found a girl in a garden maze</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He fell in love the first moment he saw her</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He told himself this one is not like any other</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He fixed his life to win “the one”</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But before he talked to her, she was gone</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Although uncool, he asked everyone for clues</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And so began, his life-long Mustachio cruise</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={catchawave} alt="Catch A Wave" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Catch A Wave</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Catch-A-Wave was only his nickname</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A great surfer with money, looks, and fame</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He is a child of the sea,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And calls the sun his mother</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But really his family died in a terrible disaster</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Some spacecraft anomaly, that’s what he remembers</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He pretends his memories are gone, that he doesn’t know</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Someone caused their spaceship to blow</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He is plotting for vengeance since he was ten</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“At the right time dear self” he said “Be patient Ben”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={cavewizard} alt="Cave Wizard" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Cave Wizard</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Cave Wizard guards a hidden cave</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A pathway to an alternate reality his forefathers made</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He inhabits the area beneath the rocks of a cliff,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">with his red glowing wizard staff that he likes to whiff</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Why does he do that, well it’s his way</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Of making himself look crazy, of scaring people away</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He knows it’s important he doesn’t let anyone know,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">That a secret place exists, an area made of rainbow</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He is the keeper of the cave, the man in charge</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Until a strong Mustachio stood in front of the cave door and tried to barge.</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={climber} alt="Climber" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Climber</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The climber is one insecure man who is a bit wacko</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Because compared to everyone, he’s the shortest Mustachio</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He wants to climb the highest mountains to compensate for his height</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“Taller than everyone, I’ll be the proudest person in sight”</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A man of great altitude he aims to be</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Thousands of kilometers above the sea</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">His commitment and dedication to pursue his dream</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Made him the strongest climber even on places that are too extreme</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He almost lost a limb on one perilous mountain trail,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">“Well, this one’s quite a daring challenge” he says “no one will dare”</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={rench} alt="Rench" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Rench</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A knight was known for clever strategies</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">A tactician who can defeat any enemies</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Rench is this Mustachios’ name,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And battles are his favorite game</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He is a soldier since he was still child</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">No one knows the last time he smiled</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Trained all his life, wars are all he lived for</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Never knew outside military, there’s so much more</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">He has a routine that he never breaks</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Until one dawn when many lives are at stake</p>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <div className="w-1/4 mx-auto mb-3">
                            <img className="w-100" src={shucks} alt="Shucks" />
                        </div>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">The Tale of</p>
                        <p className="text-center text-3xl font-w-hermann w-hermann-ultrabold mb-4">Shucks</p>

                        <div className="px-2">
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Shucks looks like someone out of a horror movie</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">With a scar that makes him pretty damn scary</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But beneath the imperfect skin,</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Is a heart that's kind and glows within</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">It's true he loves real crime documentaries</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">And he doesn't flinch when movie scenes go murdery</p>
                            </div>
                            <div className="mb-3">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">But that doesn't mean that he's a serial killer</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">This Mustachio will treat you well more than any other</p>
                            </div>
                            <div className="mb-0">
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">In spite of being bullied all his life</p>
                                <p className="text-center text-lg font-w-hermann w-hermann-reg mb-0">Shucks kept being kind and won’t start a fight</p>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Up Next */}
                <article className="page h-90vh">
                    <div className="h-90vh d-flex flex-column justify-content-center" style={{position: "relative"}}>
                        <h3 className="text-center font-w-hermann w-hermann-semibold">CHAPTER 3</h3>
                        <p className="text-center text-lg font-w-hermann w-hermann-reg mb-3">Release Date: September 27, 2021 - 9PM SGT</p>
                        
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

export default TabletDesign