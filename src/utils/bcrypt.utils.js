const bcrypt = require('bcrypt');

const hashPasswordSync = (plainPassword) => {
    return bcrypt.hash(plainPassword, 10);
}

const comparePasswordSync = (plainPassword, hashPassword) => {
    return bcrypt.compare(plainPassword, hashPassword);
}

module.exports = {
    hashPasswordSync,
    comparePasswordSync
}
