import React from 'react'
import NavigationBar from "../../component/navigation/NavigationBar"

/* const viProvar = () => {
    alert("WELCOME " + sessionStorage.getItem("email"))
    console.log(sessionStorage.getItem("email"))
} */

const DashBoardPage = () => (

    <div>
        <NavigationBar />
        <h1>You're AUTHENTICATED !!</h1>
    </div>
)

export default DashBoardPage