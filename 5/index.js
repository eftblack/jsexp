/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
var lowerCaseArr = [];
  for (var i = 0; i < hashtags.length; i++){
  	lowerCaseArr[i] = hashtags[i].toLowerCase();
  }
  for (var j = 0; j < lowerCaseArr.length - 1; j++){
  	for (var i = j + 1; i < lowerCaseArr.length; i++){
  		if (lowerCaseArr[i] === lowerCaseArr[j]) {
	lowerCaseArr.splice(i,1);
	i--;
}
  	}
  }
  var string = lowerCaseArr.join(", ");
  return string;
};
