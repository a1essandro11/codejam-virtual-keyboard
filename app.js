const LoadKeyboard = require('./src/LoadKeyboard');


window.onload = LoadPage;
window.onkeydown = handle;
window.onkeyup = handup;


let RuLang = false;
let CAPS_ON = false;
let SHIFT = false;
let ALT = false;

function LoadPage() {
  const textArea = document.createElement('textarea');
  textArea.className += 'textField';
  textArea.attributes[0].name = 'readonly';
  const blockArea = document.createElement('div');
  blockArea.className += 'BlockArea';
  document.body.appendChild(blockArea);
  document.body.appendChild(textArea);

  LoadKeyboard(RuLang, CAPS_ON);
}


function handle(e) {
  const textArea = document.querySelector('textarea');

  const elClassNum = e.which;
  const elClass = e.code.replace('Key', '');
  if (document.querySelector(`.D${elClassNum}`)) {
    const pressedKey = document.querySelector(`.D${elClassNum}`);
    pressedKey.style.background = 'red';
    if (KeySpecSized[elClassNum]) {
      if (elClassNum == 20) {
        CAPS_ON = !CAPS_ON;
        pressedKey.style.background = 'red';
        document.querySelector('.KeyBoard').remove();
        LoadKeyboard(RuLang, CAPS_ON);
      }
      if (elClassNum == 32) { textArea.value += ' '; } else if (elClassNum == 9) { textArea.value += '     '; } else if (elClassNum == 18) { ALT = true; } else if (elClassNum == 16) { SHIFT = true; } else if (elClassNum == 17) { textArea.value += ''; } else if (elClassNum == 91) { textArea.value += ''; } else if (elClassNum == 13) { textArea.value += '\n'; } else if (elClassNum == 8) {
        let delchar = '';
        for (let index = 0; index < textArea.value.length - 1; index++) {
          delchar += textArea.value[index];
        }
        console.log(delchar);
        textArea.value = delchar;
      }


      if (ALT && SHIFT) {
        RuLang = !RuLang;
        document.querySelector('.KeyBoard').remove();
        LoadKeyboard(RuLang, CAPS_ON);
      }
    } else if (SHIFT) {
      if (elClassNum == 37 || elClassNum == 38 || elClassNum == 39 || elClassNum == 40) { textArea.value += pressedKey.textContent; } else if (RuLang) {
        if (CAPS_ON) {
          if (elClassNum == 192) { textArea.value += pressedKey.textContent.toLocaleLowerCase(); } else if (elClassNum == 188) { textArea.value += pressedKey.textContent.toLocaleLowerCase(); } else if (elClassNum == 190) { textArea.value += pressedKey.textContent.toLocaleLowerCase(); } else if (elClassNum == 219) { textArea.value += pressedKey.textContent.toLocaleLowerCase(); } else if (elClassNum == 221) { textArea.value += pressedKey.textContent.toLocaleLowerCase(); } else if (elClassNum == 186) { textArea.value += pressedKey.textContent.toLocaleLowerCase(); } else if (elClassNum == 222) { textArea.value += pressedKey.textContent.toLocaleLowerCase(); } else { textArea.value += pressedKey.textContent[2]; }
        } else if (elClassNum == 192) { textArea.value += pressedKey.textContent.toLocaleUpperCase(); } else if (elClassNum == 188) { textArea.value += pressedKey.textContent.toLocaleUpperCase(); } else if (elClassNum == 190) { textArea.value += pressedKey.textContent.toLocaleUpperCase(); } else if (elClassNum == 219) { textArea.value += pressedKey.textContent.toLocaleUpperCase(); } else if (elClassNum == 221) { textArea.value += pressedKey.textContent.toLocaleUpperCase(); } else if (elClassNum == 186) { textArea.value += pressedKey.textContent.toLocaleUpperCase(); } else if (elClassNum == 222) { textArea.value += pressedKey.textContent.toLocaleUpperCase(); } else { textArea.value += pressedKey.textContent[2]; }
      } else { textArea.value += pressedKey.textContent[2]; }
    } else {
      textArea.value += pressedKey.textContent[0];
    }
  } else {
    const pressedKey = document.querySelector(`.D${elClass}`);
    pressedKey.style.background = 'red';
    if (SHIFT) {
      if (CAPS_ON) { textArea.value += pressedKey.textContent.toLowerCase(); } else { textArea.value += pressedKey.textContent.toUpperCase(); }
    } else { textArea.value += pressedKey.textContent; }
  }
}

function handup(e) {
  console.log(e.code);
  const elClassNum = e.which;
  const elClass = e.code.replace('Key', '');

  if (document.querySelector(`.D${elClassNum}`)) {
    const upKey = document.querySelector(`.D${elClassNum}`);
    upKey.style.background = 'buttonface';

    if (elClassNum == 20) {
      if (CAPS_ON) {
        upKey.style.background = 'green';
      } else {
        upKey.style.background = 'buttonface';
      }
    } else if (elClassNum == 16) { SHIFT = false; } else if (elClassNum == 18) { ALT = false; }
  } else {
    const upKey = document.querySelector(`.D${elClass}`);
    upKey.style.background = 'buttonface';
  }
}

var KeySpecSized = {
  8: 'BACKSPACE',
  9: 'TAB',
  20: 'CAPS LOCK',
  16: 'SHIFT',
  13: 'ENTER',
  17: 'CTRL',
  18: 'ALT',
  32: 'SPACE',
  91: 'WIN',
};

document.addEventListener('mousedown', (e) => {
  if (e.target.className.includes('D')) {
    console.log(e.target.className);
    e.target.style.background = 'red';
    const textArea = document.querySelector('textarea');
    let ClassEl = e.target.className;
    ClassEl = e.target.className.replace('D', '');
    if (e.target.className.includes('Spec')) {
      ClassEl = ClassEl.replace('Spec', '');
    }

    console.log(ClassEl);
    if (ClassEl == 20) {
      CAPS_ON = !CAPS_ON;
      document.querySelector('.KeyBoard').remove();
      LoadKeyboard(RuLang, CAPS_ON);
    } else if (ClassEl == 16) {
      SHIFT = true;
      if (ALT == true) {
        RuLang = !RuLang;
        document.querySelector('.KeyBoard').remove();
        LoadKeyboard(RuLang, CAPS_ON);
      }
    } else if (ClassEl == 9) { textArea.value += '     '; } else if (ClassEl == 13) { textArea.value += '\n'; } else if (ClassEl == 91) { textArea.value += ''; } else if (ClassEl == 17) { textArea.value += ''; } else if (ClassEl == 32) { textArea.value += ' '; } else if (ClassEl == 18) {
      ALT = true;
      if (SHIFT == true) {
        RuLang = !RuLang;
        document.querySelector('.KeyBoard').remove();
        LoadKeyboard(RuLang, CAPS_ON);
      }
    } else if (ClassEl == 8) {
      let delchar = '';
      for (let index = 0; index < textArea.value.length - 1; index++) {
        delchar += textArea.value[index];
      }
      console.log(delchar);
      textArea.value = delchar;
    } else if (SHIFT) {
      if (e.target.textContent.length > 1) {
        console.log('#################');
        console.log(e.target.textContent);
        console.log('#################');
        textArea.value += e.target.textContent[2];
      } else if (CAPS_ON) {
        textArea.value += e.target.textContent[0].toLowerCase();
      } else {
        textArea.value += e.target.textContent[0].toUpperCase();
      }
    } else {
      textArea.value += e.target.textContent[0];
    }
  }
});
document.addEventListener('mouseup', (e) => {
  if (e.target.className.includes('D')) {
    console.log(e.target.className);
    e.target.style.background = 'buttonface';
    const ClassEl = e.target.className;
    if (ClassEl.includes('20')) {
      if (CAPS_ON) {
        e.target.style.background = 'green';
      } else { e.target.style.background = 'buttonface'; }
    } else if (ClassEl.includes('16')) { SHIFT = false; } else if (ClassEl.includes('18')) { ALT = false; }
  }
});
