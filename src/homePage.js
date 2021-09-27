import './App.css';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import UsersTable from './displayUsers';
import TransactionTable from './displayTransaction';
import AccountsTable from './displayAccounts';

function HomePage() {
  return (
    <>
      <Router>
        <Route exact path="/" component={UsersTable} /> 
        {/* :user_id is the string for item.id in the fetch  */}
        <Route path = "/users/:user_id/accounts" component={AccountsTable}/> 
{/* this is the last one */}
        <Route path = "/users/:user_id/accounts/:acc_id" component={TransactionTable}/>
       
      </Router>
    </>


  );
}

export default HomePage;

// 2 API calls for both receive and payee 
// sort them out in time order - all of them as a whole 
// tidy up the url for consistency