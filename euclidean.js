/*
Euclidean Algorithm
Divide numbers by each other ie a/b 
repeat using whole divisor(b) as a and remainder of a/b as b
when a or b is zero return positive integer remaining.

pseudo code
 divide a/b
 check if a or b is 0 if true => return
 repeat with a as b and b as a%b
*/

function recusiveEuclidAlgo(a,b){
      if(!a)return b //if a is zero return b
      if(!b) return a //if b is zero return a
      return recusiveEuclidAlgo(b, a%b) // otherwise start again and with b as a and the remaider of a&b as b
}

function euclidAlgo(a, b) {
  while (a && b) { // while both a & b dont equal zeio
    [a, b] = [b, a % b]; // this is the same as below except in one line
    // let tempA = a;
    // let tempB = b;
    // a = tempB
    // b= tempA%b
  }
  if (!a) return b;//if a is zero return b
  if (!b) return a;//if b is zero return a
}

console.log(euclidAlgo(192, 270));
console.log(recusiveEuclidAlgo(270, 192));