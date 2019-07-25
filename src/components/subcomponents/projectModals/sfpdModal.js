import React, {Component} from 'react';
import { Tab, Button } from 'semantic-ui-react';
import GithubCorner from 'react-github-corner';

import {FiFolder} from 'react-icons/fi'

const stack = (
    <div>
        <Button color='teal'>Python</Button>
        <Button color='teal'>Flask</Button>
        <Button color='teal'>Heroku</Button>
        <Button color='teal'>Pandas</Button>
        <Button color='teal'>SkLearn</Button>
    </div>

);

class SubstopModal extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="project_modal">
            <div style={{color: '#FFD42C'}}><FiFolder size={32}/></div>
                <GithubCorner href="https://github.com/rishidk22/subStop-c1-hackathon"/>
                <h>SFPD Analysis</h>
                <p>Data analysis of San Francisco Police Department information, visualizing important
                trends and problem areas, as well as a prediction tool to estimate the most likely service
                needed given a location and time.</p>

              <div className="bottom">{stack}</div>
            </div>
        )
    }
}

export default SubstopModal;
