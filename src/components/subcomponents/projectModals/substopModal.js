import React, {Component} from 'react';
import { Tab, Button } from 'semantic-ui-react';
import GithubCorner from 'react-github-corner';

const about = (
    <p className='work-timeline'>
        SubStop is a subscription payment management service used to monitor recurring payments via credit cards bills and Internet
        browsing history. By connecting to Capital One's Nessie API, the service has access to all the transactions that occur on a
        user's bank account. Each transaction has a "recurring" field associated with it, and the service is able to identify
        subscription payments and compile a list. It then cross references the vendor of these payments (Netflix, Amazon, Spotify, etc.)
        with the user's access to websites with similar domains (netflix.com, amazon.com, spotfiy.com, etc.) and will alert the
        user if they have not made use of their paid service in 2 months, thus saving the user money on unused subscription plans.
    </p>
);

const frontEnd = (
    <p className='work-timeline'>
        fjfj
    </p>
);

const backEnd = (
    <p className='work-timeline'>
        jsf;sld
    </p>
);

const panes = [
    { menuItem: 'About', render: () => <Tab.Pane>{about}</Tab.Pane>},
    { menuItem: 'Front-End', render: () => <Tab.Pane>{frontEnd}</Tab.Pane>},
    { menuItem: 'Back-End', render: () => <Tab.Pane>{backEnd}</Tab.Pane>},

];

const stack = (
    <div>
        <Button basic color='teal'>Python</Button>
        <Button basic color='teal'>Flask</Button>
        <Button basic color='teal'>JavaScript</Button>
        <Button basic color='teal'>HTML</Button>
        <Button basic color='teal'>CSS</Button>
        <Button basic color='teal'>AWS S3</Button>
        <Button basic color='teal'>AWS EC2</Button>
    </div>

);



class SubstopModal extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div>
                <GithubCorner href="https://github.com/rishidk22/subStop-c1-hackathon"/>
                {stack}

                <p className='work-timeline'>
                    <br/>
                    <Tab menu={{fluid: true, vertical: true, tabular: true}} panes={panes}/>
                </p>
            </div>
        )
    }
}

export default SubstopModal;