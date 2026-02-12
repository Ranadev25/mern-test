const findUser = require("../middleware/findById");
// const fs = require("fs");
const fs = require("fs").promises;
const User = require("../models/userModels");
const { successResponse } = require("../middleware/response");
const deleteImage = require("../middleware/deleteImage");

const deleteUser = async (req, res, next) => {
  try {

    const id = req.params.id;
    const options = { password: 0 };
    const user = await findUser(User, id, options);


    // delete user image from server
    // const userImage = user.image;
    // await deleteImage(userImage)


    //  i can used promises also to delete image file
    /*await fs.access(userImage)
      .then(async () => fs.unlink(userImage))
      .then(() => console.log("Image file deleted successfully"))
      .catch((err)=> console.log("Image file does not exist or error deleting it:", err))*/

    // ++++++++++++++++++++++++++++++++++++++++++++++++

    // ====== this is a way to delete image file from server
    /* fs.access(userImage, (err) => {
       if (err) {
         console.log("Image file does not exist")
       } else {
         fs.unlink(userImage, (err) => {
           if (err) throw err;
           console.log("Image file deleted successfully");
         })
       }
     })*/

    
    await User.findByIdAndDelete({ _id: id, isAdmin: false });
    return successResponse(res, {
      statusCode: 200,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }

};


module.exports = deleteUser;
