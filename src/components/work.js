import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";

import CapitaloneCard from './subcomponents/workCards/capitaloneCard';
import PhysiqCard from './subcomponents/workCards/physiqCard';
import SafetrekCard from './subcomponents/workCards/safetrekCard';
import SwarmCard from './subcomponents/workCards/swarmCard';

const VALUES = ["2018-05-15", "2018-05-14", "2018-03-15", "2017-05-15"];
const divs = [<PhysiqCard/>, <CapitaloneCard/>, <SafetrekCard/>, <SwarmCard/>];

class Work extends React.Component {
  state = { value: 0, previous: 0 };

  getLabel(date, index) {
    var temp = new Date(date).toDateString().substring(4);

    if (temp == "May 14 2018") {
      return "physIQ";
    } else if (temp == "May 13 2018") {
      return "Capital One";
    } else if (temp == "Mar 14 2018") {
      return "Noonlight";
    } else if (temp == "May 14 2017") {
      return "Swarm Robotix";
    }
  }

  render() {
    return (
      <div>
        <div style={{ width: "60%", height: "100px", margin: "0 auto" }}>
          <HorizontalTimeline
            index={this.state.value}
            getLabel={(data, index) => this.getLabel(data, index)}
            indexClick={index => {
              this.setState({ value: index, previous: this.state.value });
            }}
            values={VALUES}
          />
        </div>
        <div className="text-center">
          {divs[this.state.value]}
        </div>
      </div>
    );
  }
}

export default Work;