//a connector to the backend used for hitting different endpoints
//1. import axios
import axios from "axios";

export default() => {
    //axios takes in information here
    return axios.create({
        baseUrl: 'http://localhost:8081/'
    })
};