var dataRaw;

loadJSON(JSON_FILE, function (response) {
    StoreData(response);
})

function StoreData(response) {
    dataRaw = response;
}

function CreateBooks(books) {
    var booksContent = window.document.getElementById("booksContent");
    booksContent.innerHTML = '';
    for (var i = 0; i < books.length; i++) {
        if (i % 3 === 0) {
            var div = window.document.createElement("DIV");
            div.className = "pure-g";
        }
        booksContent.appendChild(div);
        var book = new Book(books[i]);
        div.appendChild(book.createHtml());
    }
}

function Book(book) {
    this.image = book.image;
    this.title = book.title;
    this.teaser = book.teaser;
    this.createHtml = function () {
        var div = document.createElement("DIV");
        div.className = "pure-u-1-3";
        div.innerHTML = '<img src=' + this.image + '>' +
            '<h3>' + this.title + '</h3>' +
            '<p>' + this.teaser + '</p>';
        return div;
    };
}