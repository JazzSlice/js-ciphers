var msg = "\"(Привет, + {мир} + !).@~\"\;";
var key = "АааАаААаяЯЯяяЯЯя";

var vigenereEncryption = function (message, keyPhrase) {
    var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ ~!\'\"\\\|\/\{\}\[\]\:\;,.?@#$%^&*()-_=+";

    // Определяем структуру алфавита {index: character} на основе массива с алфавитом
    var alphabetMap = {};
    for (var j = 0; j < (alphabet.length); j++) {
        alphabetMap[alphabet[j]] = j;
    }

    // заполняем зашифрованное сообщением на основе структуры
    var encodedMsg = "";
    for (var k = 0; k < message.length; k++) {
        // if (message[k] === " ") {
        //     encodedMsg += message[k];
        //     continue;
        // }
        /*
        индекс символа после смещения = индекс символа исходного
        сообщения + индекс сивола ключа
        */
        var charIndex = (alphabetMap[message[k]] + alphabetMap[keyPhrase[k % (keyPhrase.length)]]);
        encodedMsg += alphabet[charIndex % alphabet.length];
    }
    return encodedMsg;
}

console.log(vigenereEncryption(msg, key));