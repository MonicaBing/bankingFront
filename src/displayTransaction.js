import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


class TransactionTable extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            items: 'init', // =- assign null
            isLoaded: false,
            accId: props.match.params.acc_id,
        };
        console.log(props)
        console.log(this.state.accId)
    }

    // async - return a promise rather than a value directly
    // display transaction 
    async componentDidMount(){

        // await - inside async 
        // pause the code until the promiose fulfilled
        // account id not user id
        const items =  await fetch(
            `http://localhost:8080/displayTransaction?receive=${this.state.accId}`, // -------------variable 
            {
                method: "GET",
            }
        )
        // one line, i.e. auto return, if not need to call return a specific value
        // promise - hanst completed but is expected in the future - placeholder
        .then(res => res.json())  // no need await if this is used
        

    // cannot call set state in promise 
    this.setState({ // trigger render, by setting the state of the page
        isLoaded: true, 
        items: items // make sure its returned in the fetch
    }, () => {
        console.log('definitely loaded');
    })
    }

    // need to define function
    render() {
        console.log('render');

        const items = this.state.items;
        const isLoaded = this.state.isLoaded;

        // in case render before fetch, empty result
        if(!isLoaded){ // if not loaded
            console.log('if loop')
            return <div> Loading transactions...</div>;
        }else{
            console.log('else loop')
            return(
                <table class="spec-table" id="here_table">
                    <tr>
                            <th> Account Number</th>
                            <th> Transaction amount</th>
                    </tr>
                    {items.map(item => (
                        <> 
                            <tr>
                                {/* from TransactionDto */}
                                <td>{item.account}</td> 
                                {/* <td>
                                    <Link to={`/users/userId/accounts/${item.account}/`}>{item.account}</Link>
                                </td>  */}
                                
                                <td>{item.amount}</td>
                                {/* <Link to = "/">Back to homepage</Link> */}
                            </tr>
                            
                           
                        </>
                    ))}
               </table>
               
            )
        }
    }
}

export default TransactionTable;
