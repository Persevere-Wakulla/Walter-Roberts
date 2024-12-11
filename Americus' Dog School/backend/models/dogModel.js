import mongoose from "mongoose";

const dogSchema = mongoose.Schema(
   {
      category: {
         type: String,
         required: true,
      },
      dogInfo: [{
         name: {
            type: String,
            required: true,
         },
         images: {
            type: String,
            required: true,
         },
         origin: {
            type: String,
            required: true,
         },
         heightAtShoulder: {
            males: {
               type: String,
               required: true
            },
            females: {
               type: String,
               required: true,
            }
         },
         weight: {
            males: {
               type: String,
               required: true
            },
            females: {
               type: String,
               required: true,
            }
         },
         grooming: {
            type: String,
            required: true,
         },
         cost: {
            type: String,
            required: true,
         },
         capabilities: {
            type: String,
            required: true,
         },
         trainingTip: {
            type: String,
            required: true,
         },
         housebreaking: {
            type: String,
            required: true,
         },
         aestheticQuality: {
            type: String,
            required: true,
         },
         personality: {
            type: String,
            required: true,
         },
      }]
   },
   {
      timestamps: true,
   }
);

export const Dog = mongoose.model('Dog', dogSchema);