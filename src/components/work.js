import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CapitaloneCard from './subcomponents/workCards/capitaloneCard';
import PhysiqCard from './subcomponents/workCards/physiqCard';
import SafetrekCard from './subcomponents/workCards/safetrekCard';
import SwarmCard from './subcomponents/workCards/swarmCard';
import { FaBars, FaAngleUp } from 'react-icons/fa';
import styled from 'styled-components';

const VALUES = ["2018-05-15", "2018-05-14", "2018-03-15", "2017-05-15"];
const divs = [<PhysiqCard/>, <CapitaloneCard/>, <SafetrekCard/>, <SwarmCard/>];

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
              <h4 >Chicago, IL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="work-timeline"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img className='physIQ-logo' src='http://static1.squarespace.com/static/577bd88a414fb56605d6bfa1/t/57800b42579fb375af5239cf/1468009283950/Red-Labs-Mark.png?format=1000w'/>}
            >
              <h3 className="vertical-timeline-element-title">Capital One Labs</h3>
              <h4 >Invitational Software Engineering Summit</h4>
              <h5> Arlington, VA </h5>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="work-timeline"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img className='physIQ-logo' src='https://pbs.twimg.com/profile_images/1012202288016961536/NPt-2WDM_400x400.jpg'/>}
            >
              <h3 className="vertical-timeline-element-title">Noonlight</h3>
              <h4 >St. Louis, MI</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="work-timeline"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={<img className='physIQ-logo' src='https://media.licdn.com/dms/image/C560BAQEmUph3-faEHw/company-logo_200_200/0?e=2159024400&v=beta&t=poCXAftVD-sw1l2x52CcsttvwovhI0okagNIWT02b3M'/>}
            >
              <h3 className="vertical-timeline-element-title">Swarm Robotix</h3>
              <h4 >Oswego, IL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    );
  }
}

export default Work;