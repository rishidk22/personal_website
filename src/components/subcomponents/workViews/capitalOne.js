import React, {Component} from 'react';

var pStyle = {
  marginRight: '200px'
};

class CapitalOneView extends Component{
  render(){
    return(
      <div className="work-view">
        <h>Software Engineering Intern</h>
        <h3>@</h3>
        <h3>Capital One</h3>
        <h3 style={pStyle}>Jun 2019 - Present</h3>
      </div>
    )

  }
}

export default CapitalOneView;
