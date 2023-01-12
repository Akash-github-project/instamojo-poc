import { createClient } from "redis"
import { redisPort, redisURL } from "../constants";

export const client = createClient({
    socket: {
        host: redisURL,
        port: redisPort
    },
    password: ""
});

client.on('error', err => {
    console.log('Error ' + err);
});
