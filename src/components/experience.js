import React, {Component} from 'react';
import '../App.css'

import {Button } from 'semantic-ui-react';

import './styles.css'
import './slider-animations.css'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const capitalOne =  { position: 'Software Engineering Intern',
                      company: '@ Capital One',
                      dates: 'May 2019 - Present | McLean, VA',
                      li1: '> Improved data ingestion for "Purple Rain" SIEM platform, handling 8 petabytes of security information',
                      li2: '> Migrated ingestion from Apache Spark to Elastic Logstash to improve resiliency of ingestion platform',
                      li3: '> Created scalable monitoring for data rules engine to collect data on Postgres queries and Quartz scheduling ',
                      li4: '> Built ETL Docker app to extract Windows event logs from Kafka and load into Elasticsearch using Logstash'
                    };
const capitalOneStack = (
    <div>
        <Button color='teal'>Java</Button>
        <Button color='teal'>Python</Button>
        <Button color='teal'>Kafka</Button>
        <Button color='teal'>Elasticsearch</Button>
        <Button color='teal'>Kibana</Button>
        <Button color='teal'>Logstash</Button>
        <Button color='teal'>Docker</Button>
        <Button color='teal'>PostgreSQL</Button>
    </div>

);



const pulse =  { position: 'Web Director',
                  company: '@ ECE Pulse',
                  dates: 'April 2019 - Present',
                  li1: '> Managed team to develop React.js web application to display ECE Pulse event information',
                  li2: '> Independently designed website interface to improve presentation of event information from previous year',
                  li3: '> Built Flask backend to store registration information and event interest data in a SQL Database',
                };

const pulseStack = (
    <div>
        <Button color='teal'>Python</Button>
        <Button color='teal'>Flask</Button>
        <Button color='teal'>React.js</Button>
        <Button color='teal'>SQLite</Button>
        <Button color='teal'>Heroku</Button>
        <Button color='teal'>Amazon S3</Button>
    </div>

);

const physIQ =  { position: 'Software Engineering Intern',
                  company: '@ physIQ',
                  dates: 'May 2018 - Aug 2018',
                  li1: '> Worked on API team to improve test coverage and prototype data streaming from clients to internal database',
                  li2: '> Developed BDD integration tests using Python SDK, improving test coverage by more than 50%',
                  li3: '> Built tooling to import sensor data and generate serialized data models with Google Flatbuffers library',
                  li4: '> Created React.js application to generate API documentation based on the Open-API (Swagger) specification'
                };

const physIQStack = (
    <div>
        <Button color='teal'>Python</Button>
        <Button color='teal'>Flask</Button>
        <Button color='teal'>Kotlin</Button>
        <Button color='teal'>React.js</Button>
        <Button color='teal'>Docker</Button>
        <Button color='teal'>Cucumber</Button>
        <Button color='teal'>Gherkin</Button>
        <Button color='teal'>MySQL</Button>
        <Button color='teal'>Flatbuffers</Button>
    </div>

);


const content = [capitalOne, pulse, physIQ];
function WorkView({ items }) {
    return items.map(item => (
        <h1>{item.company}</h1>
    ));
}

const cars = [capitalOneStack, pulseStack, physIQStack];


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
                    <h4>{item.dates}</h4>
                    <ul>
                      <li>{item.li1}</li>
                      <li>{item.li2}</li>
                      <li>{item.li3}</li>
                      <li>{item.li4}</li>
                    </ul>
                    <div className="work_bottom">{cars[index]}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        );
    }
}

export default Experience;
