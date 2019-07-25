import React, {Component} from 'react';
import '../App.css';
import { Card, Modal } from 'semantic-ui-react';

import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';

import GithubCorner from 'react-github-corner';

import RunsafeModal from './subcomponents/projectModals/runsafeModal';
import SfpdModal from './subcomponents/projectModals/sfpdModal';
import SubstopModal from './subcomponents/projectModals/substopModal';
import PulseModal from './subcomponents/projectModals/pulseModal'
import KernelModal from './subcomponents/projectModals/kernelModal'
import CryptoModal from './subcomponents/projectModals/cryptosentModal'


const inlineStyle = {
  modal : {
    marginTop: '0px !important',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

const divStyle = {
    position: 'relative'
};

class Projects extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div  className="card_group_margins" style={divStyle}>
            <br/>
                <Card.Group stackable={true} doubling={true} itemsPerRow={3}>
                  <Card raised={true}>
                      <Card.Content>
                        <GithubCorner href="https://github.com/rishidk22/"/>
                        <KernelModal/>
                      </Card.Content>
                  </Card>

                  <Card raised={true}>
                      <Card.Content>
                        <GithubCorner href="https://github.com/rishidk22/"/>
                        <CryptoModal/>
                      </Card.Content>
                  </Card>

                  <Card raised={true}>
                      <Card.Content>
                        <GithubCorner href="https://github.com/rishidk22/subStop-c1-hackathon"/>
                        <SubstopModal/>
                      </Card.Content>
                  </Card>

                  <Card raised={true}>
                      <Card.Content>
                        <GithubCorner href="https://github.com/rishidk22/pulse_countdown_page"/>
                        <PulseModal/>
                      </Card.Content>
                  </Card>

                  <Card raised={true}>
                      <Card.Content>
                        <GithubCorner href="https://github.com/rishidk22/SFPDDataAnalysis"/>
                        <SfpdModal/>
                      </Card.Content>
                  </Card>

                  <Card raised={true}>
                      <Card.Content>
                        <GithubCorner href="https://github.com/rishidk22/RunSafe"/>
                        <RunsafeModal/>
                      </Card.Content>
                  </Card>

                </Card.Group>
            </div>
        )
    }

}

export default Projects;
