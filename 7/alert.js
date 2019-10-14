// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
// команда add
    if (command.split(' ')[0] =='ADD' ){
        var name = command.split(' ')[1];
        var numb = (command.split(' ')[2]).split(',');
        if(!phoneBook.hasOwnProperty(name)) {
            phoneBook[name] = numb;
            return phoneBook[name];
        }
        else {
            phoneBook[name] = phoneBook[name].concat(numb);
            return Object.keys(phoneBook) + ': ' + phoneBook[name];
        }
    }

// команда  remove
    else if (command.split(' ')[0] =='REMOVE_PHONE' ){
        var numb = (command.split(' ')[1]);
        for (i=0; i<Object.keys(phoneBook).length; i++){
            var key = Object.keys(phoneBook)[i];
            for (j=0;j<phoneBook[key].length; j++){
                if(phoneBook[key][j] == numb) {
                    phoneBook[key].splice(j, 1);
                    return true;
                }
            }
            return false;
        }
    }

// команда show

    if (command.split(' ')[0] =='SHOW'){
        var book = [];
        for (i=0; i<(Object.keys(phoneBook)).length; i++){
            var key = Object.keys(phoneBook)[i];
            book[i] =  [key + ': ' + phoneBook[key] + '\n'];
        }
        return book;
    }
}

