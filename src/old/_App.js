import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { Button, Modal } from 'react-bootstrap'
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import './App.css'

import contract from '../utils/contract'
import getCurrentNetwork from '../utils/getCurrentNetwork'
import getCurrentWalletConnected  from '../utils/getCurrentWalletConnected'

// Assets
import logo from './images/mustachio_logo.png'
import swordRight from './images/sword1.png'
import swordLeft from './images/sword2.png'
import mustachioLogo from './images/mustachio_logo_2.png'
import metamask from './images/metamask.png'
import videoTeaser from './videos/teaser.mp4'
import loading from './images/loading-mustachio.gif'
 
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

    // Other Variables
    // const explorerUrl = "https://rinkeby.etherscan.io/tx/"
    const explorerUrl = "https://etherscan.io/tx/"
    // change contract address before deployment
    // const contractAddress = "0x7F453b39Fefe22C546c5367Ec6ceD09f5ec235dD" // Rinkeby
    const contractAddress = "0x9e7a3A2e0c60c70eFc115BF03e6c544Ef07620E5" // MainNet
    // const openSeaUrl = "https://testnets.opensea.io/assets/" + contractAddress + "/"
    const openSeaUrl = "https://opensea.io/assets/" + contractAddress + "/"
    const socMedHandles = {
        fb: "https://facebook.com/mustachioverse",
        ig: "https://instagram.com/mustachioverse",
        discord: "https://discord.gg/rfypRx4cjh",
        twitter: "https://twitter.com/mustachioverse",
    }

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
            // if (network === "rinkeby") {
            if (network === "main") {
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
        <div className="app px-4 py-4">
            <div className="app-border">
                <div className="app-content px-4 py-4">
                    <div className="container-fluid">
                        <div className="row top-header">
                            <div className="col-3">
                                <div className="app-logo-wrap">
                                    <img className="app-logo" src={logo} alt="Mustachio Logo" />
                                </div>
                            </div>
                            <div className="col-6 app-title lg-screen">Official launch this 09.09.21</div>
                            <div className="col-3">
                                <div className="row">
                                    <div className="col-3 text-center">
                                        <a href={socMedHandles.fb} target="_blank">
                                            <FontAwesomeIcon className="app-icons" color="white" size="2x" icon={faFacebook} />
                                        </a>
                                    </div>
                                    <div className="col-3 text-center">
                                        <a href={socMedHandles.ig} target="_blank">
                                            <FontAwesomeIcon className="app-icons" color="white" size="2x" icon={faInstagram} />
                                        </a>
                                    </div>
                                    <div className="col-3 text-center">
                                        <a href={socMedHandles.discord} target="_blank">
                                            <FontAwesomeIcon className="app-icons" color="white" size="2x" icon={faDiscord} />
                                        </a>
                                    </div>
                                    <div className="col-3 text-center">
                                        <a href={socMedHandles.twitter} target="_blank">
                                            <FontAwesomeIcon className="app-icons" color="white" size="2x" icon={faTwitter} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="app-title md-screen d-none">Official launch this 09.09.21</div>

                        <div className="row align-items-center mt-5 main-content">
                            <div className="col-lg-5 col-md-12">
                                <div className="app-video">
                                    {/* <video controls autoPlay controlsList="nodownload"> */}
                                    <video controls controlsList="nodownload">
                                        <source src={videoTeaser} type="video/mp4" />
                                        Video tag is not supported in this browser.
                                    </video>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-12">
                                <div className="app-content-main text-center">
                                    <p><span className="app-big-letter">T</span>hus did you stand and ponder, poising static on your toes, as the wind so solemnly whispers… THE PORTAL EMERGES.</p>
                                    <p>Be ready, for the time has come.</p>
                                    <p>The Mustachios Pre-Sale unlocks at this very moment, during which we chew over the reason why we’re here.</p>
                                    <p>You, nobleman, laying low by the hands of fate, are to enter the land of mustached beings as a random Mustachio.</p>
                                    <p>As we have yet find the answers to the quest of the Golden Mustache, for you are destined to solve the mystery.</p>
                                    <p>Drag your horses and satchel and enter MustachioVerse. O, the tale lives in you.</p>
                                    <p>Unravel your story.</p>
                                </div>
                                <div className="app-btn text-center">
                                    <button className="btn px-4" onClick={initUtilsAndMint}>MINT</button>
                                </div>
                                <p className="app-note">0.3 ETH + Gas fee for each Mustachio</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-assets-wrap d-flex justify-content-between">
                    <img className="app-assets-left-sword" src={swordLeft} alt="Left Sword" />
                    <div className="app-assets-mustachio mx-auto">
                        <img src={mustachioLogo} alt="Mustachio Logo" />
                    </div>
                    <img className="app-assets-right-sword" src={swordRight} alt="Right Sword" />
                </div>
            </div>   

            {/* Modal for soldout */}
            <Modal show={showSoldOut} onHide={handleCloseSoldOut} backdrop="static" keyboard={false} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="yellow" size="6x" icon={faExclamationCircle} />
                    </div>
                    <p className="app-soldout-modal-content text-center"><b style={{fontSize: "1.5rem"}}>SOLD OUT!</b><br />All 100 Mustachios have gone through The Portal. Watch out for the next generation of mustached beings.</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseSoldOut}>
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
                    <p className="app-metamask-modal-content text-center">Metamask is currently not installed</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseMetamaskInstall}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => window.open("https://metamask.io/download", '_blank').focus()}>
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
                    {/* <p className="app-network-modal-content text-center">Please connect to Rinkeby network</p> */}
                    <p className="app-network-modal-content text-center">Please connect to Ethereum Mainnet</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseWrongNetwork}>
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
                    <p className="app-pending-modal-content text-center"><span className="app-loading-big-letter">O</span>, what great honour. Put on your armor and hold your fire, dear friend, for we are minting your Mustachio.</p>
                </Modal.Body>
            </Modal>    

            {/* Modal for error transaction */}
            <Modal show={showOnError} onHide={handleCloseOnError} backdrop="static" keyboard={false} size="sm" centered>
                <Modal.Body>
                    <div className="text-center mb-3">
                        <FontAwesomeIcon color="red" size="6x" icon={faExclamationCircle} />
                    </div>
                    <p className="app-error-modal-content text-center">Error: {txError}</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseOnError}>
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
                    <p className="app-success-modal-content text-center">Your Mustachio has been successfully minted! You're ready to join the quest to find the Golden Mustache.</p>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="secondary" onClick={handleCloseOnSuccess}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => window.open(explorerUrl + txHash, '_blank').focus()}>
                        View on EtherScan
                    </Button>
                    <Button variant="primary" onClick={() => window.open(openSeaUrl + tokenId, '_blank').focus()}>
                        View on OpenSea
                    </Button>
                </Modal.Footer>
            </Modal>    
        </div>
    )
}

export default App;
