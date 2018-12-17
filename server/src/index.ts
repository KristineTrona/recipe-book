import {createKoaServer, Action, BadRequestError} from "routing-controllers"
import setupDb from './db'
import { verify } from "./jwt";
import UserController from "./users/controller";
import LoginController from "./logins/controller";
import RecipesController from "./recipes/controller";


const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
  controllers: [
    UserController,
    LoginController,
    RecipesController
   ],
   authorizationChecker: (action: Action) => {
    const header: string = action.request.headers.authorization

    if(header && header.startsWith('Bearer ')){
      const [ , token ] = header.split(' ')
      
      try {
       return !!(token && verify(token))
     }
     catch (err) {
       throw new BadRequestError(err)
     }
    }
      return false
  }
})

setupDb()
.then(_ =>
app.listen(port, () => console.log(`Listening on port ${port}`))
)
.catch(err => console.error(err))
