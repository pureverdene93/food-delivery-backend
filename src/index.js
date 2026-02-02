import express from "express";
import mongoose from "mongoose";
import { categoryRouter } from "./resolver/foodCategory/category.js";
import { userRoute } from "./resolver/user/user.js";
import { foodOrderRoute } from "./resolver/foodOrder/foodOrder.js";
import { router } from "./resolver/food/food.js";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const database_url = process.env.DATABASE_URL;
if (!database_url) {
  console.error("url is null");
  process.exit(1);
}

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

app.use(`/food`, router);
app.use(`/category`, categoryRouter);
app.use(`/user`, userRoute);
app.use(`/order`, foodOrderRoute);

mongoose.connect(database_url).then(() => console.log("Succesfuly connected"));
app.listen(PORT, () => {
  console.log(`Server is running this port http://localhost:${PORT}`);
});
