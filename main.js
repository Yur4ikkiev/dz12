let country = prompt('What is your name?');
let city = prompt('Where do you live?');
let mobile = prompt('Send your mobile number');

let info = ("Пользователя зовут, " + country + ", город проживания ," + city + " , его мобильный телефон " + mobile + ".");
console.log(info);

let number = +prompt('введите 5 любых цифер');
while(number <10000 || number>99999) {
    number = +prompt('введите 5 любых цифер');
}
console.log(number);
let result = number.toString().split('');

console.log(result);
console.log(result.join(' '));

