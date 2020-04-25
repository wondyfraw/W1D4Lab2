/** WAP Lab5 JS assignment */

function max(a,b){
    return a > b ? a: b;
}

function maxOfThree(a,b,c) {
   if(a > b && a > c){
       return a;
   }
   else{
       return b > c? b:c;
   }
}

function isVowel(c){
    switch (c) {
        case 'a' || 'A':
                return true;
            break;
        case 'e' || 'E':
            return  true;
            break;
        case 'i' || 'I':
            return  true;
            break;
        case 'o' || 'O':
            return true;
            break;
        case 'u' || 'U':
            return true;
            break;
        default:
            return false;
            break;
    }
}

function  sum(arr) {
    let sumVal =0;
    for (let i=0; i< arr.length; i++){
        sumVal = sumVal + arr[i];
    }
    return sumVal;
}

function multiply(arr) {
   let multipleVal = 1;
   for (let i=0 ; i<arr.length ; i++){
       multipleVal *= arr[i];
   }
   return multipleVal;
}

function reverse(str){

    return  (str == '') ?'' : reverse(str.substr(1)) + str.charAt(0);
    //let tempArr = [];
    //for(let i=1; i<=str.length; i++){
       // tempArr.push(str.charAt(str.length-i));
    //}
   // return tempArr.join("");
    //let splitString = str.split("");
    //let revereSlr = splitString.reverse();
    //return revereSlr.join("");
}

function findLongestWord(strArr){
  return strArr.reduce(function (preVal, elem,i,array) {
      return preVal.length > elem.length ? preVal : elem;
  });
}

function filterLongWords(strArray, i){
   return strArray.filter(function (elem, j,array) {
             return elem.length >i;
   });
}

function computeSumOfSquares(arrayNum){
    const numArray = arrayNum.map(function (elem) {
        return Number(elem);
    });

    return numArray.reduce(function (prevVal,elem,i,array) {
          return prevVal == array[0] ? Math.pow(prevVal,2) + Math.pow(elem,2) : prevVal + Math.pow(elem,2);
    });
}

function printOddNumbersOnly(arrayInt){
    const arrayIntParse = arrayInt.map(function (value) {
        return Number(value);
    });

    return arrayIntParse.filter(function (elem,i,array) {
          return elem % 2 !==0;
    });
}

function computeSumOfSquaresOfEvensOnly(arrayInt){
   const arrayIntParsed = arrayInt.map(function (value) {
       return Number(value);
   });

   let prevValue = 0;
   return arrayIntParsed.reduce(function (prevValue,elem ,i,array) {
       if(prevValue == array[0])
           prevValue = prevValue %2 ==0 ?Math.pow(prevValue,2) : 0;
       return prevValue  + (elem %2 == 0 ? Math.pow(elem,2) : 0);
   });
}

function sumWithReduce(arr){
    const arrayVal = arr.map(function (value) {
        return Number(value);
    })
    return arrayVal.reduce(function (preValue,elem,i,array) {
        return preValue+elem;
    });
}

function multiplyWithReduce(arr){
    const arryVal = arr.map(function (value) {
        return Number(value);
    });

    return arryVal.reduce(function (prevVal,elem,i,array) {
         return prevVal * elem;
    });
}

function findSecondBiggest(arr){
    let secondLarge =0;
    let larg =0;
    for (let i=0 ; i< arr.length ; i++){
        if(larg < arr[i]){
            secondLarge = larg;
            larg = arr[i];
        }
        else secondLarge = secondLarge < arr[i] ? arr[i] : secondLarge;
    }
    return secondLarge;
}

function printFibo(n,a,b){
    const fibo = [];
    if(n <= 1)
        fibo[0] =0;
    else{
        let j=0;
        let temp;
        for(let i=1 ; i <= n ; i++){
            fibo[j++] = a;
            temp = a;
            a = b;
            b = temp + b;
        }
    }
    return fibo;
}

function onClickSubmit(){
let productNum = document.getElementById("productNumInput").value;
let stockQnt = document.getElementById("stockQntInput").value;
let name = document.getElementById("nameInput").value;
let supplier = document.getElementById("supplierInput").value;
let unitPrice = document.getElementById("unitPriceInput").value;
let dateSupplied = document.getElementById("dateInput").value;

alert("Product Number =" + productNum + "\n" +
      "Product Name ="+ name + "\n" +
      "Supplier =" + supplier + "\n" +
      "Unit Price =" + unitPrice +"\n" +
      "Supplied Date =" + dateSupplied);
}
