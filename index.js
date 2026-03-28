const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Health Check...");
});

app.post("/user", (req, res) => {
    res.json({
        "name": "naman",
        "id": 1
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000.");
});