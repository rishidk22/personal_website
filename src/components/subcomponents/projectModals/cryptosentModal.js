import React, {Component} from 'react';
import { Tab, Button } from 'semantic-ui-react';
import GithubCorner from 'react-github-corner';

import {FiFolder} from 'react-icons/fi'

const stack = (
    <div>
        <Button color='teal'>Python</Button>
        <Button color='teal'>React.js</Button>
        <Button color='teal'>NLP</Button>
        <Button color='teal'>IBM Watson</Button>
    </div>

);

class CryptoModal extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div className="project_modal">
            <div style={{color: '#FFD42C'}}><FiFolder size={32}/></div>
                <GithubCorner href="https://github.com/rishidk22/subStop-c1-hackathon"/>
                <h>Crypto Price Prediction</h>
                <p>Cryptocurrency price predictor, leveraging IBM Watson to run sentiment analysis on
                bitcoin articles, and correlating them with previous price inflection.</p>

              <div className="bottom">{stack}</div>
            </div>
        )
    }
}

export default CryptoModal;
