"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const port = 8080;
app.use((0, cors_1.default)());
app.get("/users", (req, res) => {
    fs_1.default.readFile("users.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        res.send(jsonString);
    });
});
app.get("/users/:id", (req, res) => {
    fs_1.default.readFile("users.json", "utf8", (err, jsonString) => {
        if (err) {
            console.log("File read failed:", err);
            return;
        }
        const userList = JSON.parse(jsonString);
        const foundUser = userList.find((user) => user.id.toString() === req.params.id);
        res.send(JSON.stringify(foundUser));
    });
});
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map