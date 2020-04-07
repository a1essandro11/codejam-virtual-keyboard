let RuKeyRender = require('./Lang/RuKeyRender');
let EnKeyRender = require('./Lang/EnKeyRender');


let keyBoardMap = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187,
    8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220, 20, 65,
    83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13, 16, 90, 88, 67, 86, 66,
    78, 77, 188, 190, 191, 38, 17, 91, 18, 32, 37, 40, 39];


function LoadKeyboard(RuLang, CAPS_ON) {
    if (document.querySelector('h1')) {
        document.querySelector('h1').remove();
    }
    const LangInfo = document.createElement('h1');
    if (RuLang) {
        RuKeyRender(CAPS_ON, keyBoardMap);
        LangInfo.textContent = "SHIFT+ALT";

    } else {
        EnKeyRender(CAPS_ON, keyBoardMap);
        LangInfo.textContent = "SHIFT+ALT";

    }

    document.body.appendChild(LangInfo);
}

module.exports = LoadKeyboard;