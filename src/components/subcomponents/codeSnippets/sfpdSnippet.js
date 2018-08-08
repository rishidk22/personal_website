import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { railscasts } from "react-syntax-highlighter/styles/hljs";

export default class SfpdSnippet extends React.Component {
    render() {
        const CodeString = `def likelyDispatch():
#Makes sure that method is only called when form data is submitted as a POST request
if request.method == "POST":

    #Retrieve data from submitted form
    latitude = request.form.get("latitude")
    longitude = request.form.get("longitude")
    time = request.form.get("time")

    #Ensure data is within given GPS coordinates
    if (37.70 <= float(latitude) <= 37.84) and (-122.52 <= float(longitude) <= -122.36):

        try:
            #Uses K Nearest Neighbour to predict most likely dispatch type
            likelyDispatch = mostLikelyDispatch(latitude, longitude, time)
            return render_template('index.html', response = 'Dispatch: ' + likelyDispatch)

        except Exception as exception:
            #In case time is inputted in a wrong format, or other error occurs
            return render_template('index.html', response =  str(exception))         
    else:
        #Print error message if Coordinates are out of range
        return render_template('index.html', response = 'Enter GPS Coordinates between (37.70, -122.52) and (37.84, -122.36)')
        
if __name__ == "__main__":
    app.run(debug = True)
`;
        return (
            <SyntaxHighlighter
                language="python"
                style={railscasts}
            >
                {CodeString}
            </SyntaxHighlighter>
        );
    }
}
