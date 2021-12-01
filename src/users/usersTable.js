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

    
    // auto display accounts
    async componentDidMount(){
    
        const items =  await fetch( 
            `http://localhost:8080/displayUsers`, 
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
        console.log('display users success');
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
                            <th> User ID</th>
                            <th> Name</th>
                            <th> User Name</th>
                    </tr>
                    {items.map(item => (
                        <> 
                            <tr>
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

