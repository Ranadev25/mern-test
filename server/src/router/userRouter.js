const router = require("express").Router();
const { userGet } = require("../controllers/userControllers");



router.get("/", userGet);



module.exports = router;