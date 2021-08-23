import React from "react";
//import ReactDOM from "react-dom";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // error: null,
            // isLoaded: false,
            items: [], // return ite,s 
        };
    }

    // auto display -- sucess compile but need to dislplay them
    // result = list from backend
    componentDidMount(){
        fetch(
            "http://localhost:8080/displayTransaction?receive=53574606-2fdd-4612-85bf-ddda45882865",
            {
                method: "GET",
                // mode: "no-cors",
            }
        )
        .then(res => {
            console.log(res)
            return res
        })
        .then(res => res.json()) // we always want json 
        .then((res) => {
                    this.setState({ // trigger render, by setting the state of the page
                        items: res.items
                    });
            console.log('display transaction request done') 
            console.log(res) 
            console.log(this.items) 
        }) 
    }

    // method not function becasue inside class, no need to define it
    createAccountOnClick(event) {
        fetch(
            "http://localhost:8080/createAccount?userName=dan@gmail.com&type=current",
            {
                method: "POST",
            }
        );
        console.log("account created");
    }

    render() {
        // need to define function

        // try to ignore the message -> add it back stop auto

        // const {items} = this.state;

        const {items} = this.state;
        console.log('1')
        console.log(items); // not working - returnf status not items
        console.log('2')

        return (
            <div>
                <button onClick={this.createAccountOnClick} id="btn">
                    click here!
                </button>

                {/* <ul>
                    {items.map(item=>(
                        <li key={item.id}>
                            {item.payment} 
                        </li>
                    ))}
                </ul> */}

            </div>
        );
    }

}

export default MyComponent;

// KATHY 
// figure out why not rendering after set State 
// display the transaction successfully 
// due with the separate table problem in back end 