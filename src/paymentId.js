import React from "react";


class PaymentId extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            payee:" ",
            receive: " ",
            payment: " ",
            payeeType: " ",
            receiveType: " "
        };
    }

    // set the user name when an event (onChange) is detecetd
    setPayee= (event) => {
        // set state but not save it i.e. no need storage
        this.setState({
            payee: event.target.value,
        })
    }

    setReceive= (event) => {
        this.setState({
            receive: event.target.value,
        })
    }

    setPayment= (event) => {
        this.setState({
            payment: event.target.value,
        })
    }

    setPayeeType = (event) => {
        this.setState({
            payeeType: event.target.value,
        })
    }
    setReceiveType= (event) => {
        this.setState({
            receiveType: event.target.value,
        })
    }


    PaymentId = (event) => {
        // stop it from refreshing for every clicks
        event.preventDefault();
        // remember to take it out from the state
        fetch(
            `http://localhost:8080/paymentId?payee=${this.state.payee}&receive=${this.state.receive}&payment=${this.state.payment}&payeeType=${this.state.payeeType}&receiveType=${this.state.receiveType}`,
            {
                method: "POST",
            }
        ).then(() => console.log("payment id success"));

    }
    
    render(){
        return(
            
        <>
        {/* // create user */}
            <form onSubmit={this.PaymentId}>
                <label>
                    Payee(UUID):
                    <input value={this.payee} onChange={this.setPayee}/>
                </label>
                <label>
                    Receive(UUID):
                    <input value={this.receive} onChange={this.setReceive}/>
                </label>

                <label>
                    Payment:
                    <input value={this.payment} onChange={this.setPayment}/>
                </label>

                <label>
                    Payee Account Type:
                    <input value={this.payeeType} onChange={this.setPayeeType}/>
                </label>

                <label>
                    Receive Account Type:
                    <input value={this.receiveType} onChange={this.setReceiveType}/>
                </label>

                <input type="submit" value="payment via UUID"/>
            </form>
            </>
        )
    }
}


export default PaymentId;

// works 