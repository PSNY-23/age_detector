const userInput = document.getElementById("user-input");
const resultDiv = document.getElementById("result");
const button = document.getElementById("submit-button");

button.addEventListener("click", () => {
  const age = parseFloat(userInput.value); 

  if (isNaN(age) || age < 0) {
    // Handle invalid input
    resultDiv.textContent = `❌Please enter a valid number for your age here.❌`;
  } else {
    if (age === 0) {
      resultDiv.textContent = "🤰Pehle paida to hole bsdk🤰";
    } else if (age === 2) {
      resultDiv.textContent = "👶Chhote bacche, ab sirf khelne ka samay hai!👶";
    } else if (age === 5) {
      resultDiv.textContent =
        "🧒School jaana shuru kiya! Kitne naye dost ban gaye!🧒";
    } else if (age === 14) {
      resultDiv.textContent =
        "👦Adolescence ka samay, thoda attitude aane laga!👦";
    } else if (age === 18) {
      resultDiv.textContent =
        "🎉Aap ab adult hain! Zindagi ke naye mauke aapka intezar kar rahe hain!🎉";
    } else if (age === 22) {
      resultDiv.textContent =
        "🎓College khatam hone wala hai, nayi zindagi shuru karne ka samay!🎓";
    } else if (age === 26) {
      resultDiv.textContent =
        "💼Career ki shuruaat, kuch zyada hi responsibilities!💼";
    } else if (age === 30) {
      resultDiv.textContent =
        "🧑‍🦳Thoda settle ho rahe hain, abhi toh life ka asli maza aana shuru hua hai!🧑‍🦳";
    } else if (age === 50) {
      resultDiv.textContent =
        "👴Zindagi ki samajh aagayi hai, ab toh wisdom ka jamana hai!👴";
    } else if (age === 60) {
      resultDiv.textContent =
        "👵Retirement ka samay, ab aaram se duniya dekhne ka mauka!👵";
    } else if (age === 80) {
      resultDiv.textContent =
        "🧓Bohot saari yaadein, zindagi ki kahani sunane ka samay!🧓";
    } else if (age === 100) {
      resultDiv.textContent =
        "🎉Kya baat hai! Aapne ek century maar di! Zindagi ka pura maza liya!🎉";
    } else {
      resultDiv.textContent = `🧑‍🦱Ab Bacche nahi rage tum! Zindagi ke naye challenges ka samna kar rahe ho!🧑‍🦱`;
    }
  }
});
