// варіанти створення функції
function showMessage() {
    alert( 'Всем привет!' );
}
let showHi = function(){
    alert( 'HI!' );
}

showMessage()
showHi()

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function func1(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
func1(2, 3, 5);

// Напиши функцію, яка приймає 2 числа і повертає :
//     -1, якщо перше число менше, ніж друге;1 - якщо перше число більше, ніж друге;0 - якщо числа рівні.
let a = prompt('Введите число a');
let b = prompt('Введите число b');
function func2(a, b) {
    if (a < b) {
        console.log(-1)
    } else if (a > b) {
        console.log(1)
    } else if (a == b) {
        console.log(0)
    }
}
func2(a, b);

// Напиши функцію, яка обчислює факторіал переданого їй числа.
let n = prompt('Введите факториал')
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( "число факториала " + factorial(n) );

// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
let q = prompt('Введите число #1');
let w = prompt('Введите число #2');
let e = prompt('Введите число #3');
function peretvorenya (q, w, e) {
   return (q + w + e)
}
alert("Будет число " + peretvorenya (q, w, e));

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
let r = prompt('Введите сторону #1');
let t = prompt('Введите сторону #2');
function plosha(r, t) {
    if (r*t){
        return(r*t);
    }else {
        return (r*r||t*t)
    }
}
alert("Будет площадь " + plosha(r, t));
