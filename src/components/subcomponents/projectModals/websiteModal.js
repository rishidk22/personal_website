import React, {Component} from 'react';
import { Tab, Button } from 'semantic-ui-react';
import GithubCorner from 'react-github-corner';

import {FiFolder} from 'react-icons/fi'

const stack = (
    <div>
        <Button color='teal'>Python</Button>
        <Button color='teal'>Flask</Button>
        <Button color='teal'>JavaScript</Button>
        <Button color='teal'>HTML</Button>
        <Button color='teal'>AWS S3</Button>
        <Button color='teal'>AWS EC2</Button>
    </div>

);

class PersonalWebsiteModal extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="project_modal">
            <div style={{color: '#FFD42C'}}><FiFolder size={32}/></div>
                <GithubCorner href="https://github.com/rishidk22/subStop-c1-hackathon"/>
                <h>Personal Website</h>
                <p>dfhjakldshfjalksdfjkas;dfjkal;sdjfkasl;dfjkasdl;fjas;dfjka;sdjfka;sdjfkad;sfj
                jfkd;lasdjf;lasdjf
                dfjaskdf;jasd;lfajksd
                dfjkas;dfjkasd;dfhjakldshfjalksdfjkasjaksfd;lajsdklf;a</p>

              <div className="bottom">{stack}</div>
            </div>
        )
    }
}

export default PersonalWebsiteModal;
