//获取1.0版本的web3对象
import Web3 from 'web3';

let web3 = null;

const getWeb3 = async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            // Request account access if needed
            await window.ethereum.enable();
            // Acccounts now exposed
        } catch (error) {
            // User denied account access...
            console.error(error)
        }
    }
// Legacy dapp browsers...
    else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
        // Acccounts always exposed
    }
// Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
}

getWeb3();

//导出出去
export default web3;