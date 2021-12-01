import './App.css';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import UsersTable from './users/displayUsers';
import TransactionTable from './displayTransaction';
import Accounts from './accounts/accounts';
import CreateAccount from './createAccount.js';
import Users from './users/users'

function HomePage() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Users} />  
        {/* :user_id is the string for item.id in the fetch  */}
        <Route path = "/users/:user_id/accounts" component={Accounts}/> 
{/* this is the last one */}
        <Route path = "/users/:user_id/accounts/:acc_id" component={TransactionTable}/>
       
      </Router>

      {/* <CreateUser/> */}
      {/* <CreateAccount/> */}
      

    </>
  );
}

export default HomePage;

// 2 API calls for both receive and payee 
// sort them out in time order - all of them as a whole 
// tidy up the url for consistency

// add a back button?
// add create user, chec on line 13 