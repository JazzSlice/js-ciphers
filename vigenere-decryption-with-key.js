var encMessage = "ЯЯяяааААЮЮююяяЯЯ";
var key = "яЯяЯаАаА";

var vigenereDecryption = function (message, keyPhrase) {
    var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

    // Определяем структуру алфавита {index: character} на основе массива с алфавитом
    var alphabetMap = {};
    for (var j = 0; j < (alphabet.length); j++) {
        alphabetMap[alphabet[j]] = j;
    }

    // заполняем зашифрованное сообщением на основе структуры
    var decodedMsg = "";
    for (var k = 0; k < message.length; k++) {
        /*
        индекс символа после смещения = индекс символа исходного
        сообщения + индекс сивола ключа
        */
        var charIndex = (alphabetMap[message[k]] - alphabetMap[keyPhrase[k % (keyPhrase.length)]]);
        // приводим индекс к диапазону длинны алфавита
        while (charIndex < 0) {
            charIndex = alphabet.length - Math.abs(charIndex);
        }
        decodedMsg += alphabet[charIndex];
    }
    return decodedMsg;
}

console.log(vigenereDecryption(encMessage, key));