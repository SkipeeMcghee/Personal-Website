const set1 = [
  "artless",
  "bawdy",
  "cockered",
  "droning",
  "errant"
];
  
const set2 = [
  "beef witted",
  "clapper-clawed",
  "dog-hearted",
  "elf-skinned",
  "fly-bitten"
];
  
const set3 = [
  "wagtail",
  "varlot",
  "strumpot",
  "pigeon-egg",
  "foot-licker"
];
  
function generateRandomMessage() {
  const randomIndex1 = Math.floor(Math.random() * set1.length);
  const randomIndex2 = Math.floor(Math.random() * set2.length);
  const randomIndex3 = Math.floor(Math.random() * set3.length);
    
  const message = `Thou ${set1[randomIndex1]} ${set2[randomIndex2]} ${set3[randomIndex3]}!`;
  return message;
}
  
function insertInsult() {
  document.getElementById('insult').innerHTML = generateRandomMessage();
}

document.querySelector('button').addEventListener('click', insertInsult);