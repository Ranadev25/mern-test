const router = require("express").Router();
const { userGet } = require("../controllers/userPaginationControllers");


// get user by pagination
router.get("/", userGet);



module.exports = router;

