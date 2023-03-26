import polka, { Polka } from "polka";
import server from "./routes/routes";

const port:string = process.env.PORT || "3000";

server.listen(port);


