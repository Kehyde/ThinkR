import userHandler from "../handlers/userHandler.js";

const showRegisterForm = async (req, res) => {
  res.render("register", { title: "Register as a User!" });
};

const register = async (req, res) => {
  const { username, email, password } = req.body; //Extract email

  const callback = (err, newUser) => {
    if (err) {
      console.log("reg error", err); //Logs validation info
      return res.redirect("/register");
    }

    res.redirect("/login");
  };

  await userHandler.register({ username, email, password, callback }); //Pass email
};

const loginForm = async (req, res) => {
  res.render("login", { title: "Login" });
};

export default {
  showRegisterForm,
  register,
  loginForm,
};
