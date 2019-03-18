import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../../src/constants/types"
import api from "../../src/services/api"
import SetAuthorizationHeader from "../utils/SetAuthorizationHeader"

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    user
})

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT
  })

export const login = credentials => dispatch => 
api.user.login(credentials).then(user => {
    sessionStorage.JWT = user
    sessionStorage.email = credentials.email
    SetAuthorizationHeader(user.token)
    dispatch(userLoggedIn(user))
    console.log("RECIEVED TOKEN IN SESSIONSTORAGE: " + user)
})

export const logout = () => dispatch => {
    sessionStorage.removeItem("JWT")
    sessionStorage.removeItem("email")
    sessionStorage.removeItem("id")
    SetAuthorizationHeader()
    dispatch(userLoggedOut())
  }