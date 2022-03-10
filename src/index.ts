import express from "express";
import cors from "cors";
import fs from "fs";
import { User } from './User';
const app = express();
const port = 8080;

app.use(cors())

app.get("/users", (req, res) => {
    fs.readFile("users.json", "utf8", (err: Error, jsonString: string) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        res.send(jsonString);
    });
});

app.get("/users/:id", (req, res) => {
    fs.readFile("users.json", "utf8", (err: Error, jsonString: string) => {
        if (err) {
          console.log("File read failed:", err);
          return;
        }
        const userList = JSON.parse(jsonString);
        const foundUser = userList.find((user: User) => user.id.toString() === req.params.id);
        res.send(JSON.stringify(foundUser));
    });
});

app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});