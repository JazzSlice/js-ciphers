var encMessage = "ЮьохЁЖчПщэт";
var key = "оладушек";

var vigenereDecryption = function (message, keyPhrase) {
    var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

    // Определяем структуру алфавита {character: index} на основе массива с алфавитом
    var alphabetMap = {};
    for (var j = 0; j < (alphabet.length - 1); j++) {
        alphabetMap[alphabet[j]] = j;
    }

    // заполняем расшифрованное сообщением на основе структуры
    var decodedMsg = "";
    for (var k = 0; k < message.length; k++) {
        /*
        индекс символа после смещения = индекс символа исходного
        сообщения - индекс сивола ключа
        */
        var charIndex = (alphabetMap[message[k]] - alphabetMap[keyPhrase[k % (keyPhrase.length)]]);
        decodedMsg += alphabet[Math.abs(charIndex)];
    }
    return decodedMsg;

}

vigenereDecryption(encMessage, key)