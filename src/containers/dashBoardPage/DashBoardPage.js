import React from 'react'

const viProvar = () => {
    alert("WELCOME " + sessionStorage.getItem("email"))
    console.log(sessionStorage.getItem("email"))
}

const DashBoardPage = () => (

    <div>
        <h1>You're AUTHENTICATED !!</h1>
        {viProvar()}
    </div>
)

export default DashBoardPage