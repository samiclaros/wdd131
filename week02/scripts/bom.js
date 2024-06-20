const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");

button.addEventListener('click', function() {
    const myItem = input.value;
    input.value = '';

    if (myItem.trim()) {
        const li = document.createElement('li');
        const listText = document.createElement('span');
        const btn = document.createElement('button');

        li.appendChild(listText);
        listText.textContent = myItem;
        li.appendChild(btn);
        btn.textContent = '❌';
        list.appendChild(li);

        btn.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
    });
    } else {
        input.focus();
    }
});