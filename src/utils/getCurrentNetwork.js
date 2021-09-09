import web3 from './web3'

const getCurrentNetwork = async (onChange = 0) => {
    if (window.ethereum) {
        try {
            let network = ""
            const networkID = await web3.eth.net.getId()

            switch (networkID) {
                case 1:
                    network = "main"
                    break
                case 3:
                    network = "ropsten"
                    break
                case 42:
                    network = "kovan"
                    break
                case 4:
                    network = "rinkeby"
                    break
                case 5:
                    network = "goerly"
                    break
                case 97:
                    network = "bsctestnet"
                    break
                case 56:
                    network = "bscmainnet"
                    break
                default:
                    break
            }

            return {
                networkID,
                network,
                netStatus: (onChange === 0) ? 1 : 3
            }
        } catch (err) {
            return {
                networkID: 0,
                network: "",
                netStatus: 2
            }
        }
    } else {
        return {
            networkID: 0,
            network: "",
            netStatus: 0
        }
    }
};

export default getCurrentNetwork