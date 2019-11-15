import express from "express"
import routes from "../routes"
import { user, userDetail } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, user);
userRouter.get(routes.userDetail, userDetail);


export default userRouter;