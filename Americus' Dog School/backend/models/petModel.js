import mongoose from "mongoose";

const petSchema = mongoose.Schema(
    {
     type: {
        type: String,
        required: true,
     },
     breed: {
        type: String,
        required: true,
     },
     age: {
        type: Number,
        required: true,
     },
     weight: {
        type: Number,
        required: true,
     },
     name: {
        type: String,
        required: true,
     },
     birthDate: {
        type: Date,
        default: Date()
     },
     lastFed: {
        type: Date,
        required: true,
     },
     needToFeed: {
        type: Date,
        required: true,
     },
     lastPotty: {
        type: Date,
        required: true,
     },
     needToPotty: {
        type: Date,
        required: true,
     },
     lastPlayed: {
        type: Date,
        required: true,
     },
     needToPlay: {
        type: Date,
        required: true,
     },
     lastGroomed: {
        type: Date,
        required: true,
     },
     needToGroom: {
        type: Date,
        required: true,
     },
     specialNeeds: {
        type: Array,
        required: true,
     },
     favoredActivity: {
        type: String,
        required: true,
     },
    },
    {
        timestamps: true,
    }
);

export const Pet = mongoose.model('Pet',petSchema);