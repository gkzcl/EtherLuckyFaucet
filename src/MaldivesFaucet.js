import web3 from './web3';
import abi from './ABI';

const MaldivesFaucetAddress = '0x63dcca40a975042c2dfeaf77f2296736f4d63340';
const MaldivesFaucet = new web3.eth.Contract(abi, MaldivesFaucetAddress);
export default MaldivesFaucet;