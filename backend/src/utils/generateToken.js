import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userId, res) => {
  const toekn = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", toekn, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: false,
  });

  return toekn;
};
