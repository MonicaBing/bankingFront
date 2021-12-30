import React from "react";


class CreateAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:" ",
            type: " ",
            userId : props.props.user_id // string 
        };
    }

    // set the user name when an event (onChange) is detecetd
    setUserName= (event) => {
        // set state but not save it i.e. no need storage
        this.setState({
            userName: event.target.value,
        })
    }

    setType= (event) => {
        this.setState({
            type: event.target.value,
        })
    }

    // trigger the fetch, i.e. no need the function itself
    // create Account -> AccountRoutes.kt
    createAccount = (event) => {
        // stop it from refreshing for every clicks
        event.preventDefault();

        // remember to take it out from the state
        fetch(
            `http://localhost:8080/createAccount?userName=${this.userId}&type=${this.state.type}`,
            {
                method: "POST",
            }
        ).then(() => console.log("account created"));

    }

    render(){
        return(
            
        <>
        {/* // create account */}
            <form onSubmit={this.createAccount}>
                {/* <label>
                    Username(email):
                    <input value={this.userName} onChange={this.setUserName}/>
                </label> */}
                <label>
                    AccountType:
                    <input value={this.type} onChange={this.setType}/>
                </label>
                <input type="submit" value="create account"/>
            </form>

        </>
        )
    }
}

export default CreateAccount;




// implement all function from kotlin to here, one file
// when to use this.???
// googel preventDeafault?
