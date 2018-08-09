import React, {Component} from 'react';
import { Card, Modal } from 'semantic-ui-react';

class PhysiqCard extends Component {
    constructor() {
        super();
    }

    render () {
        return (
            <Card raised={true} color='white'>
                <Card.Content>
                    <Card.Header>PhysIQ: Software Engineering Intern</Card.Header>
                    <Card.Description>Chrome Extension with API to detect subscription payments</Card.Description>
                </Card.Content>
            </Card>
        )
    }
}

export default PhysiqCard;