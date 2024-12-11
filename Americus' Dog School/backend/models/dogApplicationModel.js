import mongoose from "mongoose";

const dogApplicationSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        zipCode: {
            type: Number,
            required: true,
        },
        why: {
            type: String,
            required: true,
        },
        dogBefore: {
            type: String,
            required: true,
        },
        family: {
            type: Number,
            required: true,
        },
        children: {
            type: String,
            required: true,
        },
        expenseInvolved: {
            type: String,
            required: true,
        },
        doesEveryone: {
            type: String,
            required: true,
        },
        dogExercising: {
            type: String,
            required: true,
        },
        dogFeeding: {
            type: String,
            required: true,
        },
        dogGrooming: {
            type: String,
            required: true,
        },
        leftAlone: {
            type: String,
            required: true,
        },
    });

export const dogApplication= mongoose.model('dogApplication', dogApplicationSchema);