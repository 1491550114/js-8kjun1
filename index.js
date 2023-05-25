// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
// function sumAll(arr) {
//   console.log(arr)
//   let min = Math.min(arr[0],arr[1])
//   let max = Math.max(arr[0],arr[1])
//   console.log(min,max)
//   let result = 0
//   for(let i=min;i<=max;i++){
//     result+=i
//   }
//   console.log(result)
//   return result;
// }

// sumAll([1,4]);
// function diffArray(arr1, arr2) {
//   let newArr = [];
//   newArr = arr1
//     .filter((val) => {
//       console.log(arr2.indexOf(val));
//       return !arr2.includes(val);
//     })
//     .concat(
//       arr2.filter((val) => {
//         console.log(arr1.indexOf(val));
//         return !arr1.includes(val);
//       })
//     );
//   console.log(newArr);
//   return newArr;
// }

// diffArray(
//   ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
//   ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
// );
// function destroyer(arr,...args) {
//   console.log(args)
//   let newArr= arr.filter(val=>{
//     console.log(args.includes(val))
//     return !args.includes(val)
//   })
//   console.log(newArr)
// }

// destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)
function whatIsInAName(collection, source) {
  let sourceKeys = Object.keys(source);
  // console.log(sourceKeys);
  // let newArr = collection.filter((obj) => {
  //   for (let i = 0; i < sourceKeys.length; i++) {
  //     console.log(obj[sourceKeys[i]], source[sourceKeys[i]]);
  //     if (obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // });
  // let newArr = collection.filter((obj) => {
  // return  sourceKeys.every(key=>{
  //   console.log(obj[key] === source[key],obj.hasOwnProperty(key))

  //     return obj.hasOwnProperty(key) && obj[key] === source[key]
  //   })
  // });
  let newArr = collection.filter((obj) => {
    return sourceKeys
      .map((key) => {
        // console.log(obj[key] === source[key], obj.hasOwnProperty(key));
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      })
      .reduce((a, b) => {
        return a && b;
      });
  });
  // console.log(newArr);
}

// whatIsInAName(
//   [
//     { first: 'Romeo', last: 'Montague' },
//     { first: 'Mercutio', last: null },
//     { first: 'Tybalt', last: 'Capulet' },
//   ],
//   { last: 'Capulet' }
// );

function spinalCase(str) {
  // let str1 = str.toLowerCase()
  // console.log(str.split(/[A-Z][\s\_]/).join('-'))
  let regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  // str = str.replace(regex,"-").toLowerCase()
  let a = str
    .toLowerCase()
    .split(/(?:_|\s)+/)
    .join('-');
  // console.log(a);

  return str;
}
// spinalCase('This Is Spinal Tap');
// spinalCase('The_Andy_Griffith_Show');
// spinalCase('thisIsSpinalTap');
// spinalCase('Teletubbies say Eh-oh');
// spinalCase('Teletubbies say Eh-oh');

// function translatePigLatin(str) {
//   let regex = /(^[^aeiou]+)/g
// let regex2 = /(^[^aeiou])+/

// console.log(str.replace(regex,'>'))
// console.log(str.match(regex))
//   if(str.match(regex)){
//      str= str.replace(regex,'')+str.match(regex).join('')+'ay'
//     console.log(str)
//   }else{
//     str = str+'way'
//   }
//  console.log(str)
//   // console.log(str.replace(regex2,'>'))

//   return str;
// }
// translatePigLatin("california")
// translatePigLatin("consonant");
// translatePigLatin("glove")
// translatePigLatin("algorithm")
// translatePigLatin("eight")
// function myReplace(str, before, after) {
//   // console.log(before.match(/^[A-Z]/));
//   let be = before.match(/^[A-Z]/);
//   if (be) {
//     after= after.replace(/(^[a-z])/,function($1){return $1.toLocaleUpperCase()})
//     str = str.replace(before, after);
//   } else {
//     str = str.replace(before, after.toLowerCase());
//   }
//   str = str.replace(before, after);
//   console.log(str)
//   return str;
// }

// myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
// myReplace('Let us go to the store', 'store', 'mall');
// myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting');

// function pairElement(str) {
//   str = str.split('')
//   let newArr= [],b=[]
//   str.forEach(val=>{
//     if(val == 'G'){
//       newArr.push([val,'C'])
//     }else if(val == 'C'){
//       newArr.push([val,'G'])
//     }else if(val == 'A'){
//       newArr.push([val,'T'])
//     }else if(val == 'T'){
//       newArr.push([val,'A'])
//     }
//   })
//   console.log(str)
//   return str;
// }

// pairElement("GCG");
// function fearNotLetter(str) {
// for (let i = 0; i < str.length; i++) {
//   const charCode = str.charCodeAt(i);
//   if (charCode !== str.charCodeAt(0)+i) {
//     console.log(charCode)
//     return String.fromCharCode(charCode - 1);
//   }
// }
// return undefined;

// let currentCode = str.charCodeAt(0);
// let missing = undefined;
// str.split('').forEach((val) => {
//   if (val.charCodeAt(0) === currentCode) {
//     currentCode++;
//   } else {
//     missing = String.fromCharCode(currentCode);
//   }
// });
// return missing;

//   for (let i = 1; i < str.length; ++i) {
//     // console.log(i);
//     console.log(str.charCodeAt(i), str.charCodeAt(i)-1);
//     if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
//       console.log(String.fromCharCode(str.charCodeAt(i-1)+1))
//       return String.fromCharCode(str.charCodeAt(i-1)+1)
//     }
//   }
// }
// fearNotLetter('abce');

// function uniteUnique(...arr) {
//   let newArr = [].concat(...arr);
//   console.log(newArr);
// let b = Array.from(new Set(newArr));
// console.log(b);
// return b;
// let res = [];
// for (var i = 0; i < newArr.length; i++) {
//   for (var j = 0; j < res.length; j++) {
//     if (newArr[i] === res[j]) {
//       break;
//     }
//   }
//   console.log(j ,res.length,newArr[i])
//     if (j === res.length) {
//       console.log('dssds===', j);
//       res.push(newArr[i])
//     }
// }

// for (var i = 0; i < newArr.length; i++) {
//   for (var j = i+1; j < newArr.length; j++) {
//     if (newArr[i] === newArr[j]) {
//       newArr.splice(j,1)
//       j--
//     }
//   }
// }

//   let newArray =[]
//   for (var i = 0; i < newArr.length; i++) {
//     if(newArray.indexOf(newArr[i]) === -1){
//       newArray.push(newArr[i])
//     }
//   }
//   console.log(newArray)
// }
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// function fearNotLetter(str) {
//   let currentCode = str.charCodeAt(0);
//   let missing = undefined;
//   str.split('').forEach((val, index) => {
//     console.log(val.charCodeAt(0), currentCode);
//     if (val.charCodeAt(0) === currentCode) {
//       currentCode++;
//     }else{
//       missing = String.fromCharCode(currentCode);
//     }
//   });
//   console.log(missing);
//   return str;
// }

// fearNotLetter('abce');

function uniteUnique(...arr) {
  let newArr = [].concat(...arr);
  // return [...new Set(newArr)];
  console.log('323');
  for (let i = 0; i < newArr.length; i++) {
    for (let j = i + 1; i < newArr.length; j++) {
      console.log(newArr[i], newArr[j]);
      if (newArr[i] === newArr[j]) {
        newArr.splice(j, 1);
        j--;
      }
    }
  }
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
