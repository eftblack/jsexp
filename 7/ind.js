// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var phoneBook = require('./index.js');


phoneBook('ADD Alex 555,666');
assert.equal(
    // Удаляем телефон 555-10-03
    phoneBook('REMOVE_PHONE 66'),
    false,
    'Телефон 555-10-03 успешно удален'
);
console.info('OK!');
