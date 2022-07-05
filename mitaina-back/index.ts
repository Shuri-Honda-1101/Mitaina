import express, { Request, Response } from "express";
import prisma from "./src/lib/prisma";

const app = express();
const port = process.env.PORT || 8080;

app.get("/users", async (req: Request, res: Response) => {
  const users = await prisma.user.findMany();
  return res.json(users);
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
