// @ts-nocheck
import { Router } from "express";
import { prisma } from "./db";
import { body, matchedData, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { createNewProduct } from "./handlers/product";
const router = Router();

router.post(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  createNewProduct
);
router.get("/product/:id");

export default router;
// // get a product using a given ID
// router.get("/product/:id", (req, res) => {
//   res.json({ message: "Hello Back" });
// });
// //  get all the products (for an authenticated user)
// router.get("/product", (req, res) => {
//   res.json({ message: " This is product" });

// });

// router.post("/product/:id", body("name").isString(), async (req, res) => {
//   const errors = validationResult(req)
//     if(!errors.isEmpty()) {
//       res.status(400);
//       res.json({ errors: errors.array() });
//     }
// });

// // update or replace a product that matches a given ID
// router.put("/product/:id",body("name").isString(), (req, res) => {
//   const errors = validationResult(req)
//     if(!errors.isEmpty()) {
//       res.status(400);
//       res.json({ errors: errors.array() });
//     }
// });
// // delete a product by a give ID
// router.delete("/product/:id", (req, res) => {

// });

// // Update
// router.get("/update/:id", (req, res) => {});

// router.get("/update", (req, res) => {});

// router.post("/update/:id", body(["title", "body"]).isString(),  (req, res) => {
//   const errors = validationResult(req)
//   if(!errors.isEmpty()) {
//     res.status(400);
//     res.json({ errors: errors.array() });
//   }
// });

// router.put("/update/:id",  body(["title", "body"]).isString(), (req, res) => {
//   const errors = validationResult(req)
// if(!errors.isEmpty()) {
//   res.status(400);
//   res.json({ errors: errors.array() });
// }
// });

// router.delete("/update/:id", (req, res) => {});

// //updatepoint
// router.get("/updatepoint/:id", (req, res) => {});

// router.get("/updatepoint", (req, res) => {});

// router.post("/updatepoint/:id", body(["name", "description"]).isString(),  (req, res) => {
//   const errors = validationResult(req)
//   if(!errors.isEmpty()) {
//     res.status(400);
//     res.json({ errors: errors.array() });
//   }
// });

// router.put("/updatepoint/:id", (req, res) => {
//   const errors = validationResult(req)
//   if(!errors.isEmpty()) {
//     res.status(400);
//     res.json({ errors: errors.array() });
//   }
// });

// router.delete("/updatepoint/:id", (req, res) => {});

// export default router;
