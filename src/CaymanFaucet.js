import web3 from './web3';
import abi from './ABI';

const CaymanFaucetAddress = '0xf48b085c6ae858a792cd5676e17d0a68574e4dba';
const CaymanFaucet = new web3.eth.Contract(abi, CaymanFaucetAddress);
export default CaymanFaucet;