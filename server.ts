import express, { Request, Response} from "express";

const server = express();

server.get("/", (req, res) => {
    res.send("Sup world")
})

server.listen(3000);