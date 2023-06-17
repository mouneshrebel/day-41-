import express from "express";
import * as dotenv from 'dotenv';
import cors from "cors";
import mongoose from 'mongoose';
import { changeMentorRoute, assignStudentRoute, createMentorRoute, createStudentRoute, getStudentRoute, getMentorRoute ,getStumenRoute} from './routes/route.js'

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

//connecting with mongoose//
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true })
  .then(() => console.log("Mongoose is connected🤣"))
  .catch((err) => console.log("Error occured...Please check!😥", err))


app.get('/', (req, res) => {
  res.send("This backend application is developed to create Student , create Mentor , To assign the students to a mentor , To assign a mentor to the students,etc...Please read the postman documention for better understanding ! Thankyou !😁😘 ")
})

//setting the Routes//
app.use("/mentor", createMentorRoute);
app.use("/student", createStudentRoute);
app.use("/", assignStudentRoute);
app.use("/", changeMentorRoute);
app.use("/",getStumenRoute);
app.use("/",getMentorRoute);
app.use("/",getStudentRoute);

//Setting the port//
app.listen(process.env.PORT, () => console.log("Server started at the port", process.env.PORT))