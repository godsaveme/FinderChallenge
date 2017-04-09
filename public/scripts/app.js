/*
  main script for only runs every function
*/
window.onload = function() {
    SearchForm(false);
    AwesompleteCreate();
};

function AwesompleteCreate(){
    var inputSearch = document.getElementById("inputSearch");
    new Awesomplete(inputSearch, {
        list: dataRaw.data.map(function (book){
            return book.title;
        })
    });
    //console.log(_.map(dataRaw.data, function(data){
    //  return data.title;
    //}));
    //console.log(dataRaw.data);
}

