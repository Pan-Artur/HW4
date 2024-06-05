const firstWarning = prompt("Введіть будь-який текст.");
const secondWarning = prompt("Введіть ще раз будь-який текст.");
const emptyText = "";
const firstChecking = firstWarning === emptyText;
const secondChecking = secondWarning === emptyText;
if (firstChecking, secondChecking) {
    alert("Не всі поля заповнені");
} else {
    alert("Обидва поля заповнені");
}


const sum = 3 + 2;
if (sum > 10) {
    alert("Сума більша за 10")
} else if (sum === 10) {
    alert("Сума дорівнює 10")
} else {
    alert("Сума менша за 10");
}


const checkingMessage = prompt("Надрукуйте будь-який текст, але в ньому має бути слово - Javascript.");
const checkedWord = "JavaScript";
const checkingWord = checkedWord.toLowerCase();
const searchingWord = checkingMessage.includes(checkingWord);
if (searchingWord) {
    alert("Текст містить слово JavaScript");
} else {
    alert("Текст не містить слово JavaScript");
}


const number = 10;
if (10 < number, 20 > number) {
    alert("Число входить в діапазон від 10 та менше за 20");
} else {
    alert("Число не входить в діапазон від 10 до 20");
}


const messageForm = alert("Для того щоб зайти на наш сайт, ви повинні пройти форму.");
const messageName = prompt("Введіть ваше ім'я.");
if (2 >= messageName.length) {
    const repeatMessageName = prompt("Введіть ще раз своє ім'я!");
    if (2 >= repeatMessageName.length) {
        alert("Нажаль, вам не вдалось перейти до сайту.");
    } else {
        alert("Ім'я було введеним правильно!");
    }
} else if (messageName.length >= 3) {
    alert("Ім'я було введеним правильно!");
} else {
    alert("Ім'я яке було введеним двічі, неправильно!");
}

const messagePost = prompt("Введіть вашу електронну пошту.");
if (messagePost.includes("@.")) {
    alert("Електронна пошта була введена правильно!");
} else {
    const repeatMessagePost = prompt("Введіть ще раз вашу електронну пошту!");
    if (repeatMessagePost.includes("@.")) {
        alert("Електронна пошта була введена правильно!");
    } else {
        alert("Нажаль, введена пошта двічі виявилася неправильною.");
    }
}

const messagePassword = prompt("Введіть ваш пароль, для того щоб можна було зайти на сайт.");
if (5 >= messagePassword.length) {
    const repeatMessagePassword = prompt("Неправильно набраний пароль. Введіть ваш пароль знову!");
    if (5 >= repeatMessagePassword) {
        alert("Нажаль, пароль який був введений двічі, неправильний!");
    } else {
        alert("Пароль введений правильно!");
    }
} else {
    alert("Пароль введений правильно!");
}

if (2 >= messageName.length) {
    alert("Ви не змогли зайти на сайт, тому що не змогли пройти форму!");
} else if (messagePost.includes("@.")) {
    alert("Ви не змогли зайти на сайт, тому що не змогли пройти форму!");
} else if (5 >= messagePassword.length) {
    alert("Ви не змогли зайти на сайт, тому що не змогли пройти форму!");
} else if (2 >= messageName.length, messagePost.includes("@.")) {
    alert("Ви не змогли зайти на сайт, тому що не змогли пройти форму!");
} else if (2 >= messageName.length, 5 >= messagePassword.length) {
    alert("Ви не змогли зайти на сайт, тому що не змогли пройти форму!");
} else if (5 >= messagePassword.length, messagePost.includes("@.")) {
    alert("Ви не змогли зайти на сайт, тому що не змогли пройти форму!");
} else {
    alert("Вітаємо! Ви успішно пройшли форму!");
}








