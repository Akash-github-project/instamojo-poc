import { createClient } from "redis"
import { redisPort, redisURL } from "../constants"

export const client = createClient({
  url: `${redisURL}:${redisPort}`,
})

// client.on("error", (err) => {
//   console.log("Error " + err)
// })
