// Имплементация шифра Вижинера на javascript
// TODO:
// - реализовать функцию разсшифрования с известным ключем
// - дополнить словарь символьными значениями

var key = "оладушек";
var msg = "ПростотЕкст";

var vigenereEncryption = function (message, keyPhrase) {
    var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

    // Определяем структуру алфавита {character: index} на основе массива с алфавитом
    var alphabetMap = {};
    for (var j = 0; j < (alphabet.length - 1); j++) {
        alphabetMap[alphabet[j]] = j;
    }

    // заполняем зашифрованное сообщением на основе структуры
    var encodedMsg = "";
    for (var k = 0; k < message.length; k++) {
        /*
        индекс символа после смещения = индекс символа исходного
        сообщения + индекс сивола ключа
        */
        var charIndex = (alphabetMap[message[k]] + alphabetMap[keyPhrase[k % (keyPhrase.length)]]);
        encodedMsg += alphabet[charIndex];
    }
    return encodedMsg;
}

console.log(vigenereEncryption(msg, key));