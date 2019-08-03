import React, {Component} from 'react';
import {Message, Container, Card} from 'semantic-ui-react';
import CaymanCard from './CaymanCard';
import TahitiCard from './TahitiCard';
import MaldivesCard from './MaldivesCard';
import SantoriniCard from "./SantoriniCard";

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
                    <CaymanCard/>
                    <TahitiCard/>
                    <MaldivesCard/>
                    <SantoriniCard/>
                </Card.Group>
            </Container>
        );
    }
}

export default App;
