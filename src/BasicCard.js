import React, {Component} from 'react';
import web3 from './web3';
import CaymanFaucet from "./CaymanFaucet";

class BasicCard extends Component {

    state = {

        manager: '',
        playersCount: 0,
        balance: 0,

        enterLoading: false,
        openLoading: false,
        refundLoading: false,

        showbutton: 'none'

    };


    enter = async (faucet) => {
        this.setState({enterLoading: true});
        const accounts = await web3.eth.getAccounts();
        await faucet.methods.enter().send({
            from: accounts[0],
            value: '1000000000000000000'
        });
        this.setState({enterLoading: false});
        window.location.reload(true);
    };

    pickWinner = async (faucet) => {
        this.setState({openLoading: true});
        const accounts = await web3.eth.getAccounts();
        await faucet.methods.pickWinner().send({
            from: accounts[0]
        });
        this.setState({openLoading: false});
        window.location.reload(true);
    };

    refund = async (faucet) => {
        this.setState({refundLoading: true});
        const accounts = await web3.eth.getAccounts();
        await faucet.methods.pickWinner().send({
            from: accounts[0]
        });
        this.setState({refundLoading: false});
        window.location.reload(true);
    };

}

export default BasicCard;
