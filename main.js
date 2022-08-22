const content = document.querySelector('#content');

for (let i = 0; i < 1500; i++) {
    const div = document.createElement("div")

    div.classList.add('circle');

    content.appendChild(div);
}