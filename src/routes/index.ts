import { Server } from "restify";
import UserController from "../controllers/user.controller";
import { IsAuthenticated } from "../policies/Authorizer";
export default function routeDefinition(server: Server) {
  const user = new UserController();
  server.post("/signup", user.addUser);
  server.post("/login", user.userLogin);
  server.post("/allusers", user.allusers);
  server.get("/search/:name", user.searchText);



  // server.post("/:id", post.);
}
