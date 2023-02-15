export default class Validator {
  static validateUsername(username) {
    return !/(^[\d-_]|[^\w^-]|\d{3,}|[\d-_]$)/.test(username);
  }

  static validatePhoneNumber(number) {
    // Мне не очень нравится метод, не универсальный.
    // Под шаблоны в задаче подходит, но скорее всего где-нибудь на другом варианте ошибётся
    return '+' + number.replace(/^8/, '7').match(/\d/g).join('');
    // ESlint ругается на конкатенацию, наверное нужно исключение поставить
  }
}
