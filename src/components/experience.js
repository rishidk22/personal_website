import React, {Component} from 'react';
import '../App.css'

import './styles.css'
import './slider-animations.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const content = [
  {position: 'Software Engineering Intern', company: '@ Capital One', dates: 'May 2019 - Present'},
  {position: 'Web Director', company: '@ ECE Pulse', dates: 'April 2019 - Present'},
  {position: 'Software Engineering Intern', company: '@ physIQ', dates: 'May 2018 - Aug 2018'}];

function WorkView({ items }) {
    return items.map(item => (
        <h1>{item.company}</h1>
    ));
}

const pStyle = {
};


class Experience extends Component {
    render() {
        return (
          <div>
            <Slider className="slider-wrapper">
              {content.map((item, index) => (
                <div
                  key={index}
                  className="slider-content"
                >
                  <div className="work-views">
                    <h>{item.position}</h>
                    <h3>{item.company}</h3>
                    <h4 style={pStyle}>{item.dates}</h4>
                    <ul>
                      <li>Coffee</li>
                      <li>Tea</li>
                      <li>Milk</li>
                    </ul>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        );
    }
}

export default Experience;
