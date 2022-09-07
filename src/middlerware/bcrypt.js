const bcrypt = require("bcrypt");

const hashPasswordAsync = async (password) => {
    return await bcrypt.hash(password, 10);
};

const comparePasswordAsync = async (password, hash) =>
  bcrypt.compare(password, hash);

module.exports = {
  hashPasswordAsync,
  comparePasswordAsync,
};