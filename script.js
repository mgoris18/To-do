const form = document.getElementById('form');
const input = document.getElementById('input');
const todos = document.getElementById('todos');
const toggle = document.getElementById('toggle');
const body = document.querySelector('body');
const header = document.querySelector('h1');
const small = document.querySelector('small')

toggle.addEventListener("click", () => toggle.classList.toggle("active")); 
toggle.addEventListener("click",() => body.classList.toggle("active"));
toggle.addEventListener("click",() => header.classList.toggle("active"));
toggle.addEventListener("click",() => form.classList.toggle("active"));
toggle.addEventListener("click",() => input.classList.toggle("active"));
toggle.addEventListener("click",() => todos.classList.toggle("active"));
toggle.addEventListener("click",() => small.classList.toggle("active"));


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const todoText = input.value;

    if(todoText) {
        const todoEl = document.createElement('li');
        todoEl.innerText = todoText;

        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed');
        });

        todoEl.addEventListener("contextmenu", 
        (e) => {
            e.preventDefault();

            todoEl.remove();
        });

        todos.appendChild(todoEl);

        input.value = "";

    }
});
