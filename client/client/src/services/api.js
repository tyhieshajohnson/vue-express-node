//a connector to the backend
//used for hitting different endpoints
import axios from "axios";

export default() => {
    return axios.create({
        baseUrl: 'http://localhost:8081/'
    })
};