import React, { useState } from "react";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

const CreateDog = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [images, setImages] = useState("");
  const [origin, setOrigin] = useState("");
  const [heightAtShoulder, setHeightAtShoulder] = useState({
    males: "",
    females: "",
  });
  const [weight, setWeight] = useState({
    males: "",
    females: "",
  });
  const [grooming, setGrooming] = useState("");
  const [cost, setCost] = useState("");
  const [capabilities, setCapabilities] = useState("");
  const [trainingTip, setTrainingTip] = useState("");
  const [housebreaking, setHousebreaking] = useState("");
  const [aestheticQuality, setAestheticQuality] = useState("");
  const [personality, setPersonality] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleSaveDog = async () => {
    const data = {
      category,
      dogInfo: {
        name,
        images,
        origin,
        heightAtShoulder,
        weight,
        grooming,
        cost,
        capabilities,
        trainingTip,
        housebreaking,
        aestheticQuality,
        personality
      }
    };
    setLoading(true);
    await fetch("http://localhost:3000/dogs/createDog", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please Check console');
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="backButtonDiv">
        <BackButton />
        <h1 className="createDog">Create Dog</h1>
      </div>
      <div className="border border-success border-opacity-25 d-flex justify-content-center w-75 m-auto">
        <form className="d-flex flex-column gap-3 createDogForm">
          <div className="d-flex category">
            <label className="category" htmlFor="catagories">Category:</label>
            <select id="catagories" name="categories" autoComplete="off" value={category} onChange={(e) => { setCategory(e.target.value) }}>
              <option type="text"
                className="">herders</option>
              <option type="text"
                className="">hound</option>
              <option type="text"
                className="">nonsporting</option>
              <option type="text"
                className="">working</option>
              <option type="text"
                className="">sporting</option>
              <option type="text"
                className="">terrier</option>
              <option type="text"
                className="">toy</option>
            </select>
          </div>
          <div className="d-flex name-breed">
            <label className="" htmlFor="breedName">Name/Breed:</label>
            <input
              type="text"
              name="name"
              id="breedName"
              autoComplete="on"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className=""
            />
          </div>
          <div className="d-flex images">
            <label className="" htmlFor="breedImages">Images:</label>
            <input
              type="text"
              name="images"
              id="breedImages"
              autoComplete="on"
              value={images}
              onChange={(e) => setImages(e.target.value)}
              className=""
            />
          </div>
          <div className="d-flex origin">
            <label className="" htmlFor="breedOrgin">Origin:</label>
            <input
              type="text"
              name="orgin"
              id="breedOrgin"
              autoComplete="on"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className=""
            />
          </div>
          <div className="d-flex maleHeight">
            <label className="" htmlFor="maleHeight">Male Height:</label>
            <input
              type="text"
              name="heightAtShoulder"
              id="maleHeight"
              autoComplete="on"
              value={heightAtShoulder.males}
              onChange={(e) => setHeightAtShoulder({ ...heightAtShoulder, males: e.target.value })}
              className=""
            />
          </div>
          <div className="d-flex femaleHeight">
            <label className="" htmlFor="femaleHeight">Female Height:</label>
            <input
              type="text"
              name="heightAtShoulder"
              id="femaleHeight"
              autoComplete="on"
              value={heightAtShoulder.females}
              onChange={(e) => setHeightAtShoulder({ ...heightAtShoulder, females: e.target.value })}
              className=""
            />
          </div>
          <div className="d-flex maleWeight">
            <label className="" htmlFor="maleWeight">Male Weight:</label>
            <input
              type="text"
              name="weight"
              id="maleWeight"
              autoComplete="on"
              value={weight.males}
              onChange={(e) => setWeight({ ...weight, males: e.target.value })}
              className=""
            />
          </div>
          <div className="d-flex femaleWeight">
            <label className="" htmlFor="femaleWeight">Female Weight:</label>
            <input
              type="text"
              name="weight"
              id="femaleWeight"
              autoComplete="on"
              value={weight.females}
              onChange={(e) => setWeight({ ...weight, females: e.target.value })}
              className=""
            />
          </div>
          <div className="d-flex grooming">
            <label className="" htmlFor="breedGrooming">Grooming:</label>
            <input
              type="text"
              name="grooming"
              id="breedGrooming"
              autoComplete="on"
              value={grooming}
              onChange={(e) => setGrooming(e.target.value)}
              className=""
            />
          </div>
          <div className="d-flex cost">
            <label className="" htmlFor="breedCost">Cost:</label>
            <input
              type="text"
              name="cost"
              id="breedCost"
              autoComplete="on"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              className=""
            />
          </div>
          <div className="d-flex capabilities">
            <label className="" htmlFor="breedCapabilities">Capabilities:</label>
            <input
              type="text"
              name="capabilities"
              id="breedCapabilities"
              autoComplete="on"
              value={capabilities}
              onChange={(e) => setCapabilities(e.target.value)}
              className=""
            />
          </div>
          <div className="d-flex trainingTip">
            <label className="" htmlFor="breedTrainingTips">Training Tip:</label>
            <input
              type="text"
              name="trainingTip"
              id="breedTrainingTips"
              autoComplete="on"
              value={trainingTip}
              onChange={(e) => setTrainingTip(e.target.value)}
              className=""
            />
          </div>
          <div className="d-flex housebreaking">
            <label className="" htmlFor="housebreakingBreeds">Housebreaking:</label>
            <input
              type="text"
              name="housebreaking"
              id="housebreakingBreeds"
              autoComplete="on"
              value={housebreaking}
              onChange={(e) => setHousebreaking(e.target.value)}
              className=""
            />
          </div>
          <div className="d-flex aestheticQuality">
            <label className="" htmlFor="breedAestheticQuality">Aesthetic Quality:</label>
            <input
              type="text"
              name="aestheticQuality"
              id="breedAestheticQuality"
              autoComplete="on"
              value={aestheticQuality}
              onChange={(e) => setAestheticQuality(e.target.value)}
              className=""
            />
          </div>
          <div className="d-flex personality">
            <label className="" htmlFor="breedPersonality">Personality:</label>
            <input
              type="text"
              name="personality"
              id="breedPersonality"
              autoComplete="on"
              value={personality}
              onChange={(e) => setPersonality(e.target.value)}
              className=""
            />
          </div>
          <button className="createDogSaveBtn" onClick={handleSaveDog}>Save</button>
        </form>
      </div>
    </div>
  );
};
export default CreateDog;
