import React, {Component} from 'react';
import web3 from '../../utils/web3';

class BasicCard extends Component {

    state = {

        manager: '',
        playersCount: 0,
        balance: 0,

        enterLoading: false,
        openLoading: false,
        refundLoading: false,

        showbutton: 'none',

    };

    async componentDidMount() {
        const address = await this.props.faucet.methods.getManager().call();
        this.setState({manager: address});
        const playersCount = await this.props.faucet.methods.getPlayersCount().call();
        const balance = await this.props.faucet.methods.getBalance().call();
        this.setState({playersCount: playersCount});
        this.setState({balance: web3.utils.fromWei(balance, 'ether')});

        const accounts = await web3.eth.getAccounts();
        if (accounts[0] === address) {
            //当前登录进来的是管理员
            this.setState({showbutton: 'inline'});
        } else {
            //不是管理员
            this.setState({showbutton: 'none'});
        }
    }


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
