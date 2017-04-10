function CreateListenerSubmit(){
    document.getElementById("searchForm").addEventListener("submit", function (event) {
        event.preventDefault();
    });
}

/**
 * flag: para validar si viene desde el onload o 
 * lanzado por el usuario
 */

function SearchForm(flag) {
    var search = location.hash.replace(/\/|#/gi, '');
    if (search.length > 0 && !flag) {
        document.getElementById("inputSearch").value = search;
    }
    var inputValue = document.getElementById("inputSearch").value;
    location.hash = '/' + inputValue;
    var tmp = dataRaw.data.filter(function (book) {
        return book.title.toUpperCase().includes(inputValue.toUpperCase());
    });
    CreateBooks(tmp);
}

function FormChange() {
    var inputValue = document.getElementById("inputSearch").value;
    if (inputValue.length > 2) {
        document.getElementById("btnSubmit").removeAttribute('disabled', 'disabled');
    } else {
        document.getElementById("btnSubmit").setAttribute('disabled', 'disabled');
    }
}