// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */module.exports = function (command) {
 var functionArr = command.split(' ');

    if (command.split(' ')[0] ==='ADD' ) {
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


    if (command.split(' ')[0] === 'REMOVE_PHONE') {
        var removingPhone = functionArr[1];
        var second = {};

        for (var key in phoneBook){
            second[key] = phoneBook[key];
        }

        for (var name in phoneBook){
            if (phoneBook[name] === removingPhone) {
                delete phoneBook[name];
            }
            else if (phoneBook[name].split(', ').indexOf(removingPhone) !== -1) {
                var originalPhoneArr = phoneBook[name].split(', ');
                for (var i = 0; i < originalPhoneArr.length; i++){
                    if (originalPhoneArr[i] === removingPhone){
                        originalPhoneArr.splice(i, 1);
                    }
                }

                phoneBook[name] = originalPhoneArr.join(', ');
            }

        }
        
        return second !== phoneBook ;

    }


    if (command.split(' ')[0] === 'SHOW') {
        var arr = [];
        var i = 0;
        for (var key in phoneBook) {
            arr[i] = key + ': ' + phoneBook[key];
            i++;
        }

        return arr.sort();
    }
};
