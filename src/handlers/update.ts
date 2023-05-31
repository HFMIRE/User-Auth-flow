// @ts-nocheck
import prisma from "../db";

export const getAllUpdate = async (req, res) => {
  try {
    const allUpdateRecord = await prisma.update.findMany();
    res.json({ allUpdateRecord });
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
export const getSingleUpdate = async (req, res) => {
  const id = req.params.id;
  try {
    const singleUpdate = await prisma.update.findUnique({
      where: {
        id,
      },
    });
    res.json({ singleUpdate });
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
export const mutipleUpdateRecord = async (req, res) => {
  const id = req.params.id;
  try {
    const mutipleUpdate = await prisma.update.updateMany({
      where: {
        id,
      },
      data: {
        version: req.body.version,
      },
    });
    res.json({ mutipleUpdate });
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
export const editUpdate = async (req, res) => {
  try {
    const updateRecord = await prisma.user.update({
      where: {
        email: "viola@prisma.io",
      },
      data: {
        name: "Viola the Magnificent",
      },
    });
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
export const deleteUpdate = async (req, res) => {
  try {
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};

export const getAllUpdatePoint = async (req, res) => {
  try {
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
export const getSingleUpdatePoint = async (req, res) => {
  try {
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
export const replaceUpdatePoint = async (req, res) => {
  try {
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
export const editUpdatePoint = async (req, res) => {
  try {
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
export const deleteUpdatePoint = async (req, res) => {
  try {
  } catch (e) {
    res.send({ errors: e }).sendStatus(400);
  }
};
