
// javascript entry point

// import { render } from '@testing-library/react';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import postData from './api.js';

// postData('localhost:8080/createAccount', {userName: 'dan@gmail.com', type: 'current'})
//     .then(data => {
//         console.log(data);
//     })



// ReactDOM.render(<postData />, document.getElementById('root'));

// // const myfirstelement = <h1>Hello React!</h1>

// const myelement = (
//   <div>
//     <h1>I am a Header.</h1>
//     <h1>I am a Header too.</h1>
//     <p> So what am I</p>
//     <li>massive rip</li>
//   </div>
// );



// class Car extends React.Component {
//   constructor(props){ // argumetns
//     super(props); // initiate parents constructor
//     this.state = {
//       brand : 'Ford',
//       model : 'Mustang',
//       color : 'red',
//       year: '1964'
//     };
//   }
//   changeColor = () => {
//     this.setState({color: 'blue'});
//   }

//   render(){
//     return(
//       <div>
//         <h1> My {this.state.brand} </h1>
//         <p>
//           It is a {this.state.color}
//            {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button 
//           type = 'button'
//           onClick={this.changeColor}
//           >
//             Change color
//         </button>
//       </div>
//     )  
// };
// }

// const myelement2 = <Car brand = 'Ford'/>;

// class MyForm extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = { username: ''};
//   }

//   myChangeHandler = (event) => {
//     this.setState({username: event.target.value});
//   }

//   render(){
//     return(
//       <form>
//         <h1> Hello {this.state.username}</h1>
//         <p> Enter your name:</p>
//         <input 
//           type = "text"
//           onChange = {this.myChangeHandler}
//         />
//       </form>
//     );
//   }
// }



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './login.js';
import MyComponent from './api.js'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Login />
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();