import axios from 'axios';

export async function createOrderId(paymentRequestId: string, token: string) {
    const encodedParams = new URLSearchParams();
    encodedParams.set('id', paymentRequestId);

    const options = {
        method: 'POST',
        url: 'https://test.instamojo.com/v2/gateway/orders/payment-request/',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: encodedParams,
    };

    const data = await axios
        .request(options)
        .then(function(response) {
            console.log("subdata", response.data)
            return response.data
        })
        .catch(function(error) {
            console.log("subdata", error)
            return error
        });

    console.log("this is data", data)
    return data
}

