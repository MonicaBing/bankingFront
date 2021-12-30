import React from "react";


class DepositWithdraw extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:" ",
            movement: " ",
            type: " "
        };
    }

    // set the user name when an event (onChange) is detecetd
    setUserName= (event) => {
        // set state but not save it i.e. no need storage
        this.setState({
            userName: event.target.value,
        })
    }

    setMovement= (event) => {
        this.setState({
            movement: event.target.value,
        })
    }

    setType= (event) => {
        this.setState({
            type: event.target.value,
        })
    }


    DepositWithdraw = (event) => {
        // stop it from refreshing for every clicks
        event.preventDefault();
        // remember to take it out from the state
        fetch(
            `http://localhost:8080/depositWithdrawByName?userName=${this.state.userName}&movement=${this.state.movement}&type=${this.state.type}`,
            {
                method: "POST",
            }
        ).then(() => console.log("deposit withdraw success"));

    }
    
    render(){
        return(
            
        <>
        {/* // create user */}
            <form onSubmit={this.DepositWithdraw}>
                <label>
                    Username(email):
                    <input value={this.userName} onChange={this.setUserName}/>
                </label>
                <label>
                    Movement:
                    <input value={this.movement} onChange={this.setMovement}/>
                </label>

                <label>
                    Type:
                    <input value={this.type} onChange={this.setType}/>
                </label>

                <input type="submit" value="deposit/ withdraw"/>
            </form>
            </>
        )
    }
}


export default DepositWithdraw;

// works 