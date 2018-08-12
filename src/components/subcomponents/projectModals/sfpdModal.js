import React, {Component} from 'react';
import { Tab, Button } from 'semantic-ui-react';
import GithubCorner from 'react-github-corner';

const about = (
    <p className='work-timeline'>
        The SFPD Dispatch analysis application provided analysis and visualization of SFPD dispatch information provided in CSV format.
        The application provides a variety of visuals to highlight different trends and statistics about the data. Additionally, statistical
        modeling is used (K Nearest Neighbour) to predict the most likely dispatch type based on time and location. The model is trained
        with roughly 20% of the data, while the prediction uses the remaining data to calculate the most likely dispatch, and output the
        type to the user.
    </p>
);

const frontEnd = (
    <p className='work-timeline'>
        The front-end of this application was created from the Bootstrap library. A simple theme was overlaid the application to improve
        the presentation of the application. Then, the styling, images, and routing was slightly modified to better fit the context of the
        application. The visuals were pre-generated, and then displayed as {'<img>'} components on the site.
    </p>
);

const backEnd = (
    <p className='work-timeline'>
        The backend of the application was constructed with Python's Flask web framework. The two main routes in the application are '/',
        which serves as a base route, with no content. Additionally, a '/index.html', route was used to provide the content of the webpage.
        The '/index.html' also allows for a POST request to be made which handles the serving of the prediction of the most likely dispatch
        based on an inputted time and location, through an HTML form. The processing for this is handled in a function which takes the input,
        trains the model, and predicts the the most likely dispatch based on the input.
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
        <Button color='teal'>Bootstrap</Button>
        <Button color='teal'>Heroku</Button>
        <Button color='teal'>Seaborn</Button>
        <Button color='teal'>Pandas</Button>
        <Button color='teal'>Sklearn</Button>
    </div>

);

class SfpdModal extends Component {
    constructor() {
        super();
    }

    render(){
        return (
            <div>
                <GithubCorner href="https://github.com/rishidk22/RunSafe"/>
                {stack}
                <p className='work-timeline'>
                    <br/>
                    <Tab menu={{fluid: true, vertical: true, tabular: true}} panes={panes}/>
                </p>
            </div>
        )
    }
}

export default SfpdModal;