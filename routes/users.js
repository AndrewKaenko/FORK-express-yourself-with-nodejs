var express = require("express");
var router = express.Router();

const {
  listFighters,
  findFighter,
  createFighter,
  updateFighter,
  deleteFighter,
} = require("../services/user.service");

router.get("/", async (req, res) => {
  const result = await listFighters();
  if (result) {
    res.send(result);
  } else {
    res.sendStatus(500);
  }
});

router.get("/:id", async (req, res) => {
  const result = await findFighter(req.params.id);
  if (result) {
    res.send(result);
  } else {
    res.sendStatus(500);
  }
});

router.post("/", async (req, res) => {
  const result = await createFighter(req.body);
  if (result) {
    res.send(result);
  } else {
    res.sendStatus(500);
  }
});

router.put("/:id", async (req, res) => {
  const result = await updateFighter(req.params.id, req.body);
  if (result) {
    res.send(result);
  } else {
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  const result = await deleteFighter(req.params.id);
  if (result) {
    res.send(result);
  } else {
    res.send(500);
  }
});

module.exports = router;
