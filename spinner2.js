let delay = 100;
let spinnerChar = '|/-\\|/-\\|';

for (const char of spinnerChar) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
};

setTimeout(() => {
  process.stdout.write('\n');
}, delay);


