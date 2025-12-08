import {apiKey} from "./util.js"

console.log(apiKey);

function transformToObjects(numberArray) {
    let nv = numberArray.map(item => ({val: item}));
    return nv;
}

let arrayG = [1,2,3,4,5];

console.log(transformToObjects(arrayG));