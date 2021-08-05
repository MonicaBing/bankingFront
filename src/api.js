// fetch('localhost:8080/createAccount?userName=dan@gmail.com&type=current', {
//     method: 'POST',
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify(blog) // change blog into something i want
// }).then()=>{
//     console.log('i am done');
//     }

// fetch api -> create a button to allow interaction > output

// import { render } from '@testing-library/react';
import React from "react";
import ReactDOM from "react-dom";

// async function postData(url = '', data = {}){
//     const response = await fetch(url, {

//         method: 'POST',
//         mode: 'cors',
//         cache: 'no-cache',
//         credentials: 'same-origin',
//         headers:{
//             'Content-Type': 'application/json'
//         },
//         redirect: 'follow',
//         referrerPolicy: 'no-referrer',
//         body: JSON.stringify(data)
//     });
//     return response.json();
// }

// postData('localhost:8080/createAccount', {userName: 'dan@gmail.com', type: 'current'})
//     .then(data => {
//         console.log(data);
//     });

// const data = {userName: 'dan@gmail.com', type: 'current'};

// fetch('localhost:8080/createAccount',{
//     method: 'POST',
//     headers:{
//         'Content-Type': 'aopplication/json',
//     },
//     body: JSON.stringify(data),
// })
// .then(response => response.json())
// .then(data =>{
//     console.log('Success:', data);
// })
// .catch((error) => {
//     console.error('Error:', error);
// });

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    //   componentDidMount() {
    //     fetch("127.0.0.1:8080/createAccount?userName=dan@gmail.com&type=current")
    //       .then(res =>
    //         res.json())
    //       .then(
    //         (result) => {
    //           this.setState({
    //             isLoaded: true,
    //             items: result.items
    //           });
    //         },
    //         // Note: it's important to handle errors here
    //         // instead of a catch() block so that we don't swallow
    //         // exceptions from actual bugs in components.
    //         (error) => {
    //           this.setState({
    //             isLoaded: true,
    //             error
    //           });
    //         }
    //       )
    //   }

    //   render() {
    //     const { error, isLoaded, items } = this.state;
    //     if (error) {
    //       return <div>Error: {error.message}</div>;
    //     } else if (!isLoaded) {
    //       return <div>Loading...</div>;
    //     } else {
    //       return (
    //         <ul>
    //           {items.map(item => (
    //             <li key={item.id}>
    //               {item.name} {item.price}
    //             </li>
    //           ))}
    //         </ul>
    //       );
    //     }
    //   }
    // }
    componentDidMount() {
        fetch(
            "http://localhost:8080/createAccount?userName=dan@gmail.com&type=current",
            {
                method: "POST",
                mode: "no-cors",
            }
        ).then((res) => {
            console.log(res);

            res.text().then((text) => {
                console.log(text);
            });
        });
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default MyComponent;

// ReactDOM.render(<MyComponent />, document.getElementById('root'));
