import { login } from "../controller/adminController";
import polka from "polka";

const server = polka();

server.get("/", (req, res) => {
  res.end("refactored base");
})

server.post("/login", login);

export default server;