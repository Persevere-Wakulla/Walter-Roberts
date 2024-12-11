import dogApplicationRoute from "./routes/dogApplicationRoute.js";
import { Train } from "./models/trainingModel.js";
import dogsRoute from "./routes/dogsRoutes.js";
import userRoute from "./routes/userRoute.js";
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
// import { Dog } from "./models/dogModel.js";

const app = express();


// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS Policy
// Option 1: Allow All Origins with Default of cors(*)
app.use(cors());

// Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origins: "http://localhost:3000",
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-type'],
//     })
// );

// User Register
app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To Americas Dog School');
});

// training
app.get('/training', async (request, response) => {
    // console.log(request)
    try {
        const training = await Train.find({})
        console.log(training);
        // if failed
        if (!training) {
            return response.status(404).json({ message: 'Training Data Not Found' })
        }

        return response.status(200).json({
            count: training.length,
            data: training
        });
    }
    catch (error) {
        return response.status(500).json({ message: error.message })
    }
})

app.use('/dogs', dogsRoute);
app.use("/users", userRoute);
app.use("/applications", dogApplicationRoute)

// export let dataBase;
mongoose
    .connect('mongodb://127.0.0.1/dogBreeds')
    .then((db) => {
        //  console.log(db)
        console.log('DB has been conected')
        app.listen(3000, () => {
            console.log('Listening on 3000 http://localhost:3000')
        })

    })
    .catch((error) => {
        console.log(error);
    });

// app.listen(PORT, () => {
//     console.log(`App is listening to port: ${PORT}`)
// });