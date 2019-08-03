import React from 'react';
import {Card, Image, Icon, Statistic, Button, Label} from 'semantic-ui-react';
import web3 from './web3';
import BasicCard from './BasicCard';
import SantoriniFaucet from './SantoriniFaucet';

class SantoriniCard extends BasicCard {

    async componentDidMount() {
        const address = await SantoriniFaucet.methods.getManager().call();
        this.setState({manager: address});
        const playersCount = await SantoriniFaucet.methods.getPlayersCount().call();
        const balance = await SantoriniFaucet.methods.getBalance().call();
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
                <Image src='/images/Santorini.jpeg'/>
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
                <Button animated='fade' onClick={this.enter.bind(this,SantoriniFaucet)}
                        loading={this.state.enterLoading}
                        disabled={this.state.enterLoading}>
                    <Button.Content visible>Click For Enter</Button.Content>
                </Button>
                <Button animated='fade' color='orange'
                        style={{display: this.state.showbutton}}
                        onClick={this.pickWinner.bind(this,SantoriniFaucet)}
                        loading={this.state.openLoading}
                        disabled={this.state.openLoading}>
                    <Button.Content visible>Open Luck</Button.Content>
                </Button>
                <Button animated='fade' color='green'
                        style={{display: this.state.showbutton}}
                        onClick={this.refund.bind(this,SantoriniFaucet)}
                        loading={this.state.refundLoading}
                        disabled={this.state.refundLoading}>
                    <Button.Content visible>Refund</Button.Content>
                </Button>
            </Card>
        );
    }
}

export default SantoriniCard;
