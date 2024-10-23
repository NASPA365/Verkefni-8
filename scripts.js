import { reverse } from "./lib/reverse.js";
import { longest } from "./lib/longest.js";
import { shortest } from "./lib/shortest.js";
import { vowels } from "./lib/vowels.js";
import { consonants } from "./lib/consonants.js";
import { palindrome } from "./lib/palindrome.js";
/**
 * Sýnilausn á verkefni 8 í Vefforritun 1, 2024.
 * Byggir á sýnilausn á verkefni 7.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

document.addEventListener("DOMContentLoaded", function () {
  function removeHidden(el) {
    el.classList.remove("hidden");
  }

  const outputElement = document.querySelector(".output");

  if (outputElement) {
    removeHidden(outputElement);
  }

  const inputElement = document.querySelector(".input");
  const reversedElement = document.querySelector(".reversed");
  const longestElement = document.querySelector(".longest");
  const shortestElement = document.querySelector(".shortest");
  const vowelsElement = document.querySelector(".vowels");
  const consonantsElement = document.querySelector(".consonants");
  const palindromeElement = document.querySelector(".palindrome");

  const textarea = document.getElementById("string");

  textarea.addEventListener("input", function () {
    const sentence = textarea.value; // Fá textann úr textarea
    inputElement.textContent = sentence; // Uppfæra input elementið

    const reversed = reverse(sentence); // Fá öfugan texta
    const longestWord = longest(sentence); // Kalla á longest fallið
    const shortestWord = shortest(sentence); // Kalla á shortest fallið
    const vowelCount = vowels(sentence); // Kalla á countVowels fallið
    const consonantCount = consonants(sentence); // Kalla á countConsonants fallið
    const palindromeCheck = palindrome(sentence); // Kalla á isPalindrome fallið

    //uppfæra

    reversedElement.textContent = reversed;
    longestElement.textContent = longestWord;
    shortestElement.textContent = shortestWord;
    vowelsElement.textContent = vowelCount;
    consonantsElement.textContent = consonantCount;
    palindromeElement.textContent = palindromeCheck ? " " : "ekki ";
  });
});
