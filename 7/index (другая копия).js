// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
var functionArr = command.split(' ');
var functionName = functionArr[0];


if (functionName === 'ADD') {
	return addContact(command);
}

if (functionName === 'SHOW') {
	return show();
}

if (functionName === 'REMOVE_PHONE') {
	return removePhone(command);
}

function addContact() {
	var newName = functionArr[1];
	var addedArr = functionArr[2].split(',');

	if (phoneBook.hasOwnProperty(newName)) {
	var originalPhoneArr = phoneBook[newName].split(', ');
	var newPhoneList = originalPhoneArr.concat(addedArr);
	phoneBook[newName] = newPhoneList.join(', ');
	return;
}

phoneBook[newName] = addedArr.join(', ')

}


function removePhone() {
	var removingPhone = functionArr[1];
	var second = {};

	for (var key in phoneBook){
		second[key] = phoneBook[key];
	}

	for (var name in phoneBook){
		if (phoneBook[name] == removingPhone) {
			delete phoneBook[name];
	} else if (phoneBook[name].split(', ').indexOf(removingPhone) != -1) {
		var originalPhoneArr = phoneBook[name].split(', ');
		for (var i = 0; i < originalPhoneArr.length; i++){
			if (originalPhoneArr[i] == removingPhone){
				originalPhoneArr.splice(i, 1);
			}
		}

		phoneBook[name] = originalPhoneArr.join(', ');
	}

	return JSON.stringify(second) === JSON.stringify(phoneBook) ? false : true;
}
}

function show() {
	var arr = [];
	var i = 0;
	for (var key in phoneBook) {
		arr[i] = key + ': ' + phoneBook[key];
		i++;
	}

return arr.sort();

}

};
