let input = document.querySelector("#input");
let add_button = document.querySelector(".add_button");
let added_items = document.querySelector("#added_items");
let deleteButton = document.getElementsByClassName("deleteButton");

let todo_Items = [];
let count = 0;


// function getLocalStorage() {
//     const todoStorage = localStorage.getItem("todoItems");
//     if (todoStorage == "undefine" || null) {
//         let todo_Items = [];
//     }
//     todo_Items = JSON.parse(todoStorage);
//     console.log(todo_Items);

// }
// function setLocalStorage(todo_Items) {
//     localStorage.setItem("todoItems", JSON.stringify(todo_Items));
// }


add_button.addEventListener('click', (e) => {


    e.preventDefault();
    const itemsName = input.value.trim();
    if (itemsName.length == 0) {
        alert("Plz Add Items");
        return;
    } else {
        const itemsObj = {
            name: itemsName,
            isDone: false,
        };

        todo_Items.push(itemsObj);
        print_data(todo_Items);
        console.log(todo_Items);

    }

});
function print_data(todo_Items) {

    added_items.innerHTML = '';

    for (let index = 0; index < todo_Items.length; index++) {

        let data = todo_Items[index];
        let status = data.isDone;
        if (status) {
            added_items.innerHTML += `
             <div class="items" class="done" onClick = "task_done(${index})" style="background-color: #BFC9CA;"  >
                <p class="done">${data.name}</p>
                <div class="edit">
                        <i class="fa-solid fa-circle-check checkGreen"></i>
                        <i class="fa-solid fa-xmark Icon delete" onClick = "remove_items(${index})" ></i>
                </div>
            </div>
                     `;
        } else {
            added_items.innerHTML += `
             <div class="items" onClick = "task_done(${index})">
                <p>${data.name}</p>
                <div class="edit">
                        <i class="fa-solid fa-xmark Icon delete" onClick = "remove_items(${index})" ></i>
                </div>
            </div>
                     `;
        }

    }
    input.value = '';

}
function remove_items(value) {
    todo_Items.splice(value, 1);
    print_data(todo_Items);
    task_done(value);

}
function task_done(value) {
    if (todo_Items.length > 0) {

        let data = todo_Items[value];
        if (data.isDone) {
            data.isDone = false;
        } else {
            data.isDone = true;
        }
        print_data(todo_Items);
    }

}






