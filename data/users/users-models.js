const db = require("../dbConfig");

module.exports = {
    find,
    add,
    remove,
};

function find() {
    return db("users");
}

function add(user) {
    return db("users")
    .insert(user, "id")
    .then(([id]) => db("users").where({ id }).first());
}

function remove(id) {
    return db("users").del().where({ id });
}