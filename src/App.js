import React, {Component} from 'react';
import {Message, Container, Card} from 'semantic-ui-react';
import CaymanCard from './components/cards/CaymanCard';
import CaymanFaucet from './utils/contracts/CaymanFaucet';
import TahitiCard from './components/cards/TahitiCard';
import TahitiFaucet from './utils/contracts/TahitiFaucet';
import MaldivesCard from './components/cards/MaldivesCard';
import MaldivesFaucet from './utils/contracts/MaldivesFaucet';
import SantoriniCard from "./components/cards/SantoriniCard";
import SantoriniFaucet from "./utils/contracts/SantoriniFaucet";

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
