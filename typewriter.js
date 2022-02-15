
// Takes-in a string prints it out to console with typewriter-like animation
const typeWriter = (string) =>{

  // Loop through each letter and print each one 50ms later than the previous
  let delay = 0;
  for (const char of string) {
    delay += 50;
    setTimeout(() => {
      process.stdout.write(`${char}`);
    }, delay);

  }
  
  // Go to new line after typewriter effect
  setTimeout(() => {
    process.stdout.write(`\n`);
  }, delay + 50);

};


const sentence = "hello there from lighthouse labs";
typeWriter(sentence);