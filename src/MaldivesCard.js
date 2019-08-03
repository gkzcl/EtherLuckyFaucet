import React from 'react';
import {Card, Image, Icon, Statistic, Button, Label} from 'semantic-ui-react';
import web3 from './web3';
import BasicCard from './BasicCard';
import MaldivesFaucet from './MaldivesFaucet';

class MaldivesCard extends BasicCard {

    async componentDidMount() {
        const address = await MaldivesFaucet.methods.getManager().call();
        this.setState({manager: address});
        const playersCount = await MaldivesFaucet.methods.getPlayersCount().call();
        const balance = await MaldivesFaucet.methods.getBalance().call();
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

    render() {
        return (
            <Card>
                <Image src='/images/Maldives.jfif'/>
                <Card.Content>
                    <Card.Header>Maldives Faucet</Card.Header>
                    <Card.Meta>
                        <p>Manager Address:</p>
                        <Label size='mini'>
                            {this.state.manager}
                        </Label>
                    </Card.Meta>
                    <Card.Description>
                        <p>Draw Time: 8 PM Friday</p>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user'/>
                        {this.state.playersCount} people join
                    </a>
                </Card.Content>
                <Card.Content extra>
                    <Statistic color='red' className="ui center aligned header">
                        <Statistic.Value>{(this.state.balance)} Eth </Statistic.Value>
                        <Statistic.Label>JackPot</Statistic.Label>
                    </Statistic>
                </Card.Content>
                <Button animated='fade' onClick={this.enter.bind(this,MaldivesFaucet)}
                        loading={this.state.enterLoading}
                        disabled={this.state.enterLoading}>
                    <Button.Content visible>Click For Enter</Button.Content>
                </Button>
                <Button animated='fade' color='orange'
                        style={{display: this.state.showbutton}}
                        onClick={this.pickWinner.bind(this,MaldivesFaucet)}
                        loading={this.state.openLoading}
                        disabled={this.state.openLoading}>
                    <Button.Content visible>Open Luck</Button.Content>
                </Button>
                <Button animated='fade' color='green'
                        style={{display: this.state.showbutton}}
                        onClick={this.refund.bind(this,MaldivesFaucet)}
                        loading={this.state.refundLoading}
                        disabled={this.state.refundLoading}>
                    <Button.Content visible>Refund</Button.Content>
                </Button>
            </Card>
        );
    }
}

export default MaldivesCard;
