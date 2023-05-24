import express, { Express, Request, Response, NextFunction}  from 'express'
import router from './router'
import morgan from "morgan"
const app: Express = express()
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const mymiddleware = function(req: Request, res:Response, next: NextFunction)  {
 console.log("Greeting Earthlings")
    next()
}
app.use(mymiddleware)

app.get('/', (req, res) => {
    console.log("hello from express")
    res.status(200)
    res.json({message: 'hello'})

})
app.use("/api", router)


export default app