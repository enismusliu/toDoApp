const addNew = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');


const generateNewToDo = function (todo) {
    const html = `
    <li>
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `;
    list.innerHTML += html;
};
const filterTodos = term => {
    //list eshte HTML colection prandaj nuk
    //mujna me perdor funksione qe perdoren te array, andaj e kem shendrru
    //niher ne array, tani e kem perdor fun. filter

    // add filtered class
    Array.from(list.children)
        .filter(todo => !todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add('filtered'));

    // remove filtered class
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove('filtered'));

    // Array.from(list.children)
    //     .filter((todo) => {
    //         return !todo.textContent.toLowerCase().includes(term);
    //     })
    //     .forEach((todo) => {
    //         return todo.classList.add('filtered');
    //     })
    // Array.from(list.children)
    //     .filter((todo) => {
    //         return todo.textContent.toLowerCase().includes(term);
    //     })
    //     .forEach((todo) => {
    //         return todo.classList.remove('filtered');
    //     })
};

//add
addNew.addEventListener('submit', e => {
    e.preventDefault();//Qita me kqyr
    const todo = addNew.add.value.trim();

    if (todo.length) {
        generateNewToDo(todo);
        addNew.reset();
    }

});

//delete
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// filter todos event
search.addEventListener('keyup', () => {

    const term = search.value.trim().toLowerCase();
    filterTodos(term);

});