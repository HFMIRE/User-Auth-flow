// @ts-nocheck
import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signInUser } from "./handlers/user";

const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const mymiddleware = function (req, res, next) {
  console.log("Greeting Earthlings");
  next();
};
app.use(mymiddleware);

app.get("/", (req, res) => {
  console.log("hello from express");
  res.status(200);
  res.json({ message: "hello" });
});
app.use("/api", protect, router);
app.use("/user", createNewUser);
app.use("/signin", signInUser)
export default app;
