import express from "express";
import { Dog } from "../models/dogModel.js";


const router = express.Router();

// const dogBreeds = new URL('mongodb://127.0.0.1/dogBreeds');

// router.get('/categoryId',async(req,res)=>{

// })

// Route for save a New Dog
router.post('/createDog', async (request, response) => {

    const category = await Dog.find({ category: request.body.category })

    const getId = category.map((x) => x.id)
    const target = await Dog.findById(getId);
    console.log(target);
    try {
        if (
            !request.body.category ||
            !request.body.dogInfo.name ||
            !request.body.dogInfo.images ||
            !request.body.dogInfo.origin ||
            !request.body.dogInfo.heightAtShoulder.males ||
            !request.body.dogInfo.heightAtShoulder.females ||
            !request.body.dogInfo.weight.males ||
            !request.body.dogInfo.weight.females ||
            !request.body.dogInfo.grooming ||
            !request.body.dogInfo.cost ||
            !request.body.dogInfo.capabilities ||
            !request.body.dogInfo.trainingTip ||
            !request.body.dogInfo.housebreaking ||
            !request.body.dogInfo.aestheticQuality ||
            !request.body.dogInfo.personality
        ) {
            return response.status(400).send({ message: 'Send ALL required fields: category, dogInfo:{ name, images, orgin, heightAtShoulder, weight, grooming, cost, capabilities, trainingTip, housebreaking, aestheticQuality, personality}', })
        };
        const newDog = {
            name: request.body.dogInfo.name,
            images: request.body.dogInfo.images,
            origin: request.body.dogInfo.origin,
            heightAtShoulder: {
                males: request.body.dogInfo.heightAtShoulder.males,
                females: request.body.dogInfo.heightAtShoulder.females,
            },
            weight: {
                males: request.body.dogInfo.weight.males,
                females: request.body.dogInfo.weight.females,
            },
            grooming: request.body.dogInfo.grooming,
            cost: request.body.dogInfo.cost,
            capabilities: request.body.dogInfo.capabilities,
            trainingTip: request.body.dogInfo.trainingTip,
            housebreaking: request.body.dogInfo.housebreaking,
            aestheticQuality: request.body.dogInfo.aestheticQuality,
            personality: request.body.dogInfo.personality,
        }

        target.dogInfo = [...target.dogInfo, newDog]
        const saveList = target.save();


        return response.status(201).json({
            success: true,
            message: { message: "Dog was added" },
        });

    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for getting ALL Dogs from Database
router.get('/', async (request, response) => {
    console.log(request.params)
    try {
        const dogs = await Dog.find({});

        return response.status(200).json({
            count: dogs.length,
            data: dogs
        });
    } catch (error) {
        // console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get One Dog from Database by id
router.get('/details/:id', async (request, response) => {
    try {

        const { id } = request.params;
        // console.log("Attempting to get data");
        // console.log(id)
        const dog = await Dog.findById(id);

        return response.status(200).json(dog);
    } catch (error) {
        // console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route For Updating a Dog in Database
router.put('/:id', async (request, response) => {
    try {
        if (
            !request.body.category ||
            !request.body.dogInfo.name ||
            !request.body.dogInfo.images ||
            !request.body.dogInfo.orgin ||
            !request.body.dogInfo.heightAtShoulder ||
            !request.body.dogInfo.weight ||
            !request.body.dogInfo.grooming ||
            !request.body.dogInfo.cost ||
            !request.body.dogInfo.capabilities ||
            !request.body.dogInfo.trainingTip ||
            !request.body.dogInfo.housebreaking ||
            !request.body.dogInfo.aestheticQuality ||
            !request.body.dogInfo.personality
        ) {
            return response.status(400).send({
                message: 'Send ALL required fields: category, name, images, orgin, heightAtShoulder, weight, grooming, cost, capabilities, trainingTip, housebreaking, aestheticQuality, personality'
            });
        }

        const { id } = request.params;

        const result = await Dog.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(400).json({ message: 'Dog not found' });
        }

        return response.status(200).send({ message: 'Dog updated successfully' });

    } catch (error) {
        response.status(500).send({ message: error.message });
    }
});

// Route for Deleting a Dog
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Dog.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Dog not found' });
        }

        return response.status(200).send({ message: 'Dog has been deleted successfully' });

    } catch (error) {
        response.status(500).send({ message: error.message });
    }
});

export default router;