import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


class UsersTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: 'init', 
            isLoaded: false,
        };
    }

    // auto display users
    async componentDidMount(){
        const items =  await fetch(
            "http://localhost:8080/displayUsers", 
            {
                method: "GET",
            }
        )
        .then(res => res.json())  // no need await if this is used

    // cannot call set state in promise 
    this.setState({ // trigger render, by setting the state of the page
        isLoaded: true, 
        items: items // make sure its returned in the fetch
    }, () => {
        console.log('display users success');
    })
    }

    // need to define function
    render() {
        console.log('display user render');

        const items = this.state.items;
        const isLoaded = this.state.isLoaded;

        // in case render before fetch, empty result
        if(!isLoaded){ // if not loaded
            console.log('display users if loop')
            return <div> Loading users...</div>;
        }else{
            console.log('display users else loop')
            return(
                <table class="spec-table" id="here_table">
                    <tr>
                            <th> User ID</th>
                            <th> Name</th>
                            <th> User Name</th>
                    </tr>
                    {items.map(item => (
                        <> 
                            <tr>
                                {/* from TransactionDto */}
  
                                {/* <td>
                                {/* <Link to={`/name/${index + 1}`}>{person.name}'s Page</Link> */}
                                    {/* <Link to={`/id/${item.id}`}>{item.id}</Link>
                                </td> */} 
                                <td>
                                    <Link to={`/users/${item.id}/accounts`}>{item.id}</Link>
                                </td> 
                                <td>{item.name}</td>
                                <td>{item.userName}</td>
                                
                            </tr>
                           
                        </>
                    ))}
               </table>
               
            )
        }
    }
}

export default UsersTable;

// display UUID - backend problem
