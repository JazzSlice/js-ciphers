var msg = "print(f'Optimal value is {gaus_res[-1].y1} in {eps} range. Penalty in dot = {round(countPenal(gaus_res[-1].y1) * mu, roun)}. Assistant function in dot = {round(gaus_res[-1].fy1, roun)}')";
var key = "АааАаААаяЯЯяяЯЯя";

var vigenereEncryption = function (message, keyPhrase) {
    // Определяем содержимое алфавита
    var ruAlphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
    var enAlphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var symbols = " ~!'\"\\|/{}[]:;,.?@#$%^&*()-_=+";
    var numbers = "1234567890";

    var alphabet = ruAlphabet + enAlphabet + symbols + numbers;

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