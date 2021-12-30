import './App.css';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import UsersTable from './users/displayUsers_useless';
import TransactionTable from './displayTransaction';
import Accounts from './accounts/accounts';
// import CreateAccount from './accounts/createAccount.js';
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

// dynamic update  

// problem: there is no linkage between 2 classes, the isLoaded goes into false again (reset itself), therefore no able to refresh the page 

// look at: users, createUsers, usersTable 

// to do: read the documentatino  - REACT, it should be something very fundemental, not very complex, we are missing something 
// add break points and see why it reset itself 
// add it in the refresh page, and the set state place