// @ts-nocheck
import prisma from "../db";
import { comparePassword, createJWT, hashPassword } from ".././modules/auth";

export const createNewUser = async (req, res) => {
  try {
    const hashed = await hashPassword(req.body.password);
    const user = await prisma.user.create({
      data: {
        username: req.body.username,
        password: hashed,
      },
    });
    const token = createJWT(user);
    res.json({ token });
  } catch (e) {
    res.status(400);
    res.send({ message: "Bad request: " + e });
  }
};

export const signInUser = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  const isVaild = await comparePassword(req.body.user,  user.password)
   if (!isVaild) {
    res.status(401).json({message: "Nope"})
   }
   const token = createJWT(user);
   res.json({ token });
};
