import React from "react";


class CreateAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName:" ",
            type: " ",
            movement: 0,
            receiveId: " ", // user ID, not account id
            payeeId : " ",
            payment : 0,
            payeeType : " ",
            receiveType: " ",

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

    // setMovement=(event) => {
    //     this.setState({
    //         movement: event.target.value,
    //     })
    // }

    // setReceiveId = (event) =>{
    //     this.setState({
    //         receiveId: event.target.value,
    //     })
    // }

    // setPayeeId = (event)=>{
    //     this.setState({
    //         payeeId: event.target.value,
    //     })

    // }

    // setPayment = (event) =>{
    //     this.setState({
    //         payment: event.target.value,
    //     })
    // }

    // setReceiveType = (event)=>{
    //     this.setState({
    //         receiveType: event.target.value,
    //     })
    // }

    // setPayeeType = (event)=>{
    //     this.setState({
    //         receiveType: event.target.value,
    //     })
    // }



    // trigger the fetch, i.e. no need the function itself
    // create Account -> AccountRoutes.kt
    createAccount = (event) => {
        // stop it from refreshing for every clicks
        event.preventDefault();

        // remember to take it out from the state
        fetch(
            `http://localhost:8080/createAccount?userName=${this.state.userName}&type=${this.state.type}`,
            {
                method: "POST",
            }
        ).then(() => console.log("account created"));

    }
    
    // get accoutn for user - get

    // deposit withftaw by name - post 
    // depositWithdrawByName = (event) => {
    //     event.preventDefault();

    //     // kathy@gmail.com, 5, current 
    //     fetch(
    //         `http://localhost:8080/depositWithdrawByName?userName=${this.state.userName}&movement=${this.state.movement}&type=${this.type}`,
    //         {
    //             method: "POST",
    //         }
    //     ).then(() => console.log("deposit withdraw by name success"));

    // }

    // // payment id 
    // paymentId = (event) => {
    //     event.preventDefault();

    //     // fa2e3041-c130-4663-aa5e-4b4e5bad9bbe, 9a0285aa-0357-41d0-b07e-c45fc3e4ddf5
    //     // 1, current, current 
    //     fetch(
    //         `http://localhost:8080/paymentId?receive=${this.state.receiveId}&payee=${this.state.payeeId}&payment=${this.state.payment}&payeeType=${this.state.payeeType}&receiveType=${this.state.receiveType}`,
    //         {
    //             method: "POST",
    //         }
    //     ).then(() => console.log("payment ID success"));

    // }

    // payment name - post - do this now
    // paymentName = (event) => {
    //     event.preventDefault();

    //     // kathy@gmail.com, dan@gmail.com, 5, current, current

    //     fetch(
    //         `http://localhost:8080/paymentName?payee={this.state.receiveId}&receive={this.state.receiveId}&payment={this.state.receiveId}&payeeType={this.state.receiveId}&receiveType={this.state.receiveId}`,
    //         {
    //             method: "POST",
    //         }
    //     ).then(() => console.log("payment ID success"));

    // }

    // net value - get 


    
    render(){
        return(
            
        <>
        {/* // create account */}
            <form onSubmit={this.createAccount}>
                <label>
                    Username(email):
                    <input value={this.userName} onChange={this.setUserName}/>
                </label>
                <label>
                    AccountType:
                    <input value={this.type} onChange={this.setType}/>
                </label>
                <input type="submit" value="create account"/>
            </form>

{/* 
        deposit withdraw by name   */}
            {/* <form onSubmit={this.depositWithdrawByName}>
                <label>
                    Username:
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
                <input type="submit" value="deposit withdraw by name"/>
            </form> */}

            {/* 
        payment ID   */}
            {/* <form onSubmit={this.paymentId}>
                <label>
                    Receive ID :
                    <input value={this.receiverId} onChange={this.setReceiveId}/>
                </label>
                <label>
                    Payee ID :
                    <input value={this.payeeId} onChange={this.setPayeeId}/>
                </label>
                <label>
                    Payment:
                    <input value={this.payment} onChange={this.setPayment}/>
                </label>
                <label>
                    Receive Type :
                    <input value={this.receiveType} onChange={this.setReceiveType}/>
                </label>
                <label>
                    Payee Type:
                    <input value={this.payeeType} onChange={this.setPayeeType}/>
                </label>
                <input type="submit" value="payment ID"/>
            </form> */}

        </>
        )
    }
}

export default CreateAccount;




// implement all function from kotlin to here, one file
// when to use this.???
// googel preventDeafault?
