import React, {Component} from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { Grid, Menu, Card } from 'semantic-ui-react';

import Typist from 'react-typist'
import 'react-typist/dist/Typist.css'

import RunsafeSnippet from './subcomponents/codeSnippets/runsafeSnippet';
import SfpdSnippet from './subcomponents/codeSnippets/sfpdSnippet';
import SubspotSnippet from './subcomponents/codeSnippets/subspotSnippet';

class Projects extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Typist className='home-content'>Click on a project to learn more about it!</Typist>
                <br/>
                <Card.Group itemsPerRow={2}>
                    <Card raised={true} color='white'>
                        <Card.Content>
                            <Card.Header>SubStop Chrome Extension & REST API<img className='github-project' src="https://i.pinimg.com/236x/54/7a/96/547a96e289c3c8f10570d170867dbe8a--startup-resume.jpg"/></Card.Header>
                            <SubspotSnippet/>
                            <Card.Description>Chrome Extension with API to detect subscription payments</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card raised={true}>
                        <Card.Content>
                            <Card.Header>SFPD Dispatch Anlaysis<img className='github-project' src="https://i.pinimg.com/236x/54/7a/96/547a96e289c3c8f10570d170867dbe8a--startup-resume.jpg"/></Card.Header>
                            <SfpdSnippet/>
                            <Card.Description>Analysis and visualization of SFPD dispatch information</Card.Description>
                        </Card.Content>
                    </Card>
                    <Card raised={true}>
                        <Card.Content>
                            <Card.Header>RunSafe Android Application<img className='github-project' src="https://i.pinimg.com/236x/54/7a/96/547a96e289c3c8f10570d170867dbe8a--startup-resume.jpg"/></Card.Header>
                            <RunsafeSnippet/>
                            <Card.Description>Android application to emergency signal to 911 and contacts</Card.Description>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </div>
        )
    }

}

export default Projects;