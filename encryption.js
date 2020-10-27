const plain = "TELEGRAM";
const k = 3;

let splittedPlain = plain.split('');
let currentLetter;
let encrypted = '';
for(let i = 0; i < splittedPlain.length; i++) {
  let index = (i * k) % (splittedPlain.length - 1)
  currentLetter = splittedPlain[index];
  if(encrypted.includes(currentLetter)) {
    continue;
  }
  encrypted += currentLetter;
}
console.log(encrypted)