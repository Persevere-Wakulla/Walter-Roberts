import mongoose from "mongoose";

const categoryOfDogs = new mongoose.Schema({
    herders: [Object],
    hound: [Object],
    nonsporting: [Object],
    working: [Object],
    sporting: [Object],
    terrier: [Object],
    toy: [Object],
})
export const DogCategory = mongoose.model('Category', categoryOfDogs);