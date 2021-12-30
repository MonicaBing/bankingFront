import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import UsersTable from "../users/usersTable";
import CreateUsers from "../users/createUser";
import DepositWithdraw from "../users/depositWithdraw" // previus 
import PaymentId from "./paymentId" // current 


// this is just the render bit, not the actual function

class Users extends React.Component {
    // kathy - set state failure?
    // locate the click and its params

    constructor(props) {
        super(props);
        this.state = {
            items: "init",
            isLoaded: false,
        };
    }

    render() {
        // const props = {
        //     user_id: this.state.userId
        // }
        const userTable = <UsersTable/>
        return (
            <div>
                {userTable} 
                <CreateUsers usersTable={userTable} />
                <DepositWithdraw />
                <PaymentId />
            </div>
        );
    }
}

export default Users;
