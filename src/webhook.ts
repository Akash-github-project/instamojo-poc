import { Router } from "express";
//import { client } from "./db/redisInstance";

const webhookRouter = Router()
webhookRouter.post("/completed", async (_, res) => {
    res.send({ success: "success" })
    // await client.set("response", req.body.toString())
    // res.send({ ok: "" })
    // const newData = await client.get("response")
    // res.send({data:newData})
})

export default webhookRouter