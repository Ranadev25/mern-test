const setAccessToken = async (res, accessToken) => {
  try {
    return res.cookie("token", accessToken, {
      maxAge: 5 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
  } catch (error) {
    throw new Error(error);
  }
};

const setRefreshToken = async (res,refreshToken) => {
  try {
    return res.cookie("refreshToken", refreshToken, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
  } catch (error) {
    throw new Error(error);
  }
};


module.exports = {
  setAccessToken,
  setRefreshToken
}