import React, {Component} from 'react';
import { Card, Modal } from 'semantic-ui-react';

class SubstopModal extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <Card centered={true} raised={true} color='white'>
                <Card.Content>
                    <Card.Description>Chrome Extension with API to detect subscription payments</Card.Description>
                    <p className='work-timeline'>
                        SubStop is a subscription payment management service used to monitor recurring payments via credit cards bills and Internet
                        browsing history. The UI is a chrome extension, which allows the user to login to the service and update their user information.
                        The back-end is a RESTful API service, meant to connect the chrome extension to Captial One’s Nessie API, and process browsing
                        information. The API then detects any unused subscriptions (based on browsing) and will alert the user accordingly.
                    </p>
                </Card.Content>
            </Card>
        )
    }
}

export default SubstopModal;