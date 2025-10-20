// На сторінці index.html знаходяться поля зазначені коментарем Task2
// При введені імені користувача в поле #userNameInput та натиску на кнопку
// #getUserButton потрібно зробити запит Fetch за посиланням - https://jsonplaceholder.typicode.com/users
// Віднайти користувача із введеним ім'ям, отримати місто його проживанння та
// відобразити у тезі #userCity
// Запустити програму потрібно за допомогою Live Server
// Перевірити правильність програми - команда node tests/task2.test.js

import { users } from './task1.js';

const getUserByName = async () => {
    const input = document.getElementById("userNameInput");
    const userName = input.value.trim();

    if (!userName) {
        alert("Введіть ім'я користувача!");
        return;
    }

    try {
        const allUsers = await users();
        const user = allUsers.find(u => u.name === userName);
        const userCity = user.address.city;

        if (user) {
            document.getElementById("userCity").innerText = userCity;
        }
    } catch (err) {
        console.error('Error fetching users:', err);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("getUserButton");
    if (button) {
        button.addEventListener("click", getUserByName);
    }
});