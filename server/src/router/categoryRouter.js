const categoryRouter = require("express").Router();
const handelUpdateCategory = require("../controllers/category/categoryUpdate");
const handelCreateCategory = require("../controllers/category/createCategoryControllers");
const handelDeleteCategory = require("../controllers/category/deleteCategory");
const handelGetAllCategory = require("../controllers/category/getAllCategory");
const handelGetSingleCategory = require("../controllers/category/getsingelCaregory");
const isAdmin = require("../middleware/isAdmin");
const isLoggedIn = require("../middleware/isLogIn");
const { validateCategory } = require("../validation/category");
const runValidation = require("../validation/run");



categoryRouter.post("/", validateCategory, runValidation, isLoggedIn, isAdmin, handelCreateCategory);

categoryRouter.get("/", isLoggedIn, handelGetAllCategory)


categoryRouter.get("/:slug", isLoggedIn, handelGetSingleCategory)


categoryRouter.put("/:slug", isLoggedIn, isAdmin, handelUpdateCategory)


categoryRouter.delete("/:slug",isLoggedIn,isAdmin, handelDeleteCategory)




module.exports = categoryRouter;
