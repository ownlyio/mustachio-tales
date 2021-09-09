import './Faq.css'

function FAQs(props) {
    return (
        <section id="faqs" className="mb-4">
            <div className="row mb-4">
                <div className="col-12">
                    <h1 className="mb-4 text-white font-w-hermann w-hermann-semibold">FAQs</h1>
                    <div className="accordion accordion-flush" id="app-faqs-accordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-1">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-1">
                                    What is a Mustachio?
                                </button>
                            </h2>
                            <div id="flush-collapse-1" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">The Mustachios are the first-ever NFT Tales to be told in the NFT industry. Intricately hand-drawn by the talented <b>Boii Mustache</b>, it took the artist years in the making to actualize the idea of being whatever you want to be, in a land of mustached beings.</p>
                                    <p className="text-lg font-andes">There will be a total of <b>999 Mustachios only</b>, and for each <b>generation of Mustachios</b> comes a price increase. So don’t forget to Mint your Mustachio today!</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-2">
                                    How do I get a Mustachio?
                                </button>
                            </h2>
                            <div id="flush-collapse-2" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <ol>
                                        <li className="text-lg font-andes">Visit <a href="/">mustachioverse.com</a>.</li>
                                        <li className="text-lg font-andes">Click MINT YOUR MUSTACHIO at the upper right corner.</li>
                                        <li className="text-lg font-andes">Connect your MetaMask wallet (Ethereum Network).</li>
                                        <li className="text-lg font-andes">Mint your Mustachio for only 0.3 ETH* + gas fee.</li>
                                        <li className="text-lg font-andes">Check your OpenSea account, and there you go! You now OWN a Mustachio.</li>
                                    </ol>
                                    <p className="font-andes-italic">*0.3 ETH for the first 100 Mustachios from the Genesis set.</p>
                                    <a className="text-lg font-andes" onClick={props.howToMint} style={{cursor: "pointer"}}>Click here for a more detailed instruction.</a>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-3">
                                    Do I get to pick which Mustachio I can own?
                                </button>
                            </h2>
                            <div id="flush-collapse-3" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">To add the element of surprise, you will enter the portal to MustachioVerse as a <b>random</b> Mustachio, each with a unique tale to be unraveled.</p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-4">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-4">
                                    Why is the gas fee so high?
                                </button>
                            </h2>
                            <div id="flush-collapse-4" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">A gas fee is required to execute transactions within the Ethereum network. If your gas fee is high, you can try to lower your gas fees in your transaction settings. The lower the gas fee, the longer it takes for the transactions to process.</p>
                                    <p className="text-lg font-andes">Here’s the Etherscan link to our previously minted Mustachios for your reference on our past transactions: <a href="https://etherscan.io/address/0x9e7a3a2e0c60c70efc115bf03e6c544ef07620e5" target="_blank" rel="noreferrer">https://etherscan.io/address/0x9e7a3a2e0c60c70efc115bf03e6c544ef07620e5</a></p>
                                    <p className="text-lg font-andes">You can also monitor gas prices daily as they fluctuate here: <a href="https://ethgasstation.info/index.php" target="_blank" rel="noreferrer">https://ethgasstation.info/index.php</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-5">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-5">
                                    How do I contact the Mustachio team?
                                </button>
                            </h2>
                            <div id="flush-collapse-5" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">The Mustachios created by Boii Mustache are powered by Ownly. You can email the Ownly team at <a href="mailto:support@ownly.io">support@ownly.io</a>, or send us a message in any of the following platforms:</p>
                                    <p className="text-lg font-andes">Facebook: <a href="https://web.facebook.com/mustachioverse" target="_blank" rel="noreferrer">https://web.facebook.com/mustachioverse</a></p>
                                    <p className="text-lg font-andes">Instagram: <a href="https://www.instagram.com/mustachioverse" target="_blank" rel="noreferrer">https://www.instagram.com/mustachioverse</a></p>
                                    <p className="text-lg font-andes">Twitter: <a href="https://twitter.com/mustachioverse" target="_blank" rel="noreferrer">https://twitter.com/mustachioverse</a></p>
                                    <p className="text-lg font-andes">Discord: <a href="https://discord.gg/rfypRx4cjh" target="_blank" rel="noreferrer">https://discord.gg/rfypRx4cjh</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header text-lg font-andes-med" id="flush-header-6">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-6">
                                    What else can I do with my Mustachios?
                                </button>
                            </h2>
                            <div id="flush-collapse-6" className="accordion-collapse collapse" data-bs-parent="#app-faqs-accordion">
                                <div className="accordion-body">
                                    <p className="text-lg font-andes">There are so many possibilities on how you can make use of your Mustachio!</p>
                                    <p className="text-lg font-andes"><b>The Sages Rant</b> is our official NFT Tales with 10 chapters per book that reveal the stories behind the Mustachios on their quest to find the 9 valuable artifacts that are collectively called the <b>Grooming Kit.</b></p>
                                    <p className="text-lg font-andes">You can get these artifacts later with our added feature called the <b>Touch Up</b>. We will also give you the joy of changing the background of your Mustachio avatar through our <b>Unlockables</b>.</p>
                                    <p className="text-lg font-andes">We also have plans on hosting exclusive <b>Mustachios-only events</b> where Mustachios will serve as the ticket voucher for access.</p>
                                    <p className="text-lg font-andes"><b>3D Mustachio Toys</b> are also on the roster for 2022. Stay tuned!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FAQs