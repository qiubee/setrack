const express = require("express");
const router = express.Router();

// controllers
const index = require("./controllers/index");
const key = require("./controllers/key");
const create = require("./controllers/create");
const players = require("./controllers/players");
const saveSport = require("./controllers/sport");

router.get("/", index)
    .get("/key", key.save)
    .get("/enter-key", key.enter)
    .get("/create", create)
    .get("/players", players)
    .post("/sport", saveSport);

module.exports = router;