const plain = "TELEGRAMFACEBOOKINSTAGRAM";
const k = 3;

let removedDuplicateString = removeDuplicateCharacters(plain);

let splittedPlain = removedDuplicateString.split('');
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

function removeDuplicateCharacters(string) {
  return string
    .split('')
    .filter(function(item, pos, self) {
      return self.indexOf(item) == pos;
    })
    .join('');
}