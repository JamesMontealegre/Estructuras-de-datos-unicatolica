
const sbt = (a, b) => {
  let c = 0; // let, var const

  while (b < a) {
    c++;
    b++;
  }

  return c;
};

const prod = (a,b) => {

    let c = 0;

    while(a > 0) {
        a--;
        c = c + b;
    }

    return c;

}
console.log(sbt(4, 3));
console.log(prod(2,3));

