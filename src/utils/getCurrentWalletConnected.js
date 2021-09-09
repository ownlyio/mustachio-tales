import web3 from './web3'

const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await web3.eth.getAccounts()
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: 1,
                }
            } else {
                try {
                    await window.ethereum.enable();
                    const addressArray = await web3.eth.getAccounts()

                    return {
                        address: addressArray[0],
                        status: 1,
                    };
                } catch (error) {
                    return {
                        address: "",
                        status: 2
                    }
                }
            }
        } catch (err) {
            return {
                connectedStatus: false,
                address: "",
                status: 3
            }
        }
    } else {
        return {
            connectedStatus: false,
            address: "",
            status: 0
        }
    }
};

export default getCurrentWalletConnected