module.exports = function getZerosCount(number, base) {
  // your implementation

  var zerosCount = number;
  var result = 0;

  var baseNumber = base;
  var i = 1;

  //-----------------------------//
  // maxEasyDivider -------------//
  //-----------------------------//

  var maxEasyDivider = 2;
  var num = baseNumber;
  var a = new Array();

  do {
      if (num % maxEasyDivider == 0) {
          a[i] = maxEasyDivider;
          i++;
          num = num / maxEasyDivider;
      } else {
          maxEasyDivider++;
      }
  }
  while (maxEasyDivider < num);
  a[i] = maxEasyDivider;

  console.log("maxEasyDivider = " + maxEasyDivider + " of Base = " + baseNumber);

  //-----------------------------//
  // minEasyDivider -------------//
  //-----------------------------//

  var minEasyDivider = 2;
  do {
      if (baseNumber % minEasyDivider == 0) {
          break;

      } else {
          minEasyDivider++;
      }
  }
  while (maxEasyDivider < num);

  console.log("minEasyDivider = " + minEasyDivider + " of Base = " + baseNumber);

  //-----------------------------//
  // maxDivider -----------------//
  //-----------------------------//

  var maxDivider = 0;

  for (i = baseNumber; i > 0; i--) {
      if (baseNumber % i == 0) {
          if (i == baseNumber) {
              continue;
          } else {
              maxDivider = i;
              console.log("maxDivider = " + maxDivider + " of Base = " + baseNumber);
              break;
          }
      }
  }
  console.log("FINAL: maxDivider = " + maxDivider + " of Base = " + baseNumber);

  //-----------------------------------------------------------//
  // Check if minEasyDivider has a degree of higher divider ---//
  //-----------------------------------------------------------//

  var degreeOfMinDivider = 1;
  var degreeOfMinDividerTemp = 1;

  for (i = 2; i <= 8; i++) {
      degreeOfMinDividerTemp = Math.pow(minEasyDivider, i);

      if (degreeOfMinDividerTemp > baseNumber) {
          break;
      }

      if (baseNumber % degreeOfMinDividerTemp === 0) {
          degreeOfMinDivider = i;
          console.log("degreeOfMinDivider = " + degreeOfMinDivider + " of minEasyDivider = " + minEasyDivider);
      }
  }
  console.log("FINAL: degreeOfMinDivider = " + degreeOfMinDivider + " of minEasyDivider = " + minEasyDivider);

  //-----------------------------------------------------------//
  // Check if maxEasyDivider has a degree of higher divider ---//
  //-----------------------------------------------------------//

  var degreeOfMaxDivider = 1;
  var degreeOfMaxDividerTemp = 1;

  for (i = 2; i <= 8; i++) {
      degreeOfMaxDividerTemp = Math.pow(maxEasyDivider, i);

      if (degreeOfMaxDividerTemp > baseNumber) {
          break;
      }

      if (baseNumber % degreeOfMaxDividerTemp === 0) {
          degreeOfMaxDivider = i;
          console.log("degreeOfMaxDivider = " + degreeOfMaxDivider + " of maxEasyDivider = " + maxEasyDivider);
      }
  }
  console.log("FINAL: degreeOfMaxDivider = " + degreeOfMaxDivider + " of maxEasyDivider = " + maxEasyDivider);

  //-----------------------------//
  // Easy zero counter ----------//
  //-----------------------------//

  var degreeOfDivider = 1;
  var easyDivider = 1;

  if (degreeOfMinDivider > degreeOfMaxDivider &&
      degreeOfMinDivider >= maxEasyDivider &&
      degreeOfMaxDivider == 1) {
      degreeOfDivider = degreeOfMinDivider;
      easyDivider = minEasyDivider;
  } else {
      degreeOfDivider = degreeOfMaxDivider;
      easyDivider = maxEasyDivider;
  }

  do {
      zerosCount = Math.floor(zerosCount / easyDivider);
      result = result + zerosCount;
  } while (zerosCount >= easyDivider);

  result = Math.floor(result / degreeOfDivider);
  console.log("result = " + result);
  return (result);
}