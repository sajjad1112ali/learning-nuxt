import { user } from "../../dbModels";
interface IRequestBody {
  email: string;
  password: string;
  name: string;
}
export default defineEventHandler(async (event) => {
  console.log("POST /api/user");
  const body = await readBody(event)
  const { email, password, name } = body;
  console.log(body)
  try {
    const userData = await user.findOne({
      email,
    });
    if (userData) {
      console.log(`User with email ${email} already exists`);
      event.res.statusCode = 409;
      return {
        code: "USER_EXISTS",
        message: "User with given email already exists.",
      };
    } else {
      console.log("Create user");
      const newUserData = await user.create({
        email,
        password,
        name,
      });
      return {
        id: newUserData._id,
        name: newUserData.name,
      };
    }
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something wrong.",
    };
  }
});