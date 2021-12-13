import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import UsersTable from "../users/usersTable";
import CreateUser from "../createUser";
import DepositWithdraw from "../depositWithdraw"
import PaymentId from "../paymentId"


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
        return (
            <div>
                <UsersTable />
                <CreateUser />
                <DepositWithdraw />
                <PaymentId />
            </div>
        );
    }
}

export default Users;
