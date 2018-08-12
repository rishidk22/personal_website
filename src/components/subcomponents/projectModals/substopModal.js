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
        The frontend of this application was created using JavaScript, HTML, and CSS, to create a chrome extension form. The form
        takes in dummy account information, as well as a phone number and bank account information. The info is then POSTed to the
        Python backend, to create and account, create a list of subscriptions, etc. Additionally, the chrome extension checks if the
        user's subscriptions are being used (by checkng the domain of the accessed websites).
    </p>
);

const backEnd = (
    <p className='work-timeline'>
        The backend is an API created with Python and Flask. This API takes information from a POST request to create a user account,
        and stores the information in JSON form in an Amazon S3 bucket. Then, a list of subscription payments is created using the
        account bank information, and the NESSIE API. This list is then stored as JSON files in the account. This JSON file has a field
        that stores the last time the service was accessed. If too much time passed between uses, the user is notified via text that
        they are not using that particular subscription service.
    </p>
);

const panes = [
    { menuItem: 'About', render: () => <Tab.Pane>{about}</Tab.Pane>},
    { menuItem: 'Front-End', render: () => <Tab.Pane>{frontEnd}</Tab.Pane>},
    { menuItem: 'Back-End', render: () => <Tab.Pane>{backEnd}</Tab.Pane>},

];

const stack = (
    <div>
        <Button color='teal'>Python</Button>
        <Button color='teal'>Flask</Button>
        <Button color='teal'>JavaScript</Button>
        <Button color='teal'>HTML</Button>
        <Button color='teal'>CSS</Button>
        <Button color='teal'>AWS S3</Button>
        <Button color='teal'>AWS EC2</Button>
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