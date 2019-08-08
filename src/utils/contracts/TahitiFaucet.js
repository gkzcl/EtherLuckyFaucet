import web3 from '../web3';
import abi from '../ABI';

const TahitiFaucetAddress = '0x069a8e7044d7e784bc5e4a97fde172048a950989';
const TahitiFaucet = new web3.eth.Contract(abi, TahitiFaucetAddress);
export default TahitiFaucet;