// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

/*var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisble by three"

//Write function named divideThree with the parameter/argument named num

const divideThree = (num) => {



    
//Write if statment if num is divided by three it is strictly equal to zero.
    if(num % 3 === 0){

//return a string interpolation stating num is divisible by three
        return `${num} is divisible by three`

//write an else if statement of num divided by three is not equal to zero
    } else if(num % 3 !==0){

// return with string interpolation stating num is not divisible by three
        return `${num} is not divisible by three`
// input else statement to output something is wrong if there is an error.
    } else {
        return "Something is wrong"
    }
}

// a) Create a test with expect statements for each of the variables provided.

//write test with the method "divideThree" to return is divisible by three.
describe("divideThree", () => {
    test ("returns is divisible by three", () => {
        expect(divideThree().toEqual("is divisible by three"))
    })
})


// b) Create the function that makes the test pass.
//write the function diviethree to return is divisible by three.
divideThree = () => {
    return "is divisible by three"
} //Not sure why I can't pass the test.*/




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
    
}

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

//Declare a function named capWords with a parameter named array.
const capWords = (array) => {
//create a variable for the new mapped array
    let newArr = array.map(value => {
//access the first index and capitalize the first letter for each word.
        return `value[0].toUpperCase()`
    })
    //got stuck and had trouble finding the right instruction in the syllabus.



// b) Create the function that makes the test pass.





// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

//Declare function called vowelsIndex
const vowelsIndex = (vowel) => {
//use .split() to mae an array out of the strings.
    let firstVowel = vowel.split(value => {

    }
}

//I got stuck.



// b) Create the function that makes the test pass.
