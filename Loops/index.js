console.log("Loops");
//Loops

//syntax:
//for loop
// do while
// while loop

//Example: Multiplication Table
// syntax: (begin step; condition; next step)
for (let i = 1; i <= 10; i++) {
  const result = 2 * i;
  console.log(`2*${i} = ${result}`);
}

//2. do while
let j = 1;
do {
  const result = 2 * j;
  console.log(`2*${j} = ${result}`);
  j++;
} while (j <= 10);

//3. while loop
let k = 1;
while (k <= 10) {
  const result = 2 * k;
  console.log(`2*${k} = ${result}`);
  k++;
}
