// @ts-nocheck
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const comparePassword = (password, hash) => {
  return bcrypt.compare(password, hash);
};
export const hashPassword = (password) => {
  return bcrypt.hash(password, 10);
};

export const createJWT = (user) => {
  const token = jwt.sign(
    {
      user: user.id,
      username: user.username,
    },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    res.status(401);
    res.send({ message: "Not Authorised" });
    return;
  }

  const [, token] = bearer.split(" ");
  if (!token) {
    res.status(401);
    res.send({ message: "Not Authorised" });
    return;
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
  } catch (e) {
    console.log(e);
    res.status(401);
    res.send({ message: "Not Authorised" });
    return;
  }
};
