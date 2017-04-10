window.onload = function () {
    var savedSearch = window.document.getElementById("saved"),
        labels = dataRaw.entities.saved,

        categories = window.document.getElementById("categories"),
        cat = dataRaw.entities.categories[0],

        languages = window.document.getElementById("languages"),
        langs = dataRaw.entities.lang[0],

        presentation = window.document.getElementById("presentation"),
        editions = dataRaw.entities.edition[0];

    RenderAside(savedSearch, labels, true);
    RenderAside(categories, cat);
    RenderAside(languages, langs);
    RenderAside(presentation, editions);

};

function RenderAside(ul, obj, flagURL) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            var li = window.document.createElement("LI");
            if(flagURL){
                li.innerHTML = '<a href="' + obj[key].url + '" >' + obj[key].label + '</a>';
            }else{
                li.innerHTML = '<a href="#/' + obj[key].label + '" >' + obj[key].label + '</a>';
            }
            ul.appendChild(li);
        }
    }
}