window.onload = TranslatePage();

var languageState = false;

function TranslatePage()
{
    let loadLanguageArray;
    var russian = 
    [
        "Товары",
        "Отзывы",
        "О нас",
        "En",
        "Добро пожаловать в наш магазин шпаг для комаров, где вы можете найти уникальный подарок для вашего маленького друга! Мы рады представить вам лучшие шпашки по лучшей цене",
        "Наш слоган",
        "«И комар лошадь свалит, но элегантнее на шпагах»",
        "Множество положительных отзывов!!! - наше кредо.",
        "Комар Павел",
        "Никогда не видел ничего лучше. 5 из 5!!!",
        "Комар Екатерина",
        "Лучше пудры в моем клеше может быть только двуствольный дробовик и классическая шпага.",
        "Комар Вениамин",
        "А я просто шизанутый! Ы!0_0",
        "Комар Суслик02",
        "Круто, очень кравится, советую.",
        "Комар Артемий",
        "Я хоть и панк, но мне не ***. Очень крутой продукт, советую!",
        "Комар Петр",
        "Ле-ле-лет ми дай... Ах да, очень нравится, 5/5...",
        "Комар Елизавета",
        "Ты котик - я коти... Комарик... Бззз... А так советую конечно.",
    ];
    var english = 
    [
        "Products",
        "Reviews",
        "About us",
        "Ru",
        "Welcome to our mosquito sword store where you can find a unique gift for your little friend! We are pleased to present you the best skewers at the best price.",
        "Our slogan",
        "“And a mosquito will knock down a horse, but it’s more elegant on swords”",
        "Lots of positive feedback!!! is our creed.",
        "Komar Pavel",
        "Never seen anything better. 5 out of 5!!!",
        "Komar Ekaterina",
        "Better powder in my flare can only be a double-barreled shotgun and a classic sword.",
        "Mosquito Benjamin",
        "And I'm just crazy! S!0_0",
        "Mosquito Suslik02",
        "Cool, very cool, I advise.",
        "Mosquito Artemy",
        "Even though I'm a punk, I don't ***. Very cool product, I recommend!",
        "Komar Petr",
        "Le-le-let me die... Oh yeah, love it, 5/5...",
        "Mosquito Elizabeth",
        "You are a cat - I am a cat ... Mosquito ... Bzzz ... And of course I advise you.",
    ];

    if (languageState)
        loadLanguageArray = english;
    else
        loadLanguageArray = russian;    

    loadLanguageArray.forEach(function(item, index) {
        try
        {
            document.getElementById(index).innerHTML = item;
        }      
        catch{}  
    });
}

function ChangeLanguage()
{
    languageState = !languageState;
    console.log(languageState);
    TranslatePage();
}