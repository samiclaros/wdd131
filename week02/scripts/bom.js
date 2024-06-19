const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const li = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    li.appendChild(listText);
    listText.textContent = myItem;
    li.appendChild(listBtn);
    listBtn.textContent = '❌';
    list.appendChild(li);

    listBtn.addEventListener('click', () => {
        list.removeChild(li);
    });
});