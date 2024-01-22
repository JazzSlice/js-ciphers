var encMessage = "WriUtрM'%=3OS;(3!al~e4Ps3А$G 2ТXLs[т1дзyхБшOTшАKWs}4rHUgKЖш^K-;R y Pn4KoZшУ3а1_ Ud(Jo~Ut^@-GRП$G~s_YeZг-хГЖ\"хРшо4muж YVuTРБж302YPstHn 4f -.ZO_-3Pn Ko 4=3А1U -?пNauZ_YLsвСХгж#8хж rVuUс}6Р";
var key = "АааАаААаяЯЯяяЯЯя";

var vigenereDecryption = function (message, keyPhrase) {
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