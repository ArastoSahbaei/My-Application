import axios from "axios"

export default {
    user: {
        login: (credentials) => 
        axios.post("http://localhost:8080/lagbevakning/users/login", { credentials }).then(res => res.data.user)
    }
}