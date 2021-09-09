import './App.css'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Modal } from 'react-bootstrap'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router } from 'react-router-dom'

// Components
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import FAQs from './components/faqs/FAQs'

// Utils
// import contract from './utils/contract'
import contract from './utils/contractDev'
import getCurrentNetwork from './utils/getCurrentNetwork'
import getCurrentWalletConnected  from './utils/getCurrentWalletConnected'

// Images
import grid from './images/grid.jpg'
import grid2 from './images/grid2.jpg'
import mustachioBanner from './images/mustachio_banner.jpeg'
import prospector from './images/prospector.jpg'
import mustachioLogo from './images/ownly_mustache.png'
import tale from './images/tale.jpg'
import mustachioGold from './images/mustachio_gold.png'
import ticket from './images/ticket.png'
import chest from './images/chest.png'
import mustacheBoii from './images/mustache_boii.jpg'
import metamask from './images/metamask.png'
import loading from './images/loading-mustachio.gif'

import Step1 from './images/how_to/1.PNG'
import Step2 from './images/how_to/2.PNG'
import Step3 from './images/how_to/3.PNG'
import Step4 from './images/how_to/4.PNG'
import Step5 from './images/how_to/5.PNG'
import Step6 from './images/how_to/6.PNG'
 
function App() {
    // State variables for initialization
    const [walletAddress, setWallet] = useState("")
    const [status, setStatus] = useState(0)
    const [network, setNetwork] = useState("")
    const [netStatus, setNetStatus] = useState(0)
    const [tokenId, setTokenId] = useState(0)

    // State variables for minting
    const [txHash, setTxHash] = useState("")
    const [txError, setTxError] = useState("")
    const [txData, setTxData] = useState([])

    // Other Variables (Change upon deployment)
    const explorerUrl = "https://rinkeby.etherscan.io/tx/"
    // const explorerUrl = "https://etherscan.io/tx/"
    const contractAddress = "0x421dC2b62713223491Daf075C23B39EF0E340E94" // Rinkeby
    // const contractAddress = "0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5" // MainNet
    const openSeaUrl = "https://testnets.opensea.io/assets/" + contractAddress + "/"
    // const openSeaUrl = "https://opensea.io/assets/" + contractAddress + "/"
    const marketplaceUrl = "https://ownly.io/marketplace/?contract=" + contractAddress + "&token=" // (Production only)

    // Modals
    const [showMetamaskInstall, setShowMetamaskInstall] = useState(false);
    const handleCloseMetamaskInstall = () => setShowMetamaskInstall(false);
    const handleShowMetamaskInstall = () => setShowMetamaskInstall(true);
    const [showWrongNetwork, setShowWrongNetwork] = useState(false);
    const handleCloseWrongNetwork = () => setShowWrongNetwork(false);
    const handleShowWrongNetwork = () => setShowWrongNetwork(true);
    const [showOnProcess, setShowOnProcess] = useState(false);
    const handleCloseOnProcess = () => setShowOnProcess(false);
    const handleShowOnProcess = () => setShowOnProcess(true);
    const [showOnError, setShowOnError] = useState(false);
    const handleCloseOnError = () => setShowOnError(false);
    const handleShowOnError = () => setShowOnError(true);
    const [showOnSuccess, setShowOnSuccess] = useState(false);
    const handleCloseOnSuccess = () => setShowOnSuccess(false);
    const handleShowOnSuccess = () => setShowOnSuccess(true);
    const [showSoldOut, setShowSoldOut] = useState(false);
    const handleCloseSoldOut = () => setShowSoldOut(false);
    const handleShowSoldOut = () => setShowSoldOut(true);
    const [showHowToMint, setShowHowToMint] = useState(false);
    const handleCloseHowToMint = () => setShowHowToMint(false);
    const handleShowHowToMint = () => setShowHowToMint(true);

    // Initialize wallet address and network upon button click
    // Then mint afterwards
    const initUtilsAndMint = async () => {
        const walletResponse = await getCurrentWalletConnected()
        const networkResponse = await getCurrentNetwork()
        setStatus(walletResponse.status)
        setWallet(walletResponse.address)
        setNetwork(networkResponse.network)
        setNetStatus(networkResponse.netStatus)

        if (status === 1) {
            if (network === "rinkeby") {
            // if (network === "main") {
                mintMustachio()
            } else {
                handleShowWrongNetwork()
            }
        } else if (status === 0) {
            handleShowMetamaskInstall()
        }
    }

    // Event Listener for Metamask Account Change
    const addWalletListener = () => {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setWallet(accounts[0])
                    setStatus(1)
                } else {
                    setWallet("");
                    setStatus(2)
                }
            })
        } else {
          setStatus(0);
        }
    }

    // Event Listener for Metamask Network Change
    const addNetworkListener = () => {
        if (window.ethereum) {
            window.ethereum.on('chainChanged', async function(networkIdMM){
                const networkResponseOnLoad = await getCurrentNetwork(1)
                setNetwork(networkResponseOnLoad.network)
                setNetStatus(networkResponseOnLoad.netStatus)
            });            
        }
    }

    // shorten addresses and/or txHashes
    // const shortenAddress = (address, prefixCount, postfixCount) => {
    //     let prefix = address.substr(0, prefixCount);
    //     let postfix = address.substr(address.length - postfixCount, address.length);
    
    //     return prefix + "..." + postfix;
    // };

    // Mint
    const mintMustachio = async () => {
        const lastId = await contract.methods.getLastMintedTokenId().call()

        if (lastId < 100) {
            const mintPrice = await contract.methods.getMintPrice().call()
            await contract.methods.mintMustachio().send({
                from: walletAddress,
                value: mintPrice,
                type: '0x2',
            })
            .on('transactionHash', function(hash){
                handleShowOnProcess()
            })
            .on('error', function(error) {
                handleCloseOnProcess()
                handleShowOnError()
                setTxError(error.message)
            })
            .then(async function(receipt) {
                handleCloseOnProcess()
                handleShowOnSuccess()
                setTxHash(receipt.transactionHash)
                setTxData(receipt)

                // Get TokenID
                const lastTokenId = await contract.methods.getLastMintedTokenId().call()
                setTokenId(lastTokenId)
            })
        } else {
            handleShowSoldOut()
        }
    } 

    // Initialize wallet address and network if Metamask is already connected
    // Watches for the listeners' update
    useEffect(() => {
        async function initUtilsOnLoad() {
            const {address, status} = await getCurrentWalletConnected();
            const {network, netStatus} = await getCurrentNetwork();
            setWallet(address)
            setStatus(status)
            setNetwork(network)
            setNetStatus(netStatus)

            if (status === 0) {
                handleShowMetamaskInstall()
            }
        }

        initUtilsOnLoad()
        addWalletListener()
        addNetworkListener()
    }, []);

    return (
        <Router>
            <div className="app">
                <Navbar mintBtn={initUtilsAndMint} />
                <div className="app-content">
                    <div className="container">
                        <section className="app-banner" id="app-banner">
                            <img className="w-100 lg-banner" src={grid} alt="Mustachio Banner" />
                            <img className="w-100 xs-banner d-none" src={grid2} alt="Mustachio Banner" />
                        </section>
                        <section id="app-welcome" className="py-4">
                            <div className="row mb-4">
                                <div className="col-lg-6 col-12">
                                    <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">Welcome to The Mustachios!</h1>
                                    <p className="text-white text-lg font-andes">With his mighty pen and a slight quiver on his shoulders, Boii Mustache have yet created another masterpiece... in the form of The Mustachios, the first-ever NFT Tales before our eyes, so we can transport as Mustachios to this mysterious island concealed on earth - the MustachioVerse.</p>
                                    <p className="text-white text-lg font-andes">Together, let's open The Sages Rant and read our story of how we triumphed over the 998 other Mustachios in our quest to find The Golden Mustache, and how we became the mustached hero.</p>
                                </div>
                                <div className="my-lg-auto col-lg-5 col-12 offset-lg-1">
                                    <img className="w-100" src={mustachioBanner} alt="Mustachio Banner" />
                                </div>
                            </div>
                        </section>

                        <section id="app-mint" className="mb-4">
                            <div className="row p-4 m-auto">
                                <div className="m-auto col-lg-3 col-12">
                                    <h3 className="font-w-hermann w-hermann-semibold text-white text-center">MINT YOUR MUSTACHIO</h3>
                                </div>
                                <div className="m-auto col-lg-4 col-12 offset-lg-1">
                                    <p className="text-justify text-lg font-andes text-white mb-lg-0">Get ready to discover the secrets and adventures that lie within MustachioVerse. Mint your OWN Mustachio today.</p>
                                </div>
                                <div className="m-auto col-lg-3 col-12 offset-lg-1">
                                    <button id="app-mint-button" className="btn w-100 py-3 btn-custom-1 text-2xl font-w-hermann w-hermann-semibold" type="button" onClick={initUtilsAndMint}>MINT YOURS NOW!</button>
                                    <button className="btn text-center mt-2 w-100 text-lg font-andes-med text-sm text-gen-color how" onClick={handleShowHowToMint}>How to mint?</button>
                                </div>
                            </div>
                        </section>
                        
                        <hr className="gray-line my-5" />

                        <section id="tales" className="mb-4">
                            <div className="row mb-4">
                                <div className="col-lg-7 col-12 order-2 order-lg-1">
                                    <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The Tale of the Prospector</h1>
                                    <p className="text-white text-lg font-andes">O, when the Mustachios dwell in the MustachioVerse, there is but one Mustachio who stood out among the rest.</p>
                                    <p className="text-white text-lg font-andes">The Prospector, supreme beyond all MustachioKind, who bore in his mighty hands all 9 artifacts from the fabled Grooming Kit.</p>
                                    <p className="text-white text-lg font-andes">He who dared seek success and happiness through audacious exploits that moved mountains and changed the courses of the rivers.</p>
                                    <p className="text-white text-lg font-andes">The Prospector.</p>
                                    <p className="text-white text-lg font-andes">You'll hear more about this noble legend who brought honour to the land of mustached beings and born explorers in two ticks.</p>
                                    <div className="app-tales-link-wrap">
                                        <a href="https://tales.mustachioverse.com" className="btn app-tales-btn px-4 py-2 btn-custom-2 font-w-hermann w-hermann-semibold text-lg">ENTER THE MUSTACHIOVERSE</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 offset-lg-1 order-1 order-lg-2 prospector">
                                    <img className="w-100" src={prospector} alt="Prospector" />
                                </div>
                            </div>
                        </section>

                        <hr className="gray-line my-5" />

                        <section id="app-specs" className="mb-4">
                            <div className="row mb-4">
                                <div className="col-lg-7 col-12">
                                    <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">Why Mint our Mustachios?</h1>
                                    <p className="text-white text-lg font-andes">When you mint a Mustachio, you’re not simply buying an avatar. The Mustachio will be your key to enter the journey in collecting artifacts that will increase your rarity and scout level in the MustachioVerse.</p>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                    <div className="d-flex flex-row flex-md-column">
                                        <div className="d-flex m-auto align-items-md-center col-md-12 col-5">
                                            <img className="img-fluid m-auto" src={ticket} alt="Access to upcoming events" />
                                        </div>
                                        <div className="m-auto col-md-12 col-sm-6 col-7 offset-md-0 offset-sm-1 offset-1 ps-4 ps-md-0">
                                            <p className="text-white mt-md-3 mb-0 text-center text-lg font-andes">Avenue to upcoming Mustachios-only events</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                    <div className="d-flex flex-row flex-md-column">
                                        <div className="d-flex m-auto align-items-md-center col-md-12 col-5">
                                            <img className="img-fluid m-auto" src={chest} alt="The Grooming Kit" />
                                        </div>
                                        <div className="m-auto col-md-12 col-sm-6 col-7 offset-md-0 offset-sm-1 offset-1 ps-4 ps-md-0">
                                            <p className="text-white mt-md-3 mb-0 text-center text-lg font-andes">Join the quest on finding the 9 artifacts from The Grooming Kit</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                    <div className="d-flex flex-row flex-md-column">
                                        <div className="d-flex m-auto align-items-md-center col-md-12 col-5">
                                            <img className="img-fluid m-auto" src={mustachioLogo} alt="10% Cryptoback" />
                                        </div>
                                        <div className="m-auto col-md-12 col-sm-6 col-7 offset-md-0 offset-sm-1 offset-1 ps-4 ps-md-0">
                                            <p className="text-white mt-md-3 mb-0 text-center text-lg font-andes">Get 10% CRYPTOBACK in OWN Tokens</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                    <div className="d-flex flex-row flex-md-column">
                                        <div className="d-flex m-auto align-items-md-center col-md-12 col-5">
                                            <img className="img-fluid m-auto" src={tale} alt="Unravel tales" />
                                        </div>
                                        <div className="m-auto col-md-12 col-sm-6 col-7 offset-md-0 offset-sm-1 offset-1 ps-4 ps-md-0">
                                            <p className="text-white mt-md-3 mb-0 text-center text-lg font-andes">Discover the unique NFT tales behind each Mustachio</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mx-auto mb-4 col-md-4 col-lg-2 col-12">
                                    <div className="d-flex flex-row flex-md-column">
                                        <div className="d-flex m-auto align-items-md-center col-md-12 col-5">
                                            <img className="img-fluid m-auto" src={mustachioGold} alt="Max supply 999" />
                                        </div>
                                        <div className="m-auto col-md-12 col-sm-6 col-7 offset-md-0 offset-sm-1 offset-1 ps-4 ps-md-0">
                                            <p className="text-white mt-md-3 mb-0 text-center text-lg font-andes">999 supply of Mustachios</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <hr className="gray-line my-5" />

                        <section id="roadmap" className="mb-4">
                            <div className="row mb-4">
                                <div className="col-lg-7 col-12">
                                    <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">Roadmap</h1>
                                    {/* 2021 */}
                                    <p className="text-white text-2xl font-andes-med">2021</p>
                                    
                                    <p className="text-white text-lg font-andes-med-italic mb-0">Q3</p>
                                    <ul className="app-roadmap-timeline mb-3">
                                        <li className="done">
                                            <span className="text-white text-lg font-andes">Creation of Mustachios</span>
                                        </li>
                                        <li className="done">
                                            <span className="text-white text-lg font-andes">Mustachio Presale (Genesis Set - 100 Mustachios)</span>
                                        </li>
                                        <li className="now">
                                            <span className="text-white text-lg font-andes">Mustachio Official Launch</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white text-lg font-andes">Beginning of NFT Tales (Gen. 1)</span>
                                        </li>
                                    </ul>

                                    <p className="text-white text-lg font-andes-med-italic mb-0">Q4</p>
                                    <ul className="app-roadmap-timeline mb-3">
                                        <li className="soon">
                                            <span className="text-white text-lg font-andes">OWN Token Airdrop to Mustachio Holders</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white text-lg font-andes">Mustachio Rewards</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white text-lg font-andes">2nd Generation Mustachios Launching (250 Mustachios)</span>
                                        </li>
                                    </ul>

                                    {/* 2022 */}
                                    <p className="text-white text-2xl font-andes-med">2022</p>
                                
                                    <p className="text-white text-lg font-andes-med-italic mb-0">Q1</p>
                                    <ul className="app-roadmap-timeline mb-3">
                                        <li className="soon">
                                            <span className="text-white text-lg font-andes">Beginning of the NFT Tales (Gen. 2)</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white text-lg font-andes">Mustachio Events</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white text-lg font-andes">Mustachio 3rd Generation Launching (250 Mustachios)</span>
                                        </li>
                                    </ul>

                                    <p className="text-white text-lg font-andes-med-italic mb-0">Q2</p>
                                    <ul className="app-roadmap-timeline mb-3">
                                        <li className="soon">
                                            <span className="text-white text-lg font-andes">Beginning of the NFT Tales (Gen. 3)</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white text-lg font-andes">Mustachio Merchandise</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white text-lg font-andes">Mustachio 4th Generation Launching (399 Mustachios)</span>
                                        </li>
                                    </ul>

                                    <p className="text-white text-lg font-andes-med-italic mb-0">Q3</p>
                                    <ul className="app-roadmap-timeline mb-3">
                                        <li className="soon">
                                            <span className="text-white text-lg font-andes">Beginning of the NFT Tales (Gen. 4)</span>
                                        </li>
                                        <li className="soon">
                                            <span className="text-white text-lg font-andes">MustaSHOW (NFT Show)</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <hr className="gray-line my-5" />

                        <section id="team" className="mb-4">
                            <div className="row mb-4">
                                <div className="col-lg-7 col-12 order-2 order-lg-1">
                                    <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">The Mustachio Team</h1>
                                    <p className="text-white text-lg font-andes">The Mustachios are created by a secretive-taciturn local artist hiding under the character <a href="https://twitter.com/BoiiMustache">Boii Mustache</a>. He adopted the character Boii Mustache as his personality. The character resembles the artist himself, a long-haired guy with a nevus in his lower left eye and, of course, the legendary mustache.</p>
                                    <p className="text-white text-lg font-andes">With the idea of becoming whoever we want to be, he started creating different mustached beings, and The MustachioVerse was conceived.</p>
                                    <p className="text-white text-lg font-andes">You can check them out below.</p>
                                    <div className="app-team-link-wrap">
                                        <a href="https://ownly.io/#team" className="btn app-team-btn px-4 py-2 btn-custom-2 font-w-hermann w-hermann-semibold text-lg">CHECK OUT THE GANG!</a>
                                    </div>
                                </div>
                                <div className="my-lg-auto col-lg-4 col-12 offset-lg-1 order-1 order-lg-2 boii-mustache">
                                    <img className="w-100" src={mustacheBoii} alt="Mustache Boii" />
                                </div>
                            </div>
                        </section>

                        <hr className="gray-line my-5" />

                        <FAQs howToMint={handleShowHowToMint} />

                        <section id="app-contract" className="py-4">
                            <div className="text-center">
                                <p className="text-lg font-andes-med text-white">VERIFIED SMART CONTRACT ADDRESS:&nbsp;&nbsp;
                                    <br className="d-lg-none" />
                                    <a href="https://etherscan.io/address/0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5" className="text-break text-lg font-andes">0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5</a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
                <Footer />

                {/* Modal for how to mint */}
                <Modal show={showHowToMint} onHide={handleCloseHowToMint} size="lg" centered>
                    <Modal.Header>
                        <Modal.Title>How To Mint My Mustachio?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p className="app-how-to-mint-modal-content font-andes-med text-lg">The following are the steps on how you can successfully mint your own Mustachios:</p>
                        
                        <hr />
                        <p className="app-how-to-mint-modal-content font-andes-med-italic text-lg">Connecting Metamask</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">Minting Mustachios requires you to have a Metamask account connected to the website.</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">Here are the steps to connect your wallet:</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">1. Install Metamask, if you don’t have one yet. You can access this <a href="https://metamask.io/download" target="_blank" rel="noreferrer" className="app-how-to-mint-link">Link</a> to download it to your browser.</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">2. Create an account on MetaMask, and Login to your MetaMask extension.</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">3. When the website loads, the MetaMask popup will appear. If it doesn't appear, click the “MINT YOURS NOW” button on the website.</p>
                        <img className="img-fluid mb-3 w-100" src={Step1} alt="Mint Yours Now Button" />
                        <p className="app-how-to-mint-modal-content font-andes text-lg">4. Now, a window will pop out on your screen from MetaMask. Choose the account that you want to connect with our website, then click the “Next” button.</p>
                        <div className="w-2/4 mx-auto vertical-img">
                            <img className="img-fluid mb-3 w-100" src={Step2} alt="Connecting Metamask #1" />
                        </div>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">5. Click “Connect” to connect your account.</p>
                        <div className="w-2/4 mx-auto vertical-img">
                            <img className="img-fluid mb-3 w-100" src={Step3} alt="Connecting Metamask #2" />
                        </div>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">Congratulations! You just connected your account to our website.</p>
                        
                        <hr />
                        <p className="app-how-to-mint-modal-content font-andes-med-italic text-lg">Minting Process</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">Now that you have connected your MetaMask Account, you can now mint your own Mustachio.</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">Here are the steps to mint your own Mustachios:</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">1. Make sure that you are on the “Ethereum Mainnet” Network in your MetaMask.</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">2. Click on the “MINT YOURS NOW” button on the website.</p>
                        <img className="img-fluid mb-3 w-100" src={Step1} alt="Mint Yours Now Button" />
                        <p className="app-how-to-mint-modal-content font-andes text-lg">3. A Pop-up window will appear on MetaMask. You can check the Gas Price and set the Gas limit there (It is up to you, if you will make it higher for priority. But we recommend sticking with the default Gas Limit).</p>
                        <div className="w-2/4 mx-auto vertical-img">
                            <img className="img-fluid mb-3 w-100" src={Step4} alt="Minting Mustachio" />
                        </div>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">4. Click “Confirm” to submit the transaction.</p>
                        <p className="app-how-to-mint-modal-content font-andes text-lg">5. You will now see a pop-up window (see below) that says your transaction is pending and waiting to be approved.</p>
                        <img className="img-fluid mb-3 w-100" src={Step5} alt="Pending Transaction" />
                        <p className="app-how-to-mint-modal-content font-andes text-lg">6. When the transaction is successful, you will see a pop-up window (see below) that says your Mustachio is minted.</p>
                        <img className="img-fluid mb-3 w-100" src={Step6} alt="Successfully Minted" />
                        <p className="app-how-to-mint-modal-content font-andes text-lg">Congratulations! You just minted your own Mustachio! You can check it out also on OpenSea by clicking the button “View on OpenSea”, view the transaction on EtherScan by clicking the “View on EtherScan” button, and/or check it out on our Ownly Marketplace by clicking the “View on Marketplace” button.</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseHowToMint}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>

                {/* Modal for soldout */}
                <Modal show={showSoldOut} onHide={handleCloseSoldOut} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="yellow" size="6x" icon={faExclamationCircle} />
                        </div>
                        <p className="app-soldout-modal-content text-center font-andes text-lg"><b style={{fontSize: "1.5rem"}}>SOLD OUT!</b><br />All 100 Mustachios have gone through The Portal. Watch out for the next generation of mustached beings.</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseSoldOut}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal> 

                {/* Modal for No Metamask */}
                <Modal show={showMetamaskInstall} onHide={handleCloseMetamaskInstall} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="app-metamask-modal-img">
                            <img src={metamask} alt="Metamask logo" />
                        </div>
                        <p className="app-metamask-modal-content text-center font-andes text-lg">Metamask is currently not installed</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseMetamaskInstall}>
                            Close
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open("https://metamask.io/download", '_blank').focus()}>
                            Install Metamask
                        </Button>
                    </Modal.Footer>
                </Modal>     

                {/* Modal for incorrect network */}
                <Modal show={showWrongNetwork} onHide={handleCloseWrongNetwork} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="green" size="6x" icon={faExclamationCircle} />
                        </div>
                        <p className="app-network-modal-content text-center font-andes text-lg">Please connect to Rinkeby network</p>
                        {/* <p className="app-network-modal-content text-center">Please connect to Ethereum Mainnet</p> */}
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseWrongNetwork}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>    

                {/* Modal for pending transaction */}
                <Modal show={showOnProcess} onHide={handleCloseOnProcess} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <img src={loading} alt="Loading..." style={{width: "150px", margin: "0 auto"}} />
                        </div>
                        <p className="app-pending-modal-content text-center font-andes text-lg"><span className="app-loading-big-letter">O</span>, what great honour. Put on your armor and hold your fire, dear friend, for we are minting your Mustachio.</p>
                    </Modal.Body>
                </Modal>    

                {/* Modal for error transaction */}
                <Modal show={showOnError} onHide={handleCloseOnError} backdrop="static" keyboard={false} size="sm" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                        </div>
                        <p className="app-error-modal-content text-center font-andes text-lg">Error: {txError}</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseOnError}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>    

                {/* Modal for successful transaction */}
                <Modal show={showOnSuccess} onHide={handleCloseOnSuccess} backdrop="static" keyboard={false} size="md" centered>
                    <Modal.Body>
                        <div className="text-center mb-3">
                            <FontAwesomeIcon color="green" size="6x" icon={faCheckCircle} />
                        </div>
                        <p className="app-success-modal-content text-center font-andes text-lg">Your Mustachio has been successfully minted! You're ready to join the quest to find the Golden Mustache.</p>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="font-w-hermann w-hermann-reg" variant="secondary" onClick={handleCloseOnSuccess}>
                            Close
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open(explorerUrl + txHash, '_blank').focus()}>
                            View on EtherScan
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open(openSeaUrl + tokenId, '_blank').focus()}>
                            View on OpenSea
                        </Button>
                        <Button className="font-w-hermann w-hermann-reg" variant="primary" onClick={() => window.open(marketplaceUrl + tokenId, '_blank').focus()}>
                            View on Marketplace
                        </Button>
                    </Modal.Footer>
                </Modal>    
            </div>
        </Router>
    )
}

export default App
