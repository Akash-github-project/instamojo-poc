import { baseURL } from "../constants";
import { Router } from "express";
import axios from "axios"
import { getAccessToken } from "../helper/getAccessToekn";
import { createOrderId } from "./createOrderId";


const router = Router()

router.post("/create", async (req, res) => {
    const { data: dataOrError } = await getAccessToken()
    if (typeof dataOrError === "number") {
        res.send({ error: dataOrError })
        return
    }

    const body = req.body;
    const { email, phone, purpose, buyer_name, amount } = body;

    const encodedParams = new URLSearchParams();

    encodedParams.set('allow_repeated_payments', 'false');
    encodedParams.set('send_email', 'false');
    encodedParams.set('amount', amount);
    encodedParams.set('purpose', purpose);
    encodedParams.set('buyer_name', buyer_name);
    encodedParams.set('email', email);
    encodedParams.set('phone', phone);
    encodedParams.set('webhook', `${baseURL}/detail/completed`);

    const options = {
        method: 'POST',
        url: 'https://test.instamojo.com/v2/payment_requests/',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${dataOrError}`,
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: encodedParams,
    };

    axios
        .request(options)
        .then(async function(response) {
            console.log("before data", response)
            const orderIdData = await createOrderId(response.data.id, dataOrError)
            console.log("data", JSON.stringify(orderIdData))
            res.send({ created: orderIdData })
        })
        .catch(function(error) {
            console.log("error", JSON.stringify(error))
            res.send({ created: error.response })
        });
})

export default router