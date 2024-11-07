// Задача 1
<!DOCTYPE html>
<html>
<head>
    <title>JavaScript</title>
</head>
<body>
    <h1> Я JavaScript! </h1>
</body>
</html>


// Задача 2
let admin;
let name = "Иван";
admin = name;
alert(admin); //Выведет Иван

// Задача 3
let name = "Ilya";
alert( `hello ${1}` ); //Выведет hello 1
alert( `hello ${"name"}` ); //Выведет hello name
alert( `hello ${name}` ); //Выведет hello Ilya


// Задача 4
let userName = prompt("Как вас зовут?");
alert(userName);


// Задача 5
let a = 1, b = 1;
let c = ++a; // c = 2
let d = b++; // d = 1,b = 2


// Задача 6
let a = 2;
let x = 1 + (a *= 2); // a = 4,x = 5


// Задача 7
let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);
alert(a + b);


// Задача 8
7 > 5; // true
"стол" > "стул"; // true
"4" > "52"; // true
undefined == undefined; // true
undefined === "\n0\n"; // false
undefined === +"\n0\n"; // false


// Задача 9
if ("0") {
    alert('Привет'); //выведется
}


// Задача 10
let answer = prompt("Какое официальное название JavaScript?");
if (answer === "ECMAScript") {
    alert("Верно!");
} else {
    alert("Не знаете? ECMAScript!");
}


// Задача 11
let number = prompt("Введите число:");
if (number > 0) {
    alert(1);
} else if (number < 0) {
    alert(-1);
} else {
    alert(0);
}

// Задача 12
let result = (a + b < 4) ? 'Мало' : 'Много';


// Задача 13
let message = (login == 'Сотрудник') ? 'Привет' :
              (login == 'Директор') ? 'Здравствуйте' :
              (login == '') ? 'Нет логина' : '';


// Задача 14
alert( null || 4 || undefined ); // 4


// Задача 15
alert( alert(1) || 2 || alert(3) ); //  1 потом 2

// Задача 16
alert( 1 && null && 2 ); // null

// Задача 17
alert( alert(1) && alert(2) ); //1 потом undefined


// Задача 18
alert( null || 2 && 3 || 4 ); // 3


// Задача 19
let value = NaN;
value &&= 10; // NaN
value ||= 20; // 20
value &&= 30;
value ||= 40; 
alert(value); // 20


// Задача 20
if (age >= 14 && age <= 90) {
    console.log("Возраст находится в диапазоне от 14 до 90 включительно");
} else {
    console.log("Возраст вне диапазона");
}


// Задача 21
//С использованием оператора НЕ !
if (!(age >= 17 && age <= 99)) {
    console.log("Возраст не находится в диапазоне от 17 до 99 включительно");
} else {
    console.log("Возраст находится в диапазоне от 17 до 99 включительно");
}

//Без использования оператора НЕ !
if (age < 17 || age > 99) {
    console.log("Возраст не находится в диапазоне от 17 до 99 включительно");
} else {
    console.log("Возраст находится в диапазоне от 17 до 99 включительно");
}

// Задача 22
if (-1 || 0) alert( 'first' ); // выполнится
if (-1 && 0) alert( 'second' ); // не выполнится
if (null || -1 && 1) alert( 'third' ); // выполнится

// Задача 23
let login = prompt("Введите логин:");

if (login === null) {
    alert("Отменено");
} else if (login === "") {
    alert("Отменено");
} else {
    if (login === "Админ") {
        let password = prompt("Введите пароль:");
        if (password === null) {
            alert("Отменено");
        } else if (password === "") {
            alert("Отменено");
        } else {
            if (password === "Я главный") {
                alert("Здравствуйте!");
            } else {
                alert("Неверный пароль");
            }
        }
    } else {
        alert("Я вас не знаю");
    }
}