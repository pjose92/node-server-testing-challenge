const router = require("express").Router();

const Users = require("./users-models");

router.get("/", (req, res) => {
    Users.find().then((users) => {
        res.status(200).json(users);
    });
});

router.post("/", (req, res) => {
    const user = req.body;
    if (user.username && user.password) {
        Users.add(user)
            .then((addedUser) => {
                res.status(201).json(addedUser);
            })
            .catch((error) => {
                res.status(500).json({ errorMessage: "Error adding user" });
            });
    } else {
        res
            .status(400)
            .json({ errorMessage:"username and password is required" });
    }
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    Users.remove(id).then((deleted) => {
        res.status(204).json({ deleted: "user deleted" });
    })
})

module.exports = router;