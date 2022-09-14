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

//Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

function getTimeFromMinutes(min) {
    if (typeof(min) !== 'number' || min < 0 || !Number.isInteger(min)) {
        return 'Ошибка, проверьте данные';
    }
    
    let h = Math.floor (min / 60);
    let m = min % 60;
//     if (h === 2 || h === 3 || h === 4){
//         return 'Это ${h} часa и ${m} минут';
//     } else if (h === 1) {
//         return 'Это ${h} час и ${m} минут';
//     } else {
//         return 'Это ${h} часов и ${m} минут';
//     }
// }
let hStr = '';

    switch (h) {
        case 0: 
            hStr = 'часов';
            break;
        case 1:
            hStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hStr = 'часа';
            break;
        default:
            hStr = 'часов';
    }

    return `Это ${h} ${hStr} и ${m} минут`;
}
getTimeFromMinutes();

//Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.
function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' || 
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' || 
        typeof(d) !== 'number') {
        return 0;
    } else {
    return Math.max(a, b, c, d);}
}
findMaxNumber();

//на числа Фибоначчи
// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)){
        return '';
    }
        let result = '';
        let first = 0;
        let second = 1;
    
        for (let i = 0; i < num; i++) {
            if (i + 1 === num) {
                result += `${first}`;
            } else {
                result += `${first} `;
            }
            let third = first + second;
            first = second;
            second = third;
        }
        return result;
    }
fib(4);


//Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.
//Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}
showExperience(personalPlanPeter);

// Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }

    return str;
}
showProgrammingLangs(personalPlanPeter);



// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';
    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';
    arr.forEach(member => {
        str += `${member} `
    });
    return str;
}

showFamily(family);
//2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.
showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities);

//Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof (str) !== 'string') {
        return 'Ошибка!';
    }
return str.split('').reverse().join('');
}
console.log(reverse(someString));

// Вам нужно создать главную функцию банкомата availableCurr, 
// которая принимает два аргумента: первый - это массив со всеми доступными 
// валютами из двух банков сразу (сейчас представим, что они не могут 
//     повторяться), второй - необязательный аргумент, который указывает 
//     ту валюту, которая сейчас закончилась в банкомате. Если массив в 
//     первом аргументе пустой - то функция возвращает строку 'Нет доступных 
//     валют'. Функция возвращает строку в нужном виде.

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    if (arr.length === 0) {
        return str += 'Нет доступных валют';
    } else {
        str = 'Доступные валюты:\n';
    }
    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });
    return str;
}
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')