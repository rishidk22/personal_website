import React, {Component} from 'react';
import { Tab, Button } from 'semantic-ui-react';
import GithubCorner from 'react-github-corner';

const about = (
    <p className='work-timeline'>
        RunSafe is an Android application that uses the Noonlight API to send a distress signal to 911, as well as the
        user's location and status to a list of present emergency contacts. RunSafe is especailly helpful in time intensive
        situations, by removing the need for a longer phone call to 911. The application uses the Noonlight API to immediately
        send the user's location to emergency services, so the time taken to reach the user in a situation is decreased.
    </p>
);

const implementation = (
    <p className='work-timeline'>
        RunSafe communicated with the Noonlight API using Retrofit, an HTTP client for Android and Java. This allows
        the application to send HTTP requests to the Noonlight API, to send a distress signal as well as update the user's
        status in location. Additionally, the applicaiton sends a signal to emergency contacts using Android's SMS Manager.
    </p>
);

const panes = [
    { menuItem: 'About', render: () => <Tab.Pane>{about}</Tab.Pane>},
    { menuItem: 'Development', render: () => <Tab.Pane>{implementation}</Tab.Pane>},
];

const stack = (
    <div>
        <Button color='teal'>Java</Button>
        <Button color='teal'>Android Studio</Button>
        <Button color='teal'>HTTP Request</Button>
        <Button color='teal'>XML</Button>
    </div>

);

class RunsafeModal extends Component {
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

export default RunsafeModal;