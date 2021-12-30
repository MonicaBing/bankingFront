import React from "react";
import UsersTable from "./usersTable";

class CreateUsers extends React.Component {

    constructor(props) {
        super(props);
        this.usersTable = props.usersTable;
        this.state = {
            userName:" ",
            name: " ",
        };
    }

    // set the user name when an event (onChange) is detecetd
    setUserName= (event) => {
        // set state but not save it i.e. no need storage
        this.setState({
            userName: event.target.value,
        })
    }

    setName= (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    // ------------------
    refreshPage(){
        // window.location.reload(false);
        this.usersTable.refreshPage()
        // this.usersTable.componentDidMount()

    }

    // trigger the fetch, i.e. no need the function itself
    // create Account -> AccountRoutes.kt
    createUser = (event) => {
        // stop it from refreshing for every clicks
        event.preventDefault();
        // remember to take it out from the state
        fetch(
            `http://localhost:8080/createUser?userName=${this.state.userName}&name=${this.state.name}`,
            {
                method: "POST",
            }
        ).then(() => {
            console.log("user created")
            this.refreshPage() // ---------------
        }
        );
        
    }
    
    render(){
        return(
            
        <>
        {/* // create user */}
            <form onSubmit={this.createUser}  >
                <label>
                    Username(email):
                    <input value={this.userName} onChange={this.setUserName}/>
                </label>
                <label>
                    Name:
                    <input value={this.type} onChange={this.setName}/>
                </label>
                <input type="submit" value="create user"/>
            </form>


        </>
        )
    }
}

export default CreateUsers;




// implement all function from kotlin to here, one file
// when to use this.???
// googel preventDeafault?










































// import React, { useState } from "react";

// const CreateUser = () => {
// //function 

//     //   const userId = '';
//     const [userId, setuserId] = useState("");
//     const submituserId = (event) => {
//         // store userId to localStorage
//         event.preventDefault();
//         sessionStorage.setItem(`userId`, userId);
//         console.log(userId);
//     };

//     const [type, setType] = useState("");
//     const submitType = (event) => {
//         // store userId to localStorage
//         event.preventDefault();
//         sessionStorage.setItem(`type`, type);
//         console.log(type);
//     };

//     const handleChangeUserId = (event) => {
//         setuserId(event.target.value);
//     };

//     const handleChangeType = (event) => {
//         setType(event.target.value);
//     };

//     // logout 

//     // const logout = () => {
//     //     // remove cookie 
//     //     sessionStorage.removeItem('userId');
//     // }

//     // display
//     // username - email, type 

//     return (
//         // this is one element
//         <div className="userId"> 
//             {/* <form onSubmit={submituserId}>
//                 <label>
//                     Username(email) 
//                     <input value={userId} onChange={handleChangeUserId} />
//                 </label>
//                 <input type="submit" value="userId" />

//             </form>

//             <form onSubmit={submitType}>
//                 <label>
//                     Type 
//                     <input value={type} onChange={handleChangeType} />
//                 </label>
//                 <input type="submit" value="type" />
//             </form>

//     <button onClick={logout}> Logout</button>  */}
//             <form onSubmit={this.createAccount}>
//                 <label>
//                     Username(email):
//                     <input value={this.userName} onChange={this.setUserName}/>
//                 </label>
//                 <label>
//                     AccountType:
//                     <input value={this.type} onChange={this.setType}/>
//                 </label>
//                 <input type="submit" value="create account"/>
//             </form>


//         </div>
        

//     );
// };

// export default CreateUser;

// // export it to homePage.js
