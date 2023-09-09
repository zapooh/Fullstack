/*Oppgaven er å finne det lengste ordet i en statisk tekst.

I denne oppgaven får du øvd på:

- bruk av for-løkke (eller forEach)
- bruk av array
- bruk av conditionals (if / else)*/




const text =
  "Baby cliche unicorn brooklyn farm-to-table. Salvia semiotics hella literally paleo humblebrag bushwick letterpress messenger bag pork belly brooklyn authentic vexillologist. Gastropub sustainable banjo, shaman snackwave viral air plant ramps health goth. Edison bulb vegan microdosing, tote bag unicorn skateboard disrupt copper mug four loko sustainable whatever cloud bread slow-carb lumbersexual four dollar toast. Waistcoat lomo hammock vape shabby chic sartorial yr godard pok pok fashion axe organic migas. Quinoa yr vexillologist intelligentsia verylongwordthatislong neutra mixtape YOLO XOXO listicle letterpress farm-to-table beard.";

const longestWord = () => {
  const words = text.split(" "); // Del opp teksten i en array med ord
  let longest = ""; // Lagre lengste ord her

  words.forEach(word => {
    if (word.length > longest.length) {
      longest = word; // Oppdater lengste ord
    }
  });

  return longest;
};

console.log(longestWord());
