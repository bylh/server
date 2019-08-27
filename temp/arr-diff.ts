#!/usr/bin/env ts-node

let a = new Set([1, 2, 3]);
let b = new Set([3, 5, 2]); 

// 并集
let unionSet = new Set([...a, ...b]);
//[1,2,3,5]

// 交集
let intersectionSet = new Set([...a].filter(x => b.has(x)));
// [2,3]

// ab差集
let differenceABSet = new Set([...a].filter(x => !b.has(x)));
let differenceBASet = new Set([...b].filter(x => !a.has(x)));
console.log(Array.from(differenceABSet), Array.from(differenceBASet));

// let a1 = ['A', 'B', 'C'];
// let a2 = ['D', 'E', 'C', 'A'];

// let result = Array.from(new Set([...a1.filter(x => a2.includes(x)), ...a2]));

// console.log(result);