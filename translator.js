window.onload = TranslatePage();

var languageState = true;

function TranslatePage()
{
    var russian = 
    [
        "русский",
        "русский1",
        "русский2",
    ];
    var english = 
    [
        "english",
        "english1",
        "english2",
    ];

    console.log(document.cookie);
    let loadLanguageArray;

    if (languageState)
        loadLanguageArray = english;
    else
        loadLanguageArray = russian;    

    loadLanguageArray.forEach(function(item, index) {
        document.getElementById(index).innerHTML = item;
        });
}

function ChangeLanguage()
{
    languageState = !languageState;
    console.log(languageState);
    TranslatePage();
}