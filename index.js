import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

const CONNECTION_URL =
  'mongodb+srv://azizulorvee:8mMxheDf@cluster0.jrujwgg.mongodb.net/?retryWrites=true&w=majority';

  // 'mongodb+srv://azizulorvee:8mMxheDf@cluster0.bdrxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`app listening on port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
