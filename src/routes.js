import userRouter from "./modules/users/routes/users.routes.js";
import { errorGlobal } from "./modules/utils/error.js";
import connectionDb from "./server/connection.js";





const initApp =(app,express)=>{

 app.use(express.json({}));
 connectionDb();
 
 app.use("/api/v1/user",userRouter)
 app.use(errorGlobal);
}


export default initApp