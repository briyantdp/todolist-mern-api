exports.register = (req, res, next) => {
  const fullName = req.body.fullName;
  const email = req.body.email;
  const password = req.body.password;

  const result = {
    message: "Register success",
    data: {
      uuid: 1,
      fullName: fullName,
      email: email,
      password: password,
    },
  };

  res.status(201).json(result);

  next();
};

exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const result = {
    message: "Login success",
    data: {
      email: email,
      password: password,
      isLogin: true,
    },
  };

  res.status(201).json(result);

  next();
};
