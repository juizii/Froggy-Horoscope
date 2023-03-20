// input two values and store them into variables
//put a smurf on the check button
//create a function with conditionals that checks input and compares.
//h2 will display astrological sign
//h3 small comment
// picture of froggo will appear (check bachelor code again)

document.querySelector("button").addEventListener("click", astro);
const input = document.querySelector("#month");
const input2 = document.querySelector("#day");

function astro() {
  let month = document.querySelector("#month").value.toLowerCase();
  let day = document.querySelector("#day").value;
  let frog = document.querySelector(".froggy");

  if (input.value === "") return alert("Please Insert a Month/Day.");
  if (input2.value === "") return alert("Please Insert a Month/Day.");

  if (
    (month === "january" && day >= 20) ||
    (month === "february" && day <= 18)
  ) {
    document.querySelector("#check").innerText = "Aquarius";
    frog.src = "img/Aquarius.jpg";

    //     if(document.querySelector('#aquarius').classList.contains('hidden')){
    //     document.querySelector('#aquarius').classList.toggle('hidden')
    //    }
  } else if (
    (month === "february" && day >= 19) ||
    (month === "march" && day <= 20)
  ) {
    document.querySelector("#check").innerText = "Pisces";
    frog.src = "img/Pisces.jpeg";

    // if(document.querySelector('#pisces').classList.contains('hidden')){
    //     document.querySelector('#pisces').classList.toggle('hidden')
    // }
  } else if (
    (month === "march" && day >= 21) ||
    (month === "april" && day <= 19)
  ) {
    document.querySelector("#check").innerText = "Aries";
    frog.src = "img/Aries.jpg";

    // if(document.querySelector('#aries').classList.contains('hidden')){
    // document.querySelector('#aries').classList.toggle('hidden')
    // }
  } else if (
    (month === "april" && day >= 20) ||
    (month === "may" && day <= 20)
  ) {
    document.querySelector("#check").innerText = "Taurus";
    frog.src = "img/Taurus.jpg";
  } else if (
    (month === "may" && day >= 21) ||
    (month === "june" && day <= 20)
  ) {
    document.querySelector("#check").innerText = "Gemini";
    frog.src = "img/Gemini.jpg";
  } else if (
    (month === "june" && day >= 21) ||
    (month === "july" && day <= 22)
  ) {
    document.querySelector("#check").innerText = "Cancer";
    frog.src = "img/Cancer.jpg";
  } else if (
    (month === "july" && day >= 23) ||
    (month === "august" && day <= 22)
  ) {
    document.querySelector("#check").innerText = "Leo";
    frog.src = "img/Leo.jpg";
  } else if (
    (month === "august" && day >= 23) ||
    (month === "september" && day <= 22)
  ) {
    document.querySelector("#check").innerText = "Virgo";
    frog.src = "img/Virgo.jpg";
  } else if (
    (month === "september" && day >= 23) ||
    (month === "october" && day <= 22)
  ) {
    document.querySelector("#check").innerText = "Libra";
    frog.src = "img/Libra.jpg";
  } else if (
    (month === "october" && day >= 23) ||
    (month === "november" && day <= 21)
  ) {
    document.querySelector("#check").innerText = "Scorpio";
    frog.src = "img/Scorpio.jfif";
  } else if (
    (month === "november" && day >= 22) ||
    (month === "december" && day <= 21)
  ) {
    document.querySelector("#check").innerText = "Sagittarius";
    frog.src = "img/Sagittarius.jpg";
  } else if (
    (month === "december" && day >= 22) ||
    (month === "january" && day <= 19)
  ) {
    document.querySelector("#check").innerText = "Capricorn";
    frog.src = "img/Capricorn.jpg";
  }

  input.value = "";
  input2.value = "";
}
