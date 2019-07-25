import React, {Component} from 'react';
import { Tab, Button } from 'semantic-ui-react';
import GithubCorner from 'react-github-corner';

import {FiFolder} from 'react-icons/fi'

const stack = (
    <div>
        <Button color='teal'>C</Button>
        <Button color='teal'>x86</Button>
    </div>

);

class KernelModal extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="project_modal">
            <div style={{color: '#FFD42C'}}><FiFolder size={32}/></div>
                <GithubCorner href="https://github.com/rishidk22/subStop-c1-hackathon"/>
                <h>Kernel</h>
                <p>Constructed kernel to mimic x86 Linux kernel, with fully implemented terminal,
                virtual memory, and CFS scheduler to allow for optimal program execution. </p>
              <div className="bottom">{stack}</div>
            </div>
        )
    }
}

export default KernelModal;
