import UserDao from "../dao/mongo/user.dao.js";

const userDAO = new UserDao();

export const login = async (userData) => {
  const { email } = userData;
  try {
    const userExist = await userDAO.findOne(email);
    if (userExist)
      return {
        status: "success",
        data: userExist,
        message: "User already registered",
      };

    const user = await userDAO.create(userData);

    return {
      status: "success",
      data: user,
      message: "User logged successfully",
    };
  } catch (error) {
    error.from = "user service";
    throw error;
  }
};

export const getUser = async (userID) => {
  try {
    const user = await userDAO.findById(userID);
    return {
      status: "success",
      data: user,
      message: "User logged successfully",
    };
  } catch (error) {
    error.from = "user service";
    throw error;
  }
};
