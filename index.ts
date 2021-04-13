import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config'
const URI = process.env.MONGO_LINK;
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

mongoose.connect(URI!, {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true
})
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.get('/', (req,res ) => {
  res.json({"message": "Welcome to ExpressMongoApp application. Created by IT Jugadu"});
})

app.listen(PORT, () => {
  console.log(`Express with Typescript! http://localhost:${PORT}`);
});