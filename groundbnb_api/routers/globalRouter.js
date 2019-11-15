import express from "express"
import routes from "../routes"
import { home } from "../controllers/sharehouseController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);


export default globalRouter;