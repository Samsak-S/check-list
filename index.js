
const list = document.querySelector("#list-view");

const list_view = list.childNodes;

list_view.forEach(child => {
    if(child.nodeName === "#text")
        child.remove();
    console.log(child)
});

console.log(list_view);
