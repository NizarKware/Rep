let marksMass = 78;
let marksHeight = 1.69;

let johnsMass = 92;
let johnsHeight = 1.95;

let marksBMI = marksMass / marksHeight ** 2;
let johnsBMI = johnsMass / johnsHeight ** 2;

markHigherBmi = marksBMI > johnsBMI;

console.log("marksBMI 1 = " + " " + marksBMI);
console.log("johnsBMI 1 = " + " " + johnsBMI);
console.log("markHigherBmi" + " " + markHigherBmi);

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI ${marksBMI} is higher than John's BMI ${johnsBMI}`);
} else {
  console.log(`John's BMI ${johnsBMI} is higher than Mark's BMI ${marksBMI}`);
}

marksMass = 95;
marksHeight = 1.88;

johnsMass = 85;
johnsHeight = 1.76;

marksBMI = marksMass / marksHeight ** 2;
johnsBMI = johnsMass / johnsHeight ** 2;

markHigherBmi = marksBMI > johnsBMI;

console.log("marksBMI 2 = " + " " + marksBMI);
console.log("johnsBMI 2 = " + " " + johnsBMI);
console.log("markHigherBmi" + " " + markHigherBmi);

if (marksBMI > johnsBMI) {
  console.log(`Mark's BMI ${marksBMI} is higher than John's BMI ${johnsBMI}`);
} else {
  console.log(`John's BMI ${johnsBMI} is higher than Mark's BMI ${marksBMI}`);
}

let averageTeamDolphins = (96 + 108 + 89) / 3;
let averageTeamKoalas = (88 + 91 + 110) / 3;
let minimumScore = 100;
let averageTeamDolphinsBonus1 = (97 + 112 + 101) / 3;
let averageTeamKoalasBonus1 = (109 + 95 + 123) / 3;
let averageTeamDolphinsBonus2 = (97 + 112 + 101) / 3;
let averageTeamKoalasBonus2 = (109 + 95 + 106) / 3;

console.log("Average score for Dolphins : " + averageTeamDolphins);
console.log("Average score for Koalas : " + averageTeamKoalas);
console.log(
  "Bonus 1 Average score for Dolphins : " + averageTeamDolphinsBonus1
);
console.log("Bonus 1 Average score for Koalas : " + averageTeamKoalasBonus1);
console.log(
  "Bonus 2 Average score for Dolphins : " + averageTeamDolphinsBonus2
);
console.log("Bonus 2 Average score for Koalas : " + averageTeamKoalasBonus2);

if (averageTeamDolphins > averageTeamKoalas) {
  console.log("The Winner is Team Dolphins");
} else if (averageTeamDolphins > averageTeamKoalas) {
  console.log("The Wiiner is Team Koalas");
} else if (averageTeamDolphins == averageTeamKoalas) {
  console.log("Draw");
} else if (averageTeamDolphinsBonus1 > averageTeamKoalasBonus1) {
  console.log("Bonus 1 The Winner is Team Dolphins");
} else if (averageTeamDolphinsBonus1 > averageTeamKoalasBonus1) {
  console.log("Bonus 1 The Wiiner is Team Koalas");
} else if (averageTeamDolphinsBonus1 == averageTeamKoalasBonus1) {
  console.log("Bonus 1 Draw");
} else if (averageTeamDolphinsBonus2 > averageTeamKoalasBonus2) {
  console.log("Bonus 2 The Winner is Team Dolphins");
} else if (averageTeamDolphinsBonus2 > averageTeamKoalasBonus2) {
  console.log("Bonus 2 The Wiiner is Team Koalas");
} else if (averageTeamDolphinsBonus2 == averageTeamKoalasBonus2) {
  console.log("Bonus 2 Draw no winner");
}
