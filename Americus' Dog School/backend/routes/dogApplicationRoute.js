import { dogApplication } from "../models/dogApplicationModel.js";
import express from "express";

const dogApplicationRoute = express.Router()
dogApplicationRoute.post("/createDogApplication", async (request, response) => {
  try {
    if (
      !request.body.firstName ||
      !request.body.lastName ||
      !request.body.email ||
      !request.body.phone ||
      !request.body.address ||
      !request.body.city ||
      !request.body.state ||
      !request.body.zipCode ||
      !request.body.why ||
      !request.body.dogBefore ||
      !request.body.family ||
      !request.body.children ||
      !request.body.expenseInvolved ||
      !request.body.doesEveryone ||
      !request.body.dogExercising ||
      !request.body.dogFeeding ||
      !request.body.dogGrooming ||
      !request.body.leftAlone
    ) {
      return response.status(400).send({
        message:
          "Send all required fields: firstName, lastName, email, phone, address, city, state, zipCode, why, dogBefore, family, children, expenseInvolved, doesEveryone, dogExercising, dogFeeding, dogGrooming, leftAlone",
      });
    }

    const newApplication = await dogApplication.create(request.body);

    return response.status(201).send(newApplication);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default dogApplicationRoute;