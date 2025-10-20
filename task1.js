// Завдання: отримання даних про користувачів 
// За допомогою засобі Fetch отримати інформацію про користувачів
// за посиланням - https://jsonplaceholder.typicode.com/users 
// Імена користувачів відобразити в ненумерованому списку ul.usersList,
// який створений у файлі index.html
// Запустити програму за допомогою Live Server
// Перевірити за допомогою команди npm tests/task1.test.js 

export const users = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
};

users()
    .then(data => {
        const list = document.querySelector('.usersList');
        list.innerHTML = data
            .map(user => `<li>${user.name}</li>`)
            .join('');
    })
    .catch(err => console.error('Fetch error:', err));