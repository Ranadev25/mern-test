const fs = require("fs").promises;

const deleteImage = async (userImage) => {
  try {
    await fs.access(userImage);
    await fs.unlink(userImage);
    console.log("Image file deleted successfully");
  } catch (error) {
    console.log("Error deleting image file:", error);
  }
};

module.exports = deleteImage;
