import { Users } from "../models/userModel.js";
import express from "express";

const userRoute = express.Router()
userRoute.post("/createUser", async (request, response) => {
  console.log(request.body);
  try {
    if (
      !request.body.firstName ||
      !request.body.lastName ||
      !request.body.email ||
      !request.body.phone ||
      !request.body.username ||
      !request.body.password ||
      !request.body.address ||
      !request.body.city ||
      !request.body.state ||
      !request.body.zipCode ||
      !request.body.favoriteDog
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: first name, last name, email, phone, username, password, address, city, state, zip code, favorite dog",
      });
    }
    const newUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      phone: request.body.phone,
      username: request.body.username,
      password: request.body.password,
      address: request.body.address,
      city: request.body.city,
      state: request.body.state,
      zipCode: request.body.zipCode,
      favoriteDog: request.body.favoriteDog
    };

    const user = await Users.create(newUser);

    return response.status(201).send(user);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// post to find a user with a username and password that matches the req.body
userRoute.post("/findUser", async (req, res) => {
  let username = req.body.userName;
  let password = req.body.userPassWord;
  let existingUser;
  try {
    existingUser = await Users.findOne(
      { username: username, password: password },
      { password: 0 }
    );
  } catch (err) {
    console.log({ message: err });
  }
  if (!existingUser) {
    return res.status(400).json({
      success: false,
      data: { message: "Credentials do not match" },
    });
  }
  return res.status(200).json({
    success: true,
    data: existingUser,
  });
});
export default userRoute;