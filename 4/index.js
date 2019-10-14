/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
 var arr = tweet.split(' ');

  var resultArray = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i][0] == '#') {
      resultArray.push(arr[i].slice(1));
    }
  }
  return resultArray;
};
