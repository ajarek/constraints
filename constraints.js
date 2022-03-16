"use strict";
const addButton = document.querySelector('.add-button button');
function creatBoard() {
    const body = document.querySelector('body');
    const form = document.createElement('form');
    const nameBook = document.createElement('input');
    nameBook.setAttribute('placeholder', 'Book name');
    const autorBook = document.createElement('input');
    autorBook.setAttribute('placeholder', 'Book autor');
    const nameVideo = document.createElement('input');
    nameVideo.setAttribute('placeholder', 'Video name');
    const lengthVideo = document.createElement('input');
    lengthVideo.setAttribute('placeholder', 'Video length');
    const submit = document.createElement('button');
    submit.innerText = 'Submit';
    submit.setAttribute('type', 'button');
    submit.addEventListener('click', addItem);
    form.append(nameBook, autorBook, nameVideo, lengthVideo, submit);
    body === null || body === void 0 ? void 0 : body.append(form);
}
function addItem(e) {
    const nameBook = document.querySelector('input[placeholder="Book name"]');
    const autorBook = document.querySelector('input[placeholder="Book autor"]');
    const nameVideo = document.querySelector('input[placeholder="Video name"]');
    const lengthVideo = document.querySelector('input[placeholder="Video length"]');
    e.preventDefault();
    books.push({ id: books.length + 1, name: nameBook.value, author: autorBook.value });
    videos.push({ id: videos.length + 1, name: nameVideo.value, length: Number(lengthVideo.value) });
    nameBook.value = '';
    autorBook.value = '';
    nameVideo.value = '';
    lengthVideo.value = '';
}
;
addButton.addEventListener('click', creatBoard);
const books = [
    { id: 1, name: 'Our Friends from Frolix 8', author: 'Philip K. Dick' },
    { id: 2, name: 'When: The Scientific Secrets of Perfect Timing', author: 'Daniel H. Pink' },
    { id: 3, name: 'Total Recall: My Unbelievably True Life Story', author: 'Arnold Schwarzenegger' },
    { id: 4, name: 'Wyloguj swój mózg', author: 'Anders Hansen' }
];
const videos = [
    { id: 1, name: 'Ciekawostki o typach', length: 17 },
    { id: 2, name: 'Refaktoryzacja JS do TS', length: 15 },
    { id: 3, name: 'TypeScript na Backendzie', length: 13 },
    { id: 4, name: 'TypeScript i Frameworki Front-Endowe', length: 19 },
    { id: 5, name: 'Poznaj TypeScript', length: 22 }
];
function processItems(items) {
    for (const item of items) {
        return items.filter(item => item.id > 0).map(item => item.name);
    }
}
const resultBooks = document.querySelector('.result-books');
const resultVideos = document.querySelector('.result-videos');
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', displayList);
});
function displayList(e) {
    let processedBooks = processItems(books);
    let processedVideos = processItems(videos);
    const { target } = e;
    e.preventDefault();
    if (target.id === 'books') {
        resultBooks.innerHTML = '';
        processedBooks === null || processedBooks === void 0 ? void 0 : processedBooks.forEach(book => {
            resultBooks.innerHTML += `<li>${book}</li>`;
        });
    }
    if (target.id === 'videos') {
        resultVideos.innerHTML = '';
        processedVideos === null || processedVideos === void 0 ? void 0 : processedVideos.forEach(video => {
            resultVideos.innerHTML += `<li>${video}</li>`;
        });
    }
}
