const {
  getList,
  findOne,
  create,
  update,
  deleteOne,
} = require("../repositories/user.repository");

const listFighters = async () => {
  const result = await getList();
  if (result) {
    return result;
  } else {
    throw new Error("Fighters not found");
  }
};

const findFighter = async (id) => {
  const result = await findOne(id);
  if (result) {
    return result;
  } else {
    throw new Error("Fighter not found");
  }
};

const createFighter = async (data) => {
  const result = await create(data);
  if (result) {
    return result;
  } else {
    throw new Error("Unable to create");
  }
};

const updateFighter = async (id, data) => {
  const result = await update(id, data);
  if (result) {
    return result;
  } else {
    throw new Error("Unable to update");
  }
};

const deleteFighter = async (id) => {
  const result = await deleteOne(id);
  if (result) {
    return result;
  } else {
    throw new Error("Unable to delete");
  }
};

module.exports = {
  listFighters,
  findFighter,
  createFighter,
  updateFighter,
  deleteFighter,
};
