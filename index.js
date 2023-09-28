const candles =[3,2,1,3,3,4];
function birthdayCakeCandles(candles) {
    // Write your code here
    var height = Math.max(...candles);
    var frequency = 0;
    for(var i =0; i<candles.length; i++){
        if (candles[i]== height){
            frequency +=1;
        }
    }
    return frequency;
}
console.log(birthdayCakeCandles(candles));
console.log("Hello world !")
let username = "eddy"
username += " gikera"
console.log("Hello", username, "how are you")

let totalapples = 20
totalapples *= 5
console.log(totalapples)
let totalusers = 5

let appelsperuser = totalapples / totalusers

console.log("you have", appelsperuser, "apples")
let country = "Kenya"
let year = 2023
let nighttime = false
console.log(country, year, false)
console.log("country")
let greatings = "Hello my name is"
let str = "and I have"
let numberofapples = 50
let apples = ("apples")
console.log(greatings, username, str, numberofapples, apples)
let num = 10;
if (num >= 7) {
  console.log("greater than or equl to seven")
} else {
  console.log("smaller")
}
let n = 30
if (n > 45) {
  console.log(n, "is greater than 45")
} else if (n < 65) {
  console.log(n, "is less than 65")
} else {
  console.log(n)
}
let i = 0

let y = 2, x = 9;
while (y <= x) {
  console.log(y);
  y++;
}
console.log("end")
while (i < 10) {
  console.log(i);
  i++;
}
console.log("end")
for (let i = 0; i < 10; i++)
  console.log(i)
console.log("end")
for (let q = 7; q <= 12; q++)
  console.log(q)
console.log("_________")
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let len = arr.length;
console.log("_________")
console.log(arr)
for (let p = 0; p < len; p++) {
  (arr[p] > 4)
  console.log(arr[p]);
}
console.log("_________")
for (let p = 102; p >= 27; p -= 3) {
  console.log(p)
}
let Arr = ["apple", "orange", "banana", 77, 95, 101];
console.log(Arr)
Arr.push("grape");
console.log(Arr);

Arr.shift();
console.log(Arr)
let shifted = Arr.shift()
console.log(shifted)
Arr.unshift(25)
console.log(Arr)
Arr.splice(1, 2)
console.log(Arr)
let spliced = arr.splice(1, 2)
console.log(spliced)
let Num = 10;
if (Num > 5) {
  console.log("Greater than 5");
}
if (Num < 12) {
  console.log("Smaller than 12")
}
let NUM = 10;
if (NUM > 5 && NUM < 12) {
  console.log("its greater than 5 and also smaller than 12")
}
let No = 16;
if (No === 6 || No === 9 || No === 12) {
  console.log("its either 6,9 or 12")
} else if ((No > 5 && No < 12) || (No > 15 && No < 17)) {
  console.log("in range")
}

let ARR = [3, 10, 9, 5, 2, 11, 7, 15, 12, 4, 1, 13, 6, 14, 8]

for (let u = 0; u < ARR.length; u++) {
  if (ARR[u] >= 3 && ARR[u] <= 7) {
    console.log(ARR[u])
  }
}
console.log("_________")
for (let u = 0; u < ARR.length; u++) {
  if (ARR[u] <= 3 && ARR[u] >= 7) {
    console.log(ARR[u])
  }
}
let word = "Nationality";
console.log(word.substring(3, 6))
let name = "Microverse"
console.log(name.substring(5))
console.log(name.substring(4, 9))
let user = ["hackerman", "zerocool", "mitnick", "edd"];
let login = "eddy"
console.log(user.includes(login));
if (user.includes(login) === true) { console.log("welcome") } else { console.log("begone Hacker!") }
console.log("_________")
let array = [0, 9, 6, 3, 2]
let find = 7;
if (array.includes(find) === true) {
  console.log("it is included");
} else {
  console.log("it is just not there")
}
console.log("_________")
let ARRAY = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13]
let numb = 13;
if (ARRAY.includes(numb) === true) {
  console.log("Found it")
}
console.log("_________")
let nor = [1, 2, 3, 43, 67, 35, 9, 0, 32];
let orr = [];
for (let i = 0; i < nor.length; i++) {
  if (nor[i] > 5)
    orr.push(nor[i]);
}
console.log(orr)
console.log("_________")
let yolo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let yoro = [];
for (let i = 0; i < yolo.length; i++) {
  if (yolo[i] >= 4 && yolo[i] <= 10)
    yoro.push(yolo[i])
}
console.log("_________")
console.log(yoro)
let bigarr = [[1, 2, 3], [2, 3, 4], [7, 7, 7]]
console.log(bigarr);
console.log(bigarr[1])
console.log(bigarr[1][2])
for (let i = 0; i < bigarr.length; i++) {
  console.log(bigarr[i]);
  for (let j = 0; j < bigarr[i].length; j++)
    console.log(bigarr[i][j])
}
console.log("_________")
let biggarr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (b = biggarr.length - 1; b >= 0; b--) {
  for (c = biggarr[b].length - 1; c >= 0; c--)
    console.log(biggarr[b][c])

}
console.log("_________")
let bbigarr = [];
let extctr = 1;
for (let e = 0; e < 3; e++) {

  let littlearr = [];
  for (let f = 0; f < 3; f++) {

    littlearr.push(extctr);
    extctr++;
  }
  bbigarr.push(littlearr);
}
console.log(bbigarr)
console.log("_________")
let biggy = [];
let ext = 10000;
for (let k = 0; k < 1000; k++) {
  let small = [];
  for (let l = 0; l < 3; l++) {
    small.push(ext);
    ext--;
  }
  biggy.push(small);
}
console.log(biggy)
function sum(x, lk) {
  console.log(x + lk);
}
sum(22, 47);
sum(100, 1);
function juice(firstingredient, secondingredient) {
  console.log("Here is your", firstingredient, "with", secondingredient, "juice!");
}
juice("apple", "orange")
juice("mango", "pineaple")
function multiply(xo, ox) {
  console.log(xo * ox);
}
multiply(10, 10)
multiply(13, 11)
function names(firstname) {
  console.log("Hello", firstname, "!");
}
names("oscar")
function sum(xo, ox) {
  return xo + ox;
}
let resultt = sum(1, 4) * sum(9, 1)
console.log(resultt);
function sum(aro) {
  let output = [];
  for (let a = 0; a < aro.length; a++) {
    output.push(aro[a] + 1);
  }
  return output
}
let result = sum([1, 2, 3, 4,]);
let result2 = sum([0, 1, 0, 1, 0, 2]);
console.log(result)
console.log(result2)
function multiply(azz) {
  let putout = [];
  for (let qa = 0; qa < azz.length; qa++) {
    putout.push(azz[qa] * 5)
  }
  return putout
}
let rresult = multiply([1, 2, 3, 4]);
let rresult2 = multiply([0, 1, 0, 1, 0, 2]);
console.log(rresult)
console.log(rresult2)
console.log("_________")

function reverse(azs) {
  let outpuut = [];
  for (let qs = azs.length - 1;
    qs >= 0; qs--) {
    outpuut.push(azs[qs])
  }
  return outpuut;
}
let eesult = reverse([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(eesult)

function binary(aze) {
  let ooutput = []
  for (let zq = 0; zq < aze.length; zq++) {
    if (aze[zq] === 1) {
      ooutput.push("one")
    }
    if (aze[zq] === 0) {
      ooutput.push("zero")
    }
  }
  return ooutput;
}
let ressult = binary([0, 1, 1, 0, 1, 0]);
console.log(ressult);
console.log("_________")
function reverse(tyo) {
  let outtput = [];
  for (let yt = 0; yt < tyo.length; yt++) {
    if (tyo[yt] === 0) {
      outtput.push("zero")
    }
    if (tyo[yt] === 1) {
      outtput.push("one")
    }
    if (tyo[yt] === 2) {
      outtput.push("two")
    }
    if (tyo[yt] === 3) {
      outtput.push("three")
    }
    if (tyo[yt] === 4) {
      outtput.push("four")
    }
  }
  return outtput;
}
let resullt = reverse([1, 2, 3, 4]);

let resullt2 = reverse([4, 1, 1, 2])
let resullt3 = reverse([1, 2, 1, 2])
console.log(resullt)
console.log(resullt2)
console.log(resullt3)
console.log("_________")
function sumALL(arr) {
  let first = arr[0]
  let last = arr[1]
  if (first > last) {
    first = arr[1];
    last = arr[0];
  }
  let output = 0
  for (let i = first; i <= last; i++) {
    console.log(i);
    output += i;
  }
  return output;
}
let resultr = sumALL([4, 1]);
console.log("_________")
console.log("_________")
console.log(resultr)
function convertCTOF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit
}
let result1 = convertCTOF(30);
console.log(result1)
console.log("_________")
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
let result110 = reverseString("hello");
console.log(result110)
console.log("_________")
function reverseString(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}

let result111 = reverseString("greatings from earth");
console.log(result111)
function factorialize(num) {
  let product = 1
  for (i = 1; i <= num; i++) {
    product *= i
  }
  return product
}
let result122 = factorialize(10);
console.log(result122)
console.log("_________")
function truncatestring(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "---";
  } else {
    return str;
  }
}
let result113 = truncatestring("A-tisket a-tasket A green and yellow basket", 8);
console.log(result113)
console.log("_________")
function wheredoibelong(arr, num) {
  return arr.filter(val => num > val).length;
}
let result114 = wheredoibelong([40, 60, 70, 30], 50)
console.log(result114)
console.log("_________")
function chunkarrayingroup(arr, size) {
  const newarr = []
  while (arr.length > 0) {
    newarr.push(arr.splice(0, size))
  }
  return newarr;
}
let result101 = chunkarrayingroup(["a", "b", "c", "d"], 2);
console.log(result101)
function sumall(arr) {
  let max = Math.max(arr[0], arr[1]);
  let min = Math.min(arr[0], arr[1]);
  let sumbetween = 0;
  for (let i = min; i <= max; i++) {
    sumbetween += i;
  }
  return sumbetween
}
let result99 = sumall([1, 4]);
console.log(result99)
// nipo 
function destroyer(arr) {
  const valuetoremove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valuetoremove.includes(val)
  })
}
let result22 = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
console.log(result22)
console.log("_________")
function destroy(arrol) {
  let input = arguments[0];
  let output = [];
  let destroy = [];
  for (let i = 1; i < arguments.length; i++) {
    destroy.push(arguments[i]);
  }
  for (let i = 0; i < input.length; i++) {
    if (destroy.includes(input[i]) === false) {
      output.push(input[i]);
    }
  }
  console.log(destroy);
  return arrol;
}
let result107 = destroyer([1, 7, 2, 3, 1, 2, 3], 2, 3);
console.log(result107)
function translatePigLatin(str) {
  let firstletter = str[0];
  let vowels = "aeiou";
  if (vowels.includes(firstletter) === true) {
    return str + "way";
  }
  let k = 0
  let cluster = "";
  while (vowels.includes(str[k]) === false && k < str.length) {
    cluster += str[k];
    k++;
  }
  console.log(k)
  return str.substring(k) + cluster + "ay";
}
let result31 = translatePigLatin("schwartz");
console.log(result31);
let result32 = translatePigLatin("rythm");
console.log(result32);
function pairElement(str) {
  let output = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "A") {
      output.push(["A", "T"]);
    }
    if (str[i] === "T") {
      output.push(["T", "A"]);
    }
    if (str[i] === "G") {
      output.push(["G", "C"]);
    }
    if (str[i] === "C") {
      output.push(["C", "G"]);
    }
  }
  return output;
}

let result34 = pairElement("ATCGA");
console.log(result34)


var arrr = [-4, 3, -9, 0, 4, 1]
function plusMinus(arrr) {
  // Write your code here
  var n = arrr.length;
  var positive = 0;
  var negative = 0;
  var zero = 0;
  for (var i = 0; i < n; i++) {
    if (arrr[i] > 0) {
      positive += 1;
    } else if (arrr[i] < 0) {
      negative += 1;
    } else {
      zero += 1;
    }
  }
  var pos = positive / n;
  var neg = negative / n;
  var zer = zero / n;
  console.log(pos.toFixed(6) + "\n" + neg.toFixed(6), "\n" + zer.toFixed(6));
}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]))
function convertHTML(str) {
  const entities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;",
  }
  let arr = str.split("").map(function(element) {
    if (entities.hasOwnProperty(element)) {
      return entities[element];
    } else {
      return element;
    }
  });
  return arr.join("");
}
console.log(convertHTML("Dolce & Gabbana"));
function sumPrimes(num) {
  let primes = [];
  for (let i = 2; i <= num; i++) {
    if (primes.every((prime) => i % prime !== 0))
      primes.push(i)
  }
  return primes.reduce((sum, prime) => sum + prime, 0);
}

console.log(sumPrimes(10));
function isPrime(x) {
  if (x == 2) {
    return true;
  }
  for (let i = 2; i < x; i++) {
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}
function sumPrimes(num) {
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum
}
console.log(sumPrimes(11));
const bigARrr = [65, 10];
let summmm = 0;
for (let i = 0; i <= bigARrr.length; i++) {
  summmm += i;
}
return summmm
console.log(bigARrr)
function aVeryBigSum(arr) {
  let sum = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    sum = sum + arr[i];
  }
  return sum;


}
console.log(aVeryBigSum([65, 10]))

console.log("_________")
function staircase(n) {
    // Write your code here
    for(let i = 0; i < n; i++){
        let string = "";
        for(let j = 0; j < n - i - 1; j++){
            string += " ";
        }
        for(let k = 0; k< i+1; k++){
            string += "#";
        }
        console.log(string)
    }
}
function birthdayCakeCandle(candles){
  let max = 0;
  let candlescount=0;
  for (ii = 0; ii<candles.length; ii++){
    if(max < candles[ii]){
      max = candles[ii];
    }
  }
  for (ii = 0; i<candles.length; ii++){
    if(max == candles[ii]){
      candlescount++
    }
  }
  return candlescount;
}
console.log(birthdayCakeCandle([3, 2 ,1, 3]));