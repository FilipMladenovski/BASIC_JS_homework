let paragraphsChange = document.querySelectorAll('p');
let headersChange = document.querySelectorAll('h1, h3');

for (let paragraph of paragraphsChange) {
    paragraph.innerText = "Paragraph cnahged text !";
}

for (let header of headersChange) {
    header.innerText = "Headers changed text !";
}