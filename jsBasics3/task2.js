function checkAge (age) {
    if (age >= 18) {
        return true;
    }
    return false;
}

let age1 = 15;
let age2 = 20;

console.log(age1 + " this is adulthood? - " + checkAge(age1))
console.log(age2 + " this is adulthood? - " + checkAge(age2))
