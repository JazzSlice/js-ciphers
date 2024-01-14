// Имплементация шифра Вижинера на javascript
// Готово:
// - Переопределение длинны ключа
// TODO:
// - реализация сдвига на основании индексов ключа
// - создание структуры зашифрованного сообщения

var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var key = "оладушек";

var vijinerEncryption = function (message, keyPhrase) {
    // Если сообщение меньше ключа - срезаем ключ
    if (message.length < keyPhrase.length) {
        var newKey = keyPhrase.slice(0, message.length);
    // Если сообщение длиннее ключа, приращаем ключь
    } else if (message.length > keyPhrase.length) {
        var newKey = [];
        newKey.push(keyPhrase);

        while (message.length > newKey.length) {
            var i = (newKey.length % keyPhrase.length) - 1;
            newKey.push(keyPhrase[i]);
        }
        newKey = newKey.join("");
    // Иначе оставляем ключ как есть
    } else {
        newKey = keyPhrase;

    }

    console.log(newKey);
}
vijinerEncryption(alphabet, key)
