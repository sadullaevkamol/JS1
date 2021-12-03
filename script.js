function problem(min, max) {
    var num = Math.floor(Math.random() * (max + 1 - min) + min)
    return num;
}


let minNum = +prompt('Введите миниальное число');
let maxNum = +prompt('Введите максимальное число');

var quantity = +prompt('Введите количество примеров для решения')




function makeid() {
    var text = '';
    var possible = "*/+-";

    for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

for (i = 1; i <= quantity; i++) {
    let num = problem(minNum, maxNum)
    let num2 = problem(minNum, maxNum)
    var task = +prompt(num + makeid() + num2)

    if ((num + makeid() + num2) == task) {
        alert('Правильно')
    } else {
        alert('Не правильно')
    }
}
