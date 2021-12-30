import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import AccountsTable from "./accountTable";
import CreateAccount from "./createAccount"; // this doesnt work 

class Accounts extends React.Component {
    // kathy - set state failure?
    // locate the click and its params

    constructor(props) {
        super(props);
        this.state = {
            items: "init",
            isLoaded: false,
            userId: props.match.params.user_id, // string
            //fa2e3041-c130-4663-aa5e-4b4e5bad9bbe
        };
        console.log(props);
        console.log(props.match.params.user_id);
        console.log(this.state.userId);
    }

    render() {
        const props = {
            user_id: this.state.userId
        }
        return (
            <div>
                <AccountsTable props = {props}/>
                <CreateAccount props = {props}/>
            </div>
        );
    }
}

export default Accounts;
