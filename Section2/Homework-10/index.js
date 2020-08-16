console.log(`Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows
`);
let weight = parseFloat(prompt(`Please, enter your weight in kg`));
let height = parseFloat(prompt(`Please, enter your height in cm`));

let BMI = weight / Math.pow(height / 100, 2);
if (BMI < 16) {
    alert(`you are severely underweight`);
} else if (BMI >= 16 && BMI < 18.5) {
    alert(`you are underweight`);
} else if (BMI > 18.5 && BMI <= 25) {
    alert(`you are normal! Congratulation!`);
} else if (BMI > 25 && BMI <= 30) {
    alert(`you are overweight`);
} else {
    alert(`you are surely obese`);
}