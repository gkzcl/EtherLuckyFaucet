import React from 'react';
import {Card, Image, Icon, Statistic, Button, Label} from 'semantic-ui-react';
import BasicCard from './BasicCard';
import MaldivesFaucet from './MaldivesFaucet';

class MaldivesCard extends BasicCard {

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
                        <p>Draw Time: Friday 8 PM </p>
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
