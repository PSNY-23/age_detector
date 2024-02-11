// const age = document.getElementById("user-input");
// const text = document.getElementById("result");
// const button = document.getElementById("submit-button");

// // button.addEventListener("click", ageDetector);
// button.addEventListener("click", () => ageDetector(age.value));

// function ageDetector(age) {
//   if (typeof age === "number") {
//     if (age <= 0) {
//       text.innerHTML = `Person: ${age} is Little Kids`;
//     } else if (age < 18) {
//       text.innerHTML = `Person: ${age} is Little Kids`;
//     } else if (age >= 18 && age < 100) {
//       text.innerHTML = `Person: ${age} You are an adult bro`;
//     } else if (age >= 100) {
//       text.innerHTML = `Person: ${age} Hila dala baba ne `;
//     }
//   } else {
//     text.innerHTML = `Person: ${age} please enter a valid age`;
//   }
// }

// gemini solutions
const age = document.getElementById("user-input");
const text = document.getElementById("result");
const button = document.getElementById("submit-button");

button.addEventListener("click", () => ageDetector(age.value));

function ageDetector(age) {
  if (typeof age === "number") {
    if (age <= 18) {
      text.innerHTML = `Person: ${age} is Little Kids`;
    } else if (age >= 18 && age < 100) {
      text.innerHTML = `Person: ${age} You are an adult bro`;
    } else {
      text.innerHTML = `Person: ${age} Hila dala baba ne`;
    }
  } else {
    text.innerHTML = `Person: ${age} please enter a valid age`;
  }
}
