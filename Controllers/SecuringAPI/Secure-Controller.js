const Secure = require("../../Models/SecuringAPI/Secure-Model");
const jwt = require("jsonwebtoken");

exports.createRole = async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new Secure({
    name,
    email,
    password: await Secure.encryptPassword(password),
  });
  const savedUser = await newUser.save();
  console.log(savedUser);

  const newToken = jwt.sign({ id: savedUser._id }, "secretKey", {
    expiresIn: 86400, // one day
  });
  res.status(200).json({ newToken });
};

exports.getToken = async (req, res) => {
  const userExist = await Secure.findOne({ name: req.body.name });

  if (!userExist)
    return res.status(400).json({
      message: "User not exists",
    });
  const matchPassword = await Secure.comparePassword(
    req.body.password,
    userExist.password
  );

  if (!matchPassword)
    return res.status(401).json({
      token: null,
      message: "Invalid password",
    });
  console.log(userExist);
  const token = jwt.sign({ id: userExist._id }, "secretKey", {
    expiresIn: 86400,
  });
  return res.json({
    _id: userExist._id,
    name: userExist._id,
    message: "Auth Succesful",
    token: token,
  });
};
