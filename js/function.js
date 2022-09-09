//1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
function sayHello(name) {
    return `Привет, ${name}!`;
}
sayHello('Антон');

//Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.
function NeighboringNumbers(arr) {
    return [arr - 1, arr, arr + 1];
}
NeighboringNumbers(5);

//Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.
//Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)
function getMathResult(num1, num2) {
    if (typeof(num2) !== Number || num2 <= 0) {
        return num1;
    } 
    let str = '';
    for (let i = 1; i <= num2; i++) {
        if (i === num2) {
            str += `${num1 * i}`;
        } else {
            str += `${num1 * i}---`;
        }
    }
    return str;
}
getMathResult(10, 3);

//Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в примерах.
//Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"
function calculateVolumeAndArea(num) {
    if (typeof(num) !== 'number' || num < 0 || !Number.isInteger(num)) {
        return 'При вычислении произошла ошибка';
    }
    let v = 0;
    let s = 0;
        v = num * num * num;
        s = (num * num) * 6;
    return 'Объем куба: ${v}, площадь всей поверхности: ${s}';
}
calculateVolumeAndArea(5);

//Напишите функцию, которая будет определять номер купе по переданному ей номеру места.
function getCoupeNumber(seat) {
    if (typeof(seat) !== 'number' || seat < 0 || !Number.isInteger(seat)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    } else if (seat === 0 || seat > 36) {
        return 'Таких мест в вагоне не существует';
    }
    return Math.ceil(seat / 4);
}
getCoupeNumber();