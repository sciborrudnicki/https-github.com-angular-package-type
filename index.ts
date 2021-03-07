import { isArray, Primitive } from "@angular-package/type";

const STRING = "Lorem ipsum?";
const NUMBER = 27;
const BOOLEAN = false;
const UNDEFINED = undefined;
const ARRAYSTRING: Array<string> = ["a", "b", "c"];
const ARRAYNUMBER: Array<number> = [1, 2, 3];
const ARRAYPRIMITIVE: Array<Primitive> = ["string", 27, true];
const JSON_VALUE = { foo: 123 };
console.log(`STRING`, isArray(STRING)); // false
console.log(`NUMBER`, isArray(NUMBER)); // false
console.log(`BOOLEAN`, isArray(BOOLEAN)); // false
console.log(`UNDEFINED`, isArray(UNDEFINED)); // false
console.log(`ARRAYSTRING`, isArray(ARRAYSTRING)); // true
console.log(`ARRAYNUMBER`, isArray(ARRAYNUMBER)); // true
console.log(`ARRAYPRIMITIVE`, isArray(ARRAYPRIMITIVE)); // true
console.log(`JSON_VALUE`, isArray(JSON_VALUE)); // false
