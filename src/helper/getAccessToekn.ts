import axios from "axios"

export async function getAccessToken() {
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

    const response = await axios
        .request(options)
        .then((response) => response)
        .catch((error) => error.response);

    if (response.status !== 200) {
        console.log("error happened", response)
        return { data: response.status }
    }

    return { data: response.data.access_token }
}