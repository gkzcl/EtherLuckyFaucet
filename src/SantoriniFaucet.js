import web3 from './web3';
import abi from './ABI';

const SantoriniFaucetAddress = '0x4b5636013faf1496b03ee322f7c422b1c4f191e3';
const SantoriniFaucet = new web3.eth.Contract(abi, SantoriniFaucetAddress);
export default SantoriniFaucet;