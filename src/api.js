
import React from "react";
//import ReactDOM from "react-dom";

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    };
    componentDidMount(){
        fetch(
            "http://localhost:8080/createAccount?userName=dan@gmail.com&type=current",
            {
                method: "POST",
                // mode: "no-cors",
            }
        ).then((res) => {
            console.log(res);
            res.text().then((text) => {
                this.setState({
                    isLoaded: true,
                    message: text,
                });
            });
        });
    }

    render() {
        window.onload=function(){

            const buttonElement = document.getElementById('btn');
        
            function myFunction(opts){
                fetch(
                    "http://localhost:8080/createAccount?userName=dan@gmail.com&type=current",
                    {
                        method: "POST",
                    }
                )
                console.log('done')
            };
            // to make sure it is not null
            if (buttonElement){
            buttonElement.addEventListener('click', myFunction)};
        }

        const { error, isLoaded, message } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            console.log(`message: ${message}`);
            return (
                <div>
                    
                    link the request to the button
                    <button id = 'btn'> click here! </button>
                    <p id="funcOutput"></p>
                    <p id="handleEvtOutput"></p>

                    <h3>status of the request</h3>
                    <p>{ message }</p>
                </div>
            )
        }
    }
}

export default MyComponent;


// add button send request 