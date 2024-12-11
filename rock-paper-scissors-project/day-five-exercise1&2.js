                                    // This Is Question One As A Veriable

const posOrNeg = -1;
const aElement = document.getElementById('a');
if (posOrNeg > 0) {
    aElement.textContent='positive'
}
else {
    aElement.textContent='negative'
}

                                    // This Is Question One As A Function

function positiveOrNegative(number){
    if (number >= 0){
        console.log('Positive');
        return '${number}is Positive';
    } else {
        console.log('Negative');
        return '${number}is Negative';
    }
}
        positiveOrNegative(5)

                                    // This Is Question Two As A Veriable

const oddOrEven = 2;
const bElement = document.getElementById('b');
    if (oddOrEven % 2 === 0) {
        bElement.textContent='even'
    }
    else {
            bElement.textContent='odd'
}
        
                                    // This Is Question Two As A Function

function functionOddOrEven(number){
    if (number % 2 === 0){
        console.log('Even');
            return 'Even';
    } else {
        console.log('Odd');
            return 'Odd';
        }
}
        functionOddOrEven(5)

                                    // This Is Question Three As A Veriable
                                    
const greater = 10;
const cElement = document.getElementById('c');
    if (greater > 8) {
    cElement.textContent='greater'
    }
    else {
    cElement.textContent='lessThan'
}
                                    // This Is Question Three As A Function

function greaterThan(number){
    if (number > 5){
        console.log('Greater');
            return 'Greater';
    } else (number < 1); {
        console.log('Less Than');
            return 'Less Than';
    }
}
        greaterThan(2)
                                    // This Is Question Four As A Veriable

const grade = 6;
const dElement = document.getElementById('d');
    if (grade === 10) {
        dElement.textContent='A'
    }
    else if (grade === 9) {
        dElement.textContent='B'
    }
    else if (grade === 8) {
        dElement.textContent='C'
    }
    else if (grade === 7) {
        dElement.textContent='D'
    }
    else {
        dElement.textContent='Failed'
}
                                    // This Is Question Four As A Function
function gradeing(number){
    if (number === 10) {
        console.log('A');
    }
    else if (number === 9) {
        console.log('B');
    }
    else if (number === 8) {
        console.log('C');
    }
    else if (number === 7) {
        console.log('D');
    }
    else {
        console.log('Failed');
        }
}
        gradeing(8)

                                    // This Is Question Five As A Veriable
const priceKids = 5;
const priceTeenagers = 10;
const priceAdults = 20;
const priceSeniors = 15;
const price = 24;
const eElement = document.getElementById('e');
    if (price <= 12) {
        eElement.textContent='$5'
    }
    else if (price <= 18) {
        eElement.textContent='$10'
    }
    else if (price <= 60) {
        eElement.textContent='$20'
    }
    else {
        eElement.textContent='$15'
}

                                    // This Is Question Five As A Function
function priceForKids(price){
    if (price <= 12) {
        console.log('$5');
    }
    else if (price <= 18 && price > 12) {
        console.log('$10');
    }
    else if (price <= 60) {
        console.log('$20');
    }
    else {
        console.log('$15');
    }
}
        priceForKids(24)       

                                    // This Is Question Six As A Veriable

const leapYearCalculator = 'year % 4 === 0 && year % 100 !== 0';
const fElement = document.getElementById('f');
const year = 2038
    if ('year is a Leap Year!') {
        fElement.textContent='Leap Year'
    }
    else {
        fElement.textContent='Not A Leap Year'
}

                                    // This Is Question Six As A Function

function leapYearChecker(year){
    const leapYearCalc = year % 4 === 0 && year % 100 !== 0;
        if (leapYearCalc) {
            console.log(`${year} is a Leap Year!`)
                return true
        }
        else {
            console.log(`${year} is not a Leap Year`)
                return false
        }                                        
}
        leapYearChecker(2038)

                                // This Is Question Seven As A Function
function discount(price){
    let discountPercentage = 0;
    if (price >= 100){
        discountPercentage = .20;
            console.log(`The orginal price was ${price} and the discounted price is ${price - (price * discountPercentage)}`)
    }
    else if (price >= 50 && price < 100){
        discountPercentage = .10;
            console.log(`the orginal price was ${price} and the discounted price is ${price - (price * discountPercentage)}`)
    }
    else {
        console.log(`your price is ${price}`)
    }
}
        discount(56)

                                // This Is Question Eight As A Function

function greetings(time){
    if (time <1200){
        console.log(`Good Morning`);
    }
    else if (time <1700){
        console.log(`Good Afternoon `);
    }
    else
        console.log(`Good Evening`)    
}
        greetings(1800)

                                // This Is Question Nine As A Function

function bodyMassCalc( height, weight) {
    let bodyMass = weight / (height * height);
        if (bodyMass < 0.03){
            console.log(`You are Under Weight`)
        }
        else if (bodyMass > 0.05){
            console.log(`You are Over Wait`)
        }
        else {
            console.log(`You are a Perfect Weight`)
        }
}
        bodyMassCalc(60, 140)
                                // This Is Question Ten As A Function

function guessMyNumber(guessedNumber){
    const secretNumber = 74;
        if (guessedNumber < secretNumber){
            console.log(`To Low`)
        }
        else if (guessedNumber > secretNumber){
            console.log(`To high`)
        }
        else {
        console.log(`Ding Ding Ding!`)
        }
}
        guessMyNumber(24)

