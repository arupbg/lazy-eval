const lazy = require('../lib/lazy').default;

let counter = 0;
const lazyVal = lazy(() => {
  counter += 1;
  return 1;
});
const lazyOp = lazyVal.then((v1) => lazy(() => {
  counter += 1;
  return v1 + 1;
}));
console.log(counter); // 1
console.log(lazyOp()); //  2
console.log(counter); // 2
console.log(lazyOp()); //  2
console.log(counter); // 2
