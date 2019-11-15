
import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import globalRouter from "./routers/globalRouter"
import userRouter from "./routers/userRouter"

import routes from "./routes.js"

const app = express()

app.engine('pug', require('pug').__express)
app.set('view engine', 'pug');
//app.set('views', './views');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet()); // 보안을 위한 것이다. 
app.use(morgan("dev"));


app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
//app.use(routes.videos, sharehouseRouter);

export default app;

