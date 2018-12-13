import {createKoaServer, Action, BadRequestError} from "routing-controllers"
import setupDb from './db'
import UserController from "./users/controller";
import LoginController from "./logins/controller";
import { verify } from "./jwt";


const port = process.env.PORT || 4000

const app = createKoaServer({
  cors: true,
  controllers: [
    UserController,
    LoginController
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
