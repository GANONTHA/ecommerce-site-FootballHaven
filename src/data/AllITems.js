import { JERSEYS, BOOTS, SOCKS, BALLS, GLOVES } from "./Items";

var ITEMS = [];
for (let i = 0; i < JERSEYS.length; i++) {
  ITEMS.push(JERSEYS[i]);
}
for (let i = 0; i < BOOTS.length; i++) {
  ITEMS.push(BOOTS[i]);
  ITEMS.push(BALLS[i]);
  ITEMS.push(SOCKS[i]);
}
for (let i = 0; i < GLOVES.length; i++) {
  ITEMS.push(GLOVES[i]);
}

// let it = [];
// for (let i = 0; i < ITEMS.length; i++) {
//    it = Object.assign({}, ITEMS, { color: "red" });

//   const t = Object.assign({}, ITEMS[i], { color: "red white" });
//   it.push(t);
// }
// console.log(it);

export default ITEMS;
