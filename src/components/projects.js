import React, {Component} from 'react';
import '../App.css';
import { Card, Modal } from 'semantic-ui-react';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';
import RunsafeSnippet from './subcomponents/codeSnippets/runsafeSnippet';
import SfpdSnippet from './subcomponents/codeSnippets/sfpdSnippet';
import SubspotSnippet from './subcomponents/codeSnippets/subspotSnippet';

import RunsafeModal from './subcomponents/projectModals/runsafeModal';
import SfpdModal from './subcomponents/projectModals/sfpdModal';
import SubstopModal from './subcomponents/projectModals/substopModal';

class Projects extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Typist className='home-content' startDelay={500}>Click on a project to learn more!</Typist>
                <br/>
                <Card.Group itemsPerRow={2}>
                    <Modal trigger = {
                        <Card raised={true} color='white'>
                            <Card.Content>
                                <Card.Header>SubStop Chrome Extension & REST API</Card.Header>
                                <SubspotSnippet/>
                                <Card.Description>Chrome Extension with API to detect subscription payments</Card.Description>
                            </Card.Content>
                        </Card>
                    }>
                        <Modal.Header>SubStop Chrome Extension & REST API</Modal.Header>
                        <Modal.Content><SubstopModal/></Modal.Content>
                    </Modal>

                    <Modal trigger = {
                        <Card raised={true}>
                            <Card.Content>
                                <Card.Header>SFPD Dispatch Anlaysis</Card.Header>
                                <SfpdSnippet/>
                                <Card.Description>Analysis and visualization of SFPD dispatch information</Card.Description>
                            </Card.Content>
                        </Card>
                    }>
                        <Modal.Header>SFPD Dispatch Analysis</Modal.Header>
                        <Modal.Content><SfpdModal/></Modal.Content>
                    </Modal>

                    <Modal trigger = {
                        <Card raised={true}>
                            <Card.Content>
                                <Card.Header>RunSafe Android Application</Card.Header>
                                <RunsafeSnippet/>
                                <Card.Description>Android application to emergency signal to 911 and contacts</Card.Description>
                            </Card.Content>
                        </Card>
                    }>
                        <Modal.Header>RunSafe Android Application</Modal.Header>
                        <Modal.Content><RunsafeModal/></Modal.Content>
                    </Modal>
                </Card.Group>
            </div>
        )
    }

}

export default Projects;