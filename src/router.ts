// @ts-nocheck
import { Router } from "express";
import { body, param, matchedData, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import {
  createNewProduct,
  deleteSingleProduct,
  getAllProduct,
  getOneProduct,
  updateProduct,
} from "./handlers/product";
import {
  getAllUpdate,
  getSingleUpdate,
  mutipleUpdateRecord,
} from "./handlers/update";
const router = Router();
/**
 * product
 */

router.post(
  "/product/:id",
  body("name").isString(),
  handleInputErrors,
  createNewProduct
);
router.get("/product", getAllProduct);
router.get(
  "/product/:id",
  param("id").isString(),
  handleInputErrors,
  getOneProduct
);

router.put(
  "/product/:id",
  body("name").isString(),
  param("id").isString(),
  handleInputErrors,
  updateProduct
);

router.delete("/product/:id", param("id").isString(), deleteSingleProduct);
/**
 * Update
 */

router.get("/update", getAllUpdate);

router.get("/update/:id", getSingleUpdate);

router.post(
  "/update",
  body("title").isString().exists(),
  handleInputErrors,
  mutipleUpdateRecord
);

router.put("/update/:id", body(""));

router.delete("/update/:id", (req, res) => {});

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint", (req, res) => {});

router.put("/updatepoint/:id", (req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});

export default router;
