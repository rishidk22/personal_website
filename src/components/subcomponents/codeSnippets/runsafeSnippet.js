import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { railscasts } from "react-syntax-highlighter/styles/hljs";

export default class RunsafeSnippet extends React.Component {
    render() {
        const CodeString = `if (token==null) {
Uri uri = getIntent().getData();
System.out.println("yay!");
if (uri != null && uri.toString().startsWith(redirectUri)) {
    final String code = uri.getQueryParameter("code");
    System.out.println("code:" + code);
    Toast.makeText(this, code, Toast.LENGTH_SHORT).show();

    if (code != null) {
        //get access token
        Retrofit.Builder builder = new Retrofit.Builder()
                .baseUrl("https://api-sandbox.safetrek.io/v1/")
                .addConverterFactory(GsonConverterFactory.create());

        Retrofit retrofit = builder.build();

        //String basicAuth = "Basic" + "base64(" + client_id + ":" + client_secret);
        Client client = retrofit.create(Client.class);

        String clientIdSecret = String.format("%s:%s", client_id, client_secret);
        String authString = Base64.encodeToString(clientIdSecret.getBytes(), Base64.NO_WRAP);
        System.out.println(authString);
`;
        return (
            <SyntaxHighlighter
                language="java"
                style={railscasts}
            >
                {CodeString}
            </SyntaxHighlighter>
        );
    }
}
