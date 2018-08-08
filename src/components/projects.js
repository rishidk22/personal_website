import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Grid, Menu, Card } from 'semantic-ui-react';

class Projects extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Card.Group itemsPerRow={2}>
                <Card raised={true} color='white'>
                    <Card.Content>
                        <Card.Header>SubStop<img className='github-project' src="https://i.pinimg.com/236x/54/7a/96/547a96e289c3c8f10570d170867dbe8a--startup-resume.jpg"/></Card.Header>
                        <Card.Description>Chrome Extension to detect subscrition payments.</Card.Description>
                    </Card.Content>
                </Card>
                <Card raised={true}>
                    <Card.Content>
                        <Card.Header>SubStop</Card.Header>
                        <Card.Description>Chrome Extension to detect subscrition payments.</Card.Description>
                    </Card.Content>
                </Card>
                <Card raised={true}>
                    <Card.Content>
                        <Card.Header>SubStop</Card.Header>
                        <Card.Description>Chrome Extension to detect subscrition payments.</Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        )
    }

}

export default Projects;