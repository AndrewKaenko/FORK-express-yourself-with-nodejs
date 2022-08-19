var fighters = require("../mocky/fighters.json");

const getList = async () => {
  if (fighters) {
    return fighters;
  } else {
    throw new Error("Fighters not found in DB");
  }
};

const findOne = async (id) => {
  const result = fighters.find((fighter) => fighter._id === id);
  if (result) {
    return result;
  } else {
    throw new Error("Fighter not found in DB");
  }
};

const create = async (data) => {
  const newFighter = {
    _id: Date.now().toString().slice(-3),
    name: data.name ?? "Random Name",
    health: data.health ?? Math.floor(Math.random() * 80),
    attack: data.attack ?? Math.floor(Math.random() * 8),
    defense: data.defense ?? Math.floor(Math.random() * 8),
    source: data.source ?? Date.now().toString(),
  };
  if (newFighter) {
    fighters.unshift(newFighter);
    return newFighter;
  } else {
    throw new Error("Unable to create (DB)");
  }
};

const update = async (id, data) => {
  const fighter = fighters.find((fighter) => fighter._id === id);
  console.log("FIGHTER", fighter);
  if (fighter) {
    fighter.name = data.name ?? fighter.name;
    fighter.health = data.health ?? fighter.health;
    fighter.attack = data.attack ?? fighter.attack;
    fighter.defense = data.defense ?? fighter.defense;
    fighter.source = data.source ?? fighter.source;

    const index = fighters.findIndex((fighter) => fighter._id === id);
    if (index !== -1) {
      fighters.splice(index, 1);
    }
    fighters.unshift(fighter);

    return fighter;
  } else {
    throw new Error("Unable to update (DB)");
  }
};

const deleteOne = async (id) => {
  const index = fighters.findIndex((fighter) => fighter._id === id);
  const fighter = fighters.find((fighter) => fighter._id === id);
  if (index !== -1) {
    fighters.splice(index, 1);
    return `Deleted fighter - ${fighter.name}`;
  } else {
    throw new Error("Unable to delete (DB)");
  }
};

module.exports = {
  getList,
  findOne,
  create,
  update,
  deleteOne,
};
