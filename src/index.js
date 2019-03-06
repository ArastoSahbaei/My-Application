import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import App from "./App"
import decode from "jwt-decode";
import * as serviceWorker from "./serviceWorker"
import rootReducer from "./reducers/rootReducer"
import { userLoggedIn } from "./actions/auth"
import SetAuthorizationHeader from "./utils/SetAuthorizationHeader"



const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))

    if (sessionStorage.JWT) {
        const payload = decode(sessionStorage.JWT)
        const user = { 
            token: sessionStorage.JWT,
            email: payload.sub
        }
        SetAuthorizationHeader(sessionStorage.JWT)
        store.dispatch(userLoggedIn(user))
        console.log(user.token)
        console.log(user.email)
    }

ReactDOM.render(<BrowserRouter>
<Provider store = {store}>
<Route component={App} />
</Provider>
</BrowserRouter>, 
document.getElementById('root')
)














// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
