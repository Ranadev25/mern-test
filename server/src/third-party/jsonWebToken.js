const jwt = require("jsonwebtoken");

const createJsonWebToken = async (payload, secret_key, expiresIn) => {
  if (typeof payload !== "object" || !payload) {
    throw new Error("Payload must be a non-null object");
  }
  if (typeof secret_key !== "string" || secret_key === "") {
    throw new Error("Secret key must be a non-empty string");
  }
  try {
    const token = jwt.sign(payload, secret_key, { expiresIn });
    return token;
  } catch (error) {
    throw new Error("Error creating JSON Web Token: " + error.message);
  }
};

module.exports = createJsonWebToken;
