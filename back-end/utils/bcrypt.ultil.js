const bcrypt = require("bcrypt");
const saltRounds = 10

function hash(password) {
    return bcrypt.hashSync(password, saltRounds)
}

function compare(password, hash) {
    return bcrypt.compareSync(password, hash)
}

module.exports = {
    hash,
    compare
}