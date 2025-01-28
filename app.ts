import express, {Request, Response, Express} from 'express'
import path from 'path'

const app: Express = express()
app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.get('/', (req: Request, res: Response)=>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(3000, _ => console.log(`server running on ${PORT}`))