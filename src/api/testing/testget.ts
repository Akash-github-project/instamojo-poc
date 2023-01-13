import { Router } from "express"
import { client } from "../../db/redisInstance"

const testingRouter = Router()
testingRouter
  .get("/test", async (req, res) => {
    const { key } = req.query
    if (key === "forbidden") {
      res.status(403).send({ response: "Forbidden" })
      return
    }
    if (key === "notfound") {
      res.status(404).send({ response: "Not Found" })
      return
    }
    if (key === "pf") {
      res.status(412).send({ response: "Precondition Failed" })
      return
    }

    console.log(key, "this key")
    await client.connect()
    const data = await client.get(key as string)

    // client.on("ready",())
    await client.disconnect()
    res.send({ response: data })
  })
  .post("/test", async (req, res) => {
    const { key, value } = req.body

    if (key === "forbidden") {
      res.status(403).send({ response: "Forbidden" })
      return
    }
    if (key === "notfound") {
      res.status(404).send({ response: "Not Found" })
      return
    }
    if (key === "pf") {
      res.status(412).send({ response: "Precondition Failed" })
      return
    }

    await client.connect()
    console.log("connected")
    const status = await client.set(key, value)
    res.send({ response: status })
    await client.disconnect()
  })

export default testingRouter
