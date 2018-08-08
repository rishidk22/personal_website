import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { railscasts } from "react-syntax-highlighter/styles/hljs";

export default class SubspotSnippet extends React.Component {
    render() {
        const CodeString = `#Sets subscription list for account
@app.route("/setSubscriptions", methods = ['POST']) #username, body  GETS all subscriptions
def setSubscriptions():
    username = getJSON(request.data).get("username")
    ###CONFIGURE BODY
    body = getJSON(request.data)
    del body['username']
    for item in getBills(getCustomerID(username)):
        print item
        if "recurring_date" in item:
            filename = createSubscription(item.get("payee"), body)
            uploadToS3Account(username, filename)
            os.remove(filename)
    return Response(status = 200)

#Route to create account in S3
@app.route("/createAccount", methods = ['POST'])
def createAccount():
    username = getJSON(request.data).get("username")
    body =  getJSON(request.data)
    del body['username']
    with open("ACCOUNT.json","w") as f:
        json.dump(body, f)
    uploadToS3Account(username, "ACCOUNT.json")
    os.remove("ACCOUNT.json")
    return Response(status = 200)
`;
        return (
            <SyntaxHighlighter
                language="python"
                style={railscasts}
                showLineNumbers="true"
            >
                {CodeString}
            </SyntaxHighlighter>
        );
    }
}
