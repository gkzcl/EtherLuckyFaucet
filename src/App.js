import React, {Component} from 'react';
import {Message, Container, Card} from 'semantic-ui-react';
import CaymanCard from './CaymanCard';
import CaymanFaucet from './CaymanFaucet';
import TahitiCard from './TahitiCard';
import TahitiFaucet from './TahitiFaucet';
import MaldivesCard from './MaldivesCard';
import MaldivesFaucet from './MaldivesFaucet';
import SantoriniCard from "./SantoriniCard";
import SantoriniFaucet from "./SantoriniFaucet";

class App extends Component {
    render() {
        return (
            <Container>
                <br/>
                <Message info className="ui icon center aligned header">
                    <Message.Header className="ui icon center aligned header">Ether Lucky
                        Faucets</Message.Header>
                    <p>Come on man,enter for luck!</p>
                </Message>
                <Card.Group itemsPerRow={4}>
                    <CaymanCard faucet={CaymanFaucet}/>
                    <TahitiCard faucet={TahitiFaucet}/>
                    <MaldivesCard faucet={MaldivesFaucet}/>
                    <SantoriniCard faucet={SantoriniFaucet}/>
                </Card.Group>
            </Container>
        );
    }
}

export default App;
