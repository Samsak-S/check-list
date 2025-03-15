let id = 0;
const list = document.querySelector("#list-view");

const list_view = list.childNodes;

list_view.forEach(child => {
    if(child.nodeName === "#text")
        child.remove();
    console.log(child)
});

console.log(list_view);

const click = document.querySelector("#add-item");

click.addEventListener("click", (event) => {
    event.preventDefault();
    const task = document.querySelector("#task");
    const text_input = task.value.trim();

    if(text_input) {
        const new_div = document.createElement("div");
        new_div.id = `item-${++id}`;
        new_div.className = "item";

        new_div.innerHTML = `<p>${text_input}</p>
        <button class="delete">x</button>`;

        const parent_div = document.querySelector("#list-view");
        parent_div.appendChild(new_div);
        console.log(parent_div);
        task.value = "";
    }

    const clear_all = document.querySelector("#clear-all");
    clear_all.addEventListener("click", (event) => {
        document.querySelectorAll(".delete").forEach(ele => {
            ele.parentElement.remove();
        });
    });
    document.querySelectorAll(".delete").forEach(ele => {
        ele.addEventListener("click", (event) => {
            event.target.parentElement.remove();
        });
    });
});