import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


class AccountsTable extends React.Component {

    // kathy - set state failure?
    // locate the click and its params

    constructor(props) {
        super(props);
        this.state = {
            items: 'init', 
            isLoaded: false,
            userId : props.props.user_id // string 
            //fa2e3041-c130-4663-aa5e-4b4e5bad9bbe
        };
        // console.log(props)
        // console.log(props.match.params.user_id)
        // console.log(this.state.userId)
    }

    
    // auto display accounts
    async componentDidMount(){
    
        const items =  await fetch( 
            // `http://localhost:8080/displayAccounts`, 
            `http://localhost:8080/displayAccounts?userId=${this.state.userId}`, 
            {
                method: "GET",
            }
        )
        .then(res => res.json())  

    // cannot call set state in promise 
    this.setState({ 
        isLoaded: true, 
        items: items 
    }, () => {
        console.log('display accounts success');
    })
    }

    // need to define function
    render() {
        console.log('display accounts render');

        const items = this.state.items;
        const isLoaded = this.state.isLoaded;

        // in case render before fetch, empty result
        if(!isLoaded){ // if not loaded
            console.log('display users if loop')
            return <div> Loading accounts...</div>;
        }else{
            console.log('display accounts else loop')
            return(
                <table class="spec-table" id="here_table">
                    <tr>
                            <th> Account ID</th>
                            <th> User ID</th>
                            <th> Account Type</th>
                            <th> Balance</th>
                    </tr>
                    {items.map(item => (
                        <> 
                            <tr>
                                <td>
                                    <Link to={`/users/${item.userId}/accounts/${item.id}`}>{item.id}</Link> 
                                </td> 
                                <td>{item.userId}</td>
                                <td>{item.type}</td>
                                <td>{item.balance}</td>
                                
                            </tr>
                           
                        </>
                    ))}
                    
               </table>

               
            )
        }
    }
}

export default AccountsTable;

