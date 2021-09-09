// 使用 __proto__
// const obj = {};
// const descriptor = Object.create(null); // 没有继承的属性
// 默认没有 enumerable，没有 configurable，没有 writable
// descriptor.value = 'static';
// Object.defineProperty(obj, 'key', descriptor);

// console.log(obj)

// const o = {};
// Object.defineProperty(o, "a", { value : 1, enumerable: true });
// Object.defineProperty(o, "b", { value : 2, enumerable: false });
// Object.defineProperty(o, "c", { value : 3 });
// o.d = 4; // 如果使用直接赋值的方式创建对象的属性，则 enumerable 为 true
// Object.defineProperty(o, Symbol.for('e'), {
//   value: 5,
//   enumerable: true
// });
// Object.defineProperty(o, Symbol.for('f'), {
//   value: 6,
//   enumerable: false
// });

// console.log(o.b)
// console.log(Object.keys(o))
// for (const i in o) {
//   console.log(i);
// }

function foo(a) {
  const b = 123;
  return a + b;
}

function add(a) {
  return foo(a);
}

console.log(add(123))
