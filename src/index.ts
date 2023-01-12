import express from "express";
import cors from "cors"
import axios from 'axios';

const app = express()
app.use(cors())
app.use(express.json())

const PORT = 4000

app.get("/", (_, res) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set('grant_type', 'client_credentials');
    encodedParams.set('client_id', 'test_O3TurocdaQbXqlhqKHgAsmv4tYtdB2u7tHE')
    encodedParams.set('client_secret', 'test_iVUC1dadRhpvliE9SEuiPrrGji47KvelcNLuTtdEfaRxbYkAgaa1I5SwkKM4vQy7ZtM3kyV5IyTXzL2HdRKcNutP25zWFVZibIZVfwAzWMGd7Yfh27Dmhtm0On7')

    const options = {
        method: 'POST',
        url: 'https://test.instamojo.com/oauth2/token/',
        headers: {
            accept: 'application/json',
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: encodedParams,
    };

    axios
        .request(options)
        .then(function(response) {
            // console.log(response.data);
            res.send(response.data)
        })
        .catch(function(error) {
            console.error(error);
            res.send(error.response)
        });
})

app.listen(PORT)
console.log("server runnning on port 4000")