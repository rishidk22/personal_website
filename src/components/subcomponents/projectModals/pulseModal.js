import React, {Component} from 'react';
import { Tab, Button } from 'semantic-ui-react';
import GithubCorner from 'react-github-corner';

import {FiFolder} from 'react-icons/fi'

const stack = (
    <div>
        <Button color='teal'>React.js</Button>
        <Button color='teal'>Python</Button>
        <Button color='teal'>Flask</Button>
        <Button color='teal'>SQL</Button>
    </div>

);

class PulseModal extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="project_modal">
            <div style={{color: '#FFD42C'}}><FiFolder size={32}/></div>
                <GithubCorner href="https://github.com/rishidk22/subStop-c1-hackathon"/>
                <h>Pulse Webapp</h>
                <p>Web application to display event information about ECE Pulse event as well as
                store and query user registration information.</p>

              <div className="bottom">{stack}</div>
            </div>
        )
    }
}

export default PulseModal;
