"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let laptopPrice1 = [1700,1100,1200];
// let laptopPrice2 = [1000,1400,1800];
// let combinedPrices = [...laptopPrice1,...laptopPrice2].sort();
// console.log(combinedPrices)
let a = [11, 2, 22, 1];
let b = [4, 7, 3, 5];
let c = [...a, ...b].sort((a, b) => a - b);
console.log(c);
