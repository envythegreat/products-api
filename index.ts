import express, { Application } from 'express';
import routes from './routes';
import cors from 'cors';
import 'dotenv/config';
import connect from './controllers/db.controller'


const URI = process.env.MONGO_URL;
const app: Application = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

connect({db: URI!})
routes({app})

app.get('/', (req,res ) => {
  res.json({"message": "Welcome to ExpressMongoApp application. Created by IT Jugadu"});
})

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});