// square

// var main = function (input) {
//   var myOutputValue = "";
//   var rowCounter = 0;
//   while (rowCounter < input) {
//     var columnCounter = 0;
//     while (columnCounter < input) {
//       myOutputValue += "🐱‍🐉";
//       columnCounter += 1;
//     }
//     myOutputValue += `</br>`;
//     rowCounter += 1;
//   }
//   return myOutputValue;
// };

// triangle

// var main = function (input) {
//   var myOutputValue = "";
//   var rowCounter = 0;
//   while (rowCounter < input) {
//     var columnCounter = 0;
//     while (columnCounter <= rowCounter) {
//       myOutputValue += "🐱‍🐉";
//       columnCounter += 1;
//     }
//     myOutputValue += `</br>`;
//     rowCounter += 1;
//   }
//   return myOutputValue;
// };

// outline square

var main = function (input) {
  var myOutputValue = "";
  var rowCounter = 0;
  while (rowCounter < input) {
    var columnCounter = 0;
    while (columnCounter < input) {
      if (columnCounter == 0 || columnCounter == input - 1 || rowCounter == 0 || rowCounter == input - 1) {
        myOutputValue += "🐱‍🐉";
        columnCounter += 1;
      } else {
        myOutputValue += "🚀";
        columnCounter += 1;
      }
    }
    myOutputValue += `</br>`;
    rowCounter += 1;
  }
  return myOutputValue;
};
