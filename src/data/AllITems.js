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

export default ITEMS;
