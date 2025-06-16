import User from "../models/userModel.js";

const register = ({ username, email, password, callback }) => {
  const user = new User({ username, email }); //Include email
  User.register(user, password, callback);
};

export default {
  register,
};
