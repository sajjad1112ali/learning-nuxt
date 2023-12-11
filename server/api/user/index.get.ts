import { user } from "../../dbModels";
export default defineEventHandler(async (event) => {
  console.log("GET /api/user");
  try {
    console.log("Find user");
    const usersData = await user.find();
    return usersData.map((user) => ({
      id: user._id,
      name: user.name,
    }));
  } catch (err) {
    console.dir(err);
    event.res.statusCode = 500;
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});