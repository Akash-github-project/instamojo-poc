import express from "express";
import cors from "cors"
import createRequest from "./api/create"
import webhookRouter from "./webhook";

const app = express()
app.use(cors())
app.use(express.json())


app.get("/", (_, res) => {
    res.send({ everything: "ok" })
})
app.use("/api", createRequest)
app.use("/detail", webhookRouter)
app.listen(process.env.PORT || 3000)
console.log("server runnning on port 80")