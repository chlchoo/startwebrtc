import http from "http";
import SocketIO from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));


const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", (socket) => {
    console.log(socket);
})

/* const sockets = [];
const wss = new WebSocket.Server({server});
wss.on("connection", (socket) =>{
    sockets.push(socket);
    socket["nickname"] = "Anon";
    console.log("Connected to Browser ✔");
    socket.on("close", () => {
        console.log("Disconected From Browser ❌");
    });
    // ws 버전이 옛날 버전이여서 이렇게 데이터를 변형 해줘야 한다. 업데이트를 하면 해결 
    socket.on("message", (msg) => {
        const message = JSON.parse(msg);
        switch(message.type){
            case "new_massage":
                sockets.forEach((aSocket) => 
                aSocket.send(`${socket.nickname}: ${message.payload}`)
                );
                break;
                case "nickname":
                    socket["nickname"] = message.payload;
                    break;
                }
            });
        }); */
        
const handleListen = () => console.log(`Listening on http://localhost:3000`);
httpServer.listen(3000, handleListen);