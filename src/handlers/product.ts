// @ts-nocheck
import prisma from "../db";

export const createNewProduct = async (req, res) => {
  const userId = req.params.id;
  try {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        belongsToId: userId,
      },
    });
    res.json({ product });
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const allProducts = await prisma.product.findMany();
    res.json({ allProducts });
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
export const getOneProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const singleProduct = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    res.json({ singleProduct });
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
export const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updateProduct = await prisma.product.update({
      where: {
        id,
      },
      data: {
        name: req.body.name,
      },
    });
    res.json({ updateProduct });
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
export const deleteSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteProduct = await prisma.product.delete({
      where: {
        id,
      },
    });
    res.json({ message: "This product is deleted" + deleteProduct.name });
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
