const currentHour = new Date().getHours();
let timeGreeting;

if (currentHour < 12) {
    timeGreeting = "Good morning";
} else if (currentHour < 18) {
    timeGreeting = "Good afternoon";
} else {
    timeGreeting = "Good evening";
}

let userName = prompt("What is your name?");
console.log(`${timeGreeting}, ${userName}!`);

let birthYear = prompt("What is your birth year?");
let age = 2026 - Number(birthYear);
let daysLived = age * 365;
console.log(`You have lived for approximately ${daysLived} days!`);

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}