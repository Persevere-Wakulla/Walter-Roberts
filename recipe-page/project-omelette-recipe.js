                //  The Header is for the picture of the Omelette
const pictureElement = document.getElementById('picture');
const newPicture = './images/Cajun-Style-Lasagna-2-e1574792735811-1200x752.jpg';

pictureElement.src = newPicture

                // This Section is for the title of the Recipe
const newRecipeName = 'Roberts Cajun Style Lasagna';
const recipeNameElement = document.getElementById('recipe')

recipeNameElement.textContent = newRecipeName

const newDish = 'A dish that takes a lot of work, but it is well worth the time and effort that it takes to prepare it and an awesome dish to impress the in-laws with! It contains lots of cheeses, meat, and a mixture of spices for the flavor of a life time';
const newDishNameElement = document.getElementById('dish');

newDishNameElement.textContent = newDish

                // This Section is for the Preparation time
const newTotalPreparationTime = '3hrs45mins';
const newTotalPreparationTimeNameElement = document.getElementById('duration');

newTotalPreparationTimeNameElement.textContent = newTotalPreparationTime

const newPreparationTime = '30mins';
const newPreparationTimeNameElement = document.getElementById('preparation');

newPreparationTimeNameElement.textContent = newPreparationTime

const newCookingTime = '3hrs15mins';
const newCookingTimeNameElement = document.getElementById('cookingTime');

newCookingTimeNameElement.textContent = newCookingTime



                // This Section is for the Ingredients and what you will need to make the meal

const newMainIngrdientList = '1 pound Italian Sausage';
const ingredientOneElement = document.getElementById("mainIngredient");

ingredientOneElement.textContent = newMainIngrdientList;

const newMainIngredient = '1 pound Ground Beef';
const ingredientTwoElement = document.getElementById("salt");

ingredientTwoElement.textContent = newMainIngredient;

const newIngredient = '1 cup finely chopped onions';
const ingredientThreeElement = document.getElementById("pepper");

ingredientThreeElement.textContent = newIngredient;

const newPepperAndGarlic = '2 crushed/finely chopped Cloves of Garlic';
const ingredientFourElement = document.getElementById("butterOil");

ingredientFourElement.textContent = newPepperAndGarlic;

const newCrushedTomatos = '1 (12 ounce) can of crushed tomatoes';
const ingredientFiveElement = document.getElementById("optionalFillings");

ingredientFiveElement.textContent = newCrushedTomatos

const newIngreElementSix = document.createElement ('li');

const newIngreElementSeven = document.createElement ('li');
const newIngreElementEight = document.createElement ('li');
const newIngreElementNine = document.createElement ('li');
const newIngreElementTen = document.createElement ('li');
const newIngreElementEleven = document.createElement ('li');
const newIngreElementTwelve = document.createElement ('li');
const newIngreElementThirteen = document.createElement ('li');
const newIngreElementFourteen = document.createElement ('li');
const newIngreElementFifteen = document.createElement ('li');
const newIngreElementSixteen = document.createElement ('li');
const newIngreElementSeventeen = document.createElement ('li');
const newIngreElementEighteen = document.createElement ('li');
const newIngreElementNineteen = document.createElement ('li');
const newIngreElementTwenty = document.createElement ('li');

const tomatoSauce = '1 12 oz can of tomato sauce'
const newIngreSix = document.createTextNode(tomatoSauce);
newIngreElementSix.appendChild(newIngreSix);
const positionSix = document.getElementsByTagName('li')[7];
positionSix.appendChild(newIngreElementSix);

const tomatoPaste = '1 12 oz can of tomato paste'
const newIngreSeven = document.createTextNode(tomatoPaste);
newIngreElementSeven.appendChild(newIngreSeven);
const positionSeven = document.getElementsByTagName('li')[7];
positionSeven.appendChild(newIngreElementSeven);

const water = '1/2 cup water'
const newIngreEight = document.createTextNode(water);
newIngreElementEight.appendChild(newIngreEight);
const positionEight = document.getElementsByTagName('li')[7];
positionEight.appendChild(newIngreElementEight);

const freshParsley = '4 tablespoons chopped fine fresh parsley'
const newIngreNine = document.createTextNode(freshParsley);
newIngreElementNine.appendChild(newIngreNine);
const positionNine = document.getElementsByTagName('li')[7];
positionNine.appendChild(newIngreElementNine);

const salt = '1 1/2 teaspoons salt'
const newIngreTen = document.createTextNode(salt);
newIngreElementTen.appendChild(newIngreTen);
const positionTen = document.getElementsByTagName('li')[7];
positionTen.appendChild(newIngreElementTen);

const cajunSeasoning = '2 teaspoons Cajun seasoning'
const newIngreEleven = document.createTextNode(cajunSeasoning);
newIngreElementEleven.appendChild(newIngreEleven);
const positionEleven = document.getElementsByTagName('li')[7];
positionEleven.appendChild(newIngreElementEleven);

const cayanPepper = '4 medium sized chopped Cayan peppers'
const newIngreTwelve = document.createTextNode(cayanPepper);
newIngreElementTwelve.appendChild(newIngreTwelve);
const positionTwelve = document.getElementsByTagName('li')[7];
positionTwelve.appendChild(newIngreElementTwelve);

const noodles = '12 Lasagna noodles'
const newIngreThirteen = document.createTextNode(noodles);
newIngreElementThirteen.appendChild(newIngreThirteen);
const positionThirteen = document.getElementsByTagName('li')[7];
positionThirteen.appendChild(newIngreElementThirteen);

const stuffedShells = '8 Large Seashell noodles'
const newIngreFourteen = document.createTextNode(stuffedShells);
newIngreElementFourteen.appendChild(newIngreFourteen);
const positionFourteen = document.getElementsByTagName('li')[7];
positionFourteen.appendChild(newIngreElementFourteen);

const ricottaCheese = '16 oz Ricotta cheese'
const newIngreFifteen = document.createTextNode(ricottaCheese);
newIngreElementFifteen.appendChild(newIngreFifteen);
const positionFifteen = document.getElementsByTagName('li')[7];
positionFifteen.appendChild(newIngreElementFifteen);

const egg = '1 large Egg'
const newIngreSixteen = document.createTextNode(egg);
newIngreElementSixteen.appendChild(newIngreSixteen);
const positionSixteen = document.getElementsByTagName('li')[7];
positionSixteen.appendChild(newIngreElementSixteen);

const parmesanCheese = '1 cup grated Parmesan cheese'
const newIngreSeventeen = document.createTextNode(parmesanCheese);
newIngreElementSeventeen.appendChild(newIngreSeventeen);
const positionSeventeen = document.getElementsByTagName('li')[7];
positionSeventeen.appendChild(newIngreElementSeventeen);

const mozzarellaCheese = '1/2 pound Mozzarella Cheese, sheredded'
const newIngreEighteen = document.createTextNode(mozzarellaCheese);
newIngreElementEighteen.appendChild(newIngreEighteen);
const positionEighteen = document.getElementsByTagName('li')[7];
positionEighteen.appendChild(newIngreElementEighteen);

const farmersCheese = '1/2 pound Famers cheese, shredded'
const newIngreNineteen = document.createTextNode(farmersCheese);
newIngreElementNineteen.appendChild(newIngreNineteen);
const positionNineteen = document.getElementsByTagName('li')[7];
positionNineteen.appendChild(newIngreElementNineteen);

const pepperjackCheese = '1/2 pound Pepperjack cheese'
const newIngreTwenty = document.createTextNode(pepperjackCheese);
newIngreElementTwenty.appendChild(newIngreTwenty);
const positionTwenty = document.getElementsByTagName('li')[7];
positionTwenty.appendChild(newIngreElementTwenty);

                // This Section is for the Instructions and how to prepare it.


const newInstructionsStepOneOne = 'Step 1: ';
const newInstructionsStepOneOneNameElement = document.getElementById('stepOneOne');
const newInstructionsStepOne = 'Gather all your ingredients that you will need and also the bowls & pans that You are going to need';
const newInstructionsStepOneNameElement = document.getElementById('stepOne');

newInstructionsStepOneOneNameElement.textContent = newInstructionsStepOneOne
newInstructionsStepOneNameElement.textContent = newInstructionsStepOne

const newInstructionsStepOneTwo = 'Step 2: ';
const newInstructionsStepOneTwoNameElement = document.getElementById('stepOneTwo');
const newInstructionsStepTwo = 'Place a non-stick frying pan or skillet over medium heat and Cook all your sausage, Ground Beef, 1/2 cup chopped Onions, 1 clove of Garlic, 2 tablespoons chopped fine parsley, 1/2 teaspoon salt, 1 teaspoon cajunSeasoning, 2 chopped Cayan Peppers and cook until golden brown or well done.';
const newInstructionsStepTwoNameElement = document.getElementById('stepTwo');

newInstructionsStepOneTwoNameElement.textContent = newInstructionsStepOneTwo
newInstructionsStepTwoNameElement.textContent = newInstructionsStepTwo

const newInstructionsStepOneThree = 'Step 3: ';
const newInstructionsStepOneThreeNameElement = document.getElementById('stepOneThree');
const newInstructionsStepThree = 'Place another non-stick frying pan or skillet over low heat and stir in crushed tomatoes, tomato sauce, tomato paste, water, 1/2 cup chopped Onions, 1 clove of Garlic, 1/2 teaspoon salt, 1 teaspoon Cajun Seasoning, 2 chopped Cayan Peppers, 2 tablespoons chopped fine parsley. Simmer, covered, for about 1 1/2 hours, stirring occasionally.';
const newInstructionsStepThreeNameElement = document.getElementById('stepThree');

newInstructionsStepOneThreeNameElement.textContent = newInstructionsStepOneThree
newInstructionsStepThreeNameElement.textContent = newInstructionsStepThree

const newInstructionsStepOneFour = 'Step 4: ';
const newInstructionsStepOneFourNameElement = document.getElementById('stepOneFour');
const newInstructionsStepFour = 'Grab two large pots of lightly salted water and bring to a boil. Place your Lasagna noodles in one and in the other place your Large Seashell noodles and cook both for about 10 to 12 minutes. Drain noodles, and rinse with cold water.';
const newInstructionsStepFourNameElement = document.getElementById('stepFour');

newInstructionsStepOneFourNameElement.textContent = newInstructionsStepOneFour
newInstructionsStepFourNameElement.textContent = newInstructionsStepFour

const newInstructionsStepOneFive = 'Step 5: ';
const newInstructionsStepOneFiveNameElement = document.getElementById('stepOneFive');
const newInstructionsStepFive = 'In a mixing bowl, combine Ricotta cheese, the egg, 1/2 teaspoon salt.';
const newInstructionsStepFiveNameElement = document.getElementById('stepFive');

newInstructionsStepOneFiveNameElement.textContent = newInstructionsStepOneFive
newInstructionsStepFiveNameElement.textContent = newInstructionsStepFive

const newInstructionsStepOneSix = 'Step 6: ';
const newInstructionsStepOneSixNameElement = document.getElementById('stepOneSix');
const newInstructionsStepSix = 'Preheat the oven to 375 degrees F';
const newInstructionsStepSixNameElement = document.getElementById('stepEnjoy');

newInstructionsStepOneSixNameElement.textContent = newInstructionsStepOneSix
newInstructionsStepSixNameElement.textContent = newInstructionsStepSix

const newInstructionsElementSeven = document.createElement ('li');
const newInstructionsElementEight = document.createElement ('li');
const newInstructionsElementNine = document.createElement ('li');
const newInstructionsElementTen = document.createElement ('li');
const newInstructionsElementEleven = document.createElement ('li');
const newInstructionsElementTwelve = document.createElement ('li');
const newInstructionsElementThirteen = document.createElement ('li');

const stepSeven = 'Step 7: In a bowl mix 1/4 pound of Mozzarella Cheese, 1/4 pound of Pepperjack Cheese, 1/4 pound of Farmers Cheese.'
const newInstructionsSeven = document.createTextNode(stepSeven);
newInstructionsElementSeven.appendChild(newInstructionsSeven);

const instructionList = document.getElementById('yourSteps')
const liTest = document.createElement('li')
instructionList.appendChild(newInstructionsElementSeven)

const stepEight = 'Step 8: To assemble the Large Seashell Noodles. Have a knife to split the bottom of the noodle open just enough to put the cheese into. Grab a hand full of the mixed cheeses and put inside the noodles. Make sure all 8 noodles have cheese inside and set to the side until ready to use.'
const newInstructionsEight = document.createTextNode(stepEight);
newInstructionsElementEight.appendChild(newInstructionsEight);
const positionsEight = document.getElementsByTagName('li')[29];
positionsEight.appendChild(newInstructionsElementEight);

// instructionList.appendChild(newIngreElementEight)


const stepNine = 'Step 9: To assemble the whole dish. Grab a 9x13-inch baking dish or the same size Tin Pan and spread 1 cup of meat sauce in the bottom of the dish. Arrange 6 Lasagna noodles over the top of the meat sauce, overlapping noodles slightly. Spread with 1/3 of the Ricotta Cheese mixture. Top with a 1/4 of the mixed cheeses. Spoon 1 cup of meat sauce over mixed cheeses. Place 4 of the Stuffed Large Seashell Noodles on top of meat sauce, and sprinkle with 1/3 cup of Parmesan Cheese.'
const newInstructionsNine = document.createTextNode(stepNine);
newInstructionsElementNine.appendChild(newInstructionsNine);
const positionsNine = document.getElementsByTagName('li')[29];
positionsNine.appendChild(newInstructionsElementNine);



const stepTen = 'Step 10: Repeat Step 9, repeating the layers and top with the remaining mixed cheeses and Parmesan Cheese. Cover with foil that is sprayed lightly with cooking spray to prevent sticking.'
const newInstructionsTen = document.createTextNode(stepTen);
newInstructionsElementTen.appendChild(newInstructionsTen);
const positionsTen = document.getElementsByTagName('li')[29];
positionsTen.appendChild(newInstructionsElementTen);



const stepEleven = 'Step 11: Bake in the preheated oven for 30 minutes. Remove the foil and bake for an additional 30 minutes.'
const newInstructionsEleven = document.createTextNode(stepEleven);
newInstructionsElementEleven.appendChild(newInstructionsEleven);
const positionsEleven = document.getElementsByTagName('li')[29];
positionsEleven.appendChild(newInstructionsElementEleven);



const stepTwelve = 'Step 12: Rest Lasagna for 15 minutes before serving.'
const newInstructionsTwelve = document.createTextNode(stepTwelve);
newInstructionsElementTwelve.appendChild(newInstructionsTwelve);
const positionsTwelve = document.getElementsByTagName('li')[29];
positionsTwelve.appendChild(newInstructionsElementTwelve);



const stepThirteen = 'Step 13: Enjoy, serve hot, with a great bottle of wine or a drink of your liking.'
const newInstructionsThirteen = document.createTextNode(stepThirteen);
newInstructionsElementThirteen.appendChild(newInstructionsThirteen);
const positionsThirteen = document.getElementsByTagName('li')[29];
positionsThirteen.appendChild(newInstructionsElementThirteen);



                // The Footer is for the Nutritional values of the meal.

const newTotalCalories = '470kcal';
const newTotalCaloriesNameElement = document.getElementById('totalCalories');
 
newTotalCaloriesNameElement.textContent = newTotalCalories

const newTotalCarbs = '40g';
const newTotalCarbsNameElement = document.getElementById('totalCarbs');

newTotalCarbsNameElement.textContent = newTotalCarbs

const newTotalProtein = '35g';
const newTotalProteinNameElement = document.getElementById('totalProtein');

newTotalProteinNameElement.textContent = newTotalProtein

const newTotalFat = '30g';
const newTotalFatNameElement = document.getElementById('totalFat');

newTotalFatNameElement.textContent = newTotalFat











