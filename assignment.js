// https://github.com/arafatyamin/Assignment3

// kilometer To Meter count

function kilometerToMeter(km) {
     const meter = km * 1000;
     return meter;
}
var totalmeter = kilometerToMeter(2);
console.log("Total Meter:",totalmeter)

//  budget Calculator count

function budgetCalculator(total) {
     var total = [wach * 50, mobile* 100, laptop * 500]
     var sum = 0;
     for (var i = 0; i < total.length; i++){
          var element = total[i];
          sum = sum + element;
        }
     return sum;
}
var wach = 5;
var mobile = 5;
var laptop = 2;
var total=[wach,mobile,laptop]
var result=budgetCalculator(total)
console.log("Total Budget:",result)

// total hotel Cost 

function hotelCost(day) {
var amount= 0;
if (day <= 10) {
    amount= day * 100;
}
else if (day <= 20) {
    var first10Day = 10 * 100;
    var remaining = day - 10;
    var second10Day = remaining * 80;
    amount= first10Day + second10Day;
}
else {
    var first10Day = 10 * 100;
    var second10Day = 10 * 80;
    var remaining = day - 20;
    var third10Day = remaining * 50;
    amount= first10Day + second10Day + third10Day;
    }
    return amount;
}
var totalamount = hotelCost(27)
console.log("Total Amount:",totalamount)

// mega friend name count

function megaFriend(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord ;
}
var findWord=megaFriend("RASEL RONY HASAN SHAHIDUL TAJNIN JANNAT");
console.log("Mega Name:",findWord)
