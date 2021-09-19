import './App.css';
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import TransactionTable from './displayTransaction.js'

function HomePage() {
  return (
    <>
      <Router>
        <Route exact path="/" component={TransactionTable} /> 
        {/* <Route exact path="/account/:accountId" component={TransactionTable} />  */}
      </Router>
    </>


  );
}

export default HomePage;

//KATHY 
// display all accounts (kotlin) - account table - extra end point kotlin 
// account url link (account id) to indicvidual accounts
// https://dev.to/dsckiitdev/dynamic-pages-using-react-router-2pm