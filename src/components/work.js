import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Button } from 'semantic-ui-react';

import Particles from './particles'

import 'react-vertical-timeline-component/style.min.css';
import CapitaloneCard from './subcomponents/workCards/capitaloneCard';
import PhysiqCard from './subcomponents/workCards/physiqCard';
import SafetrekCard from './subcomponents/workCards/safetrekCard';
import SwarmCard from './subcomponents/workCards/swarmCard';

const VALUES = ["2018-05-15", "2018-05-14", "2018-03-15", "2017-05-15"];
const divs = [<PhysiqCard/>, <CapitaloneCard/>, <SafetrekCard/>, <SwarmCard/>];

const physiqStack = (
    <div>
        <Button basic color='blue' size='mini'>Python</Button>
        <Button basic color='blue' size='mini'>Flask</Button>
        <Button basic color='blue' size='mini'>React.js</Button>
        <Button basic color='blue' size='mini'>MySQL</Button>
        <Button basic color='blue' size='mini'>Flatbuffers</Button>
        <Button basic color='blue' size='mini'>Cucumber</Button>
        <Button basic color='blue' size='mini'>Vagrant</Button>
        <Button basic color='blue' size='mini'>Docker</Button>
    </div>
);

const capitaloneStack = (
    <div>
        <Button basic color='blue' size='mini'>Python</Button>
        <Button basic color='blue' size='mini'>Flask</Button>
        <Button basic color='blue' size='mini'>Sklearn</Button>
        <Button basic color='blue' size='mini'>Java</Button>
        <Button basic color='blue' size='mini'>Android</Button>
        <Button basic color='blue' size='mini'>Swift</Button>
        <Button basic color='blue' size='mini'>AWS</Button>
        <Button basic color='blue' size='mini'>Dialoglow</Button>
    </div>
);

const safetrekStack = (
    <div>
        <Button basic color='blue' size='mini'>Java</Button>
        <Button basic color='blue' size='mini'>Android</Button>
        <Button basic color='blue' size='mini'>HTTP</Button>
        <Button basic color='blue' size='mini'>JSON</Button>
    </div>
);

const swarmStack = (
    <div>
        <Button basic color='blue' size='mini'>AutoDesk Fusion</Button>
        <Button basic color='blue' size='mini'>AutoDesk Inventor</Button>
        <Button basic color='blue' size='mini'>Arduino</Button>
        <Button basic color='blue' size='mini'>Java</Button>
    </div>
)

class Work extends React.Component {
  state = { value: 0, previous: 0 };

  render() {
    return (
      <div>
        
        <VerticalTimeline animate={true}>
          <VerticalTimelineElement
            className="work-timeline"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img className='physIQ-logo' src='http://www.physiq.com/physiq/cache/file/DEF8C2AA-C299-6484-42440F093783C460.png'/>}
            >
              <h3 className="vertical-timeline-element-title">physIQ</h3>
              <h4 >Software Engineering Intern</h4>
              <p>
                  {physiqStack}<br/>
                  Debugged existing Python integration tests to prevent errors in nightly Jenkins pipeline, and improved test coverage by over 50%
                  <br/><br/>
                  Wrote comprehensive API docs with React.js to automatically generate off Open-API specification, containerized docs with Docker
                  <br/><br/>
                  Developed tooling to import dense, serialized sensor data with Flatbuffers into the clinical system
              </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="work-timeline"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img className='physIQ-logo' src='http://static1.squarespace.com/static/577bd88a414fb56605d6bfa1/t/57800b42579fb375af5239cf/1468009283950/Red-Labs-Mark.png?format=1000w'/>}
            >
              <h3 className="vertical-timeline-element-title">Capital One Labs</h3>
              <h4 >Software Engineering Summit</h4>
              <p>
                  {capitaloneStack}<br/>
                  Created an application to detect and prevent unnecessary subscription payments through user's bank and browser information
                  <br/><br/>
                  Worked to develop small scale projects with a variety of technologies (AWS, Android, Dialogflow, etc.)
              </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="work-timeline"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img className='physIQ-logo' src='https://pbs.twimg.com/profile_images/1012202288016961536/NPt-2WDM_400x400.jpg'/>}
            >
              <h3 className="vertical-timeline-element-title">Noonlight</h3>
              <h4 >Android Development Consultant</h4>
              <p>
                  {safetrekStack} <br/>
                  Constructed an Android Application to send a distress signal with the user's location to 911 and a list of emergency contacts
                  <br/><br/>
                  Designed integrations for Android applications to use social media as a source of emergency contacts
              </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="work-timeline"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img className='physIQ-logo' src='https://media.licdn.com/dms/image/C560BAQEmUph3-faEHw/company-logo_200_200/0?e=2159024400&v=beta&t=poCXAftVD-sw1l2x52CcsttvwovhI0okagNIWT02b3M'/>}
            >
              <h3 className="vertical-timeline-element-title">Swarm Robotix</h3>
              <h4 >Robotics Intern</h4>
              <p>
                  {swarmStack} <br/>
                  Generated prototype designs for a autonomous robotic system to replace AGVs for container transport, reducing container backup by 33%
                  <br/><br/>
                  Constructed proof of concept for robotic system, and led its presentation to industry executives and investors
              </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    );
  }
}

export default Work;
