import React from 'react';
import {Card, Image, Icon, Statistic, Button, Label} from 'semantic-ui-react';
import BasicCard from './BasicCard';
import TahitiFaucet from '../../utils/contracts/TahitiFaucet';

class TahitiCard extends BasicCard {

    render() {
        return (
            <Card>
                <Image src='/images/Tahiti.jfif'/>
                <Card.Content>
                    <Card.Header>Tahiti Faucet</Card.Header>
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
                <Button animated='fade' onClick={this.enter.bind(this,TahitiFaucet)}
                        loading={this.state.enterLoading}
                        disabled={this.state.enterLoading}>
                    <Button.Content visible>Click For Enter</Button.Content>
                </Button>
                <Button animated='fade' color='orange'
                        style={{display: this.state.showbutton}}
                        onClick={this.pickWinner.bind(this,TahitiFaucet)}
                        loading={this.state.openLoading}
                        disabled={this.state.openLoading}>
                    <Button.Content visible>Open Luck</Button.Content>
                </Button>
                <Button animated='fade' color='green'
                        style={{display: this.state.showbutton}}
                        onClick={this.refund.bind(this,TahitiFaucet)}
                        loading={this.state.refundLoading}
                        disabled={this.state.refundLoading}>
                    <Button.Content visible>Refund</Button.Content>
                </Button>
            </Card>
        );
    }
}

export default TahitiCard;
