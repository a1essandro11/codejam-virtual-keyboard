function EnKeyRender(CAPS_ON,keyBoardMap){
    var keyBoard = document.createElement('div');
    keyBoard.className += 'KeyBoard';

    for (let index = 0; index < keyBoardMap.length; index++) {
        let key = document.createElement('button');
            let keyText;
        if (CAPS_ON) {
           
            if (EnSpecMap[keyBoardMap[index]]) {
                keyText = document.createTextNode(EnSpecMap[keyBoardMap[index]].toUpperCase());

                    if (KeySpecSized[keyBoardMap[index]]) {
                        key.className+=' Spec';
                    }

                key.className+=` D${keyBoardMap[index]}`;
                key.appendChild(keyText);
                keyBoard.appendChild(key);    

            }else if (EnNumMap[keyBoardMap[index]]) {
                keyText = document.createTextNode(EnNumMap[keyBoardMap[index]]);
                key.className+=` D${keyBoardMap[index]}`;
                key.appendChild(keyText);
                keyBoard.appendChild(key);   

            }else{
                keyText = document.createTextNode(EnKeyMapUp[keyBoardMap[index]]);
                key.className += ` D${String.fromCharCode(keyBoardMap[index])}`;
                key.appendChild(keyText);
                keyBoard.appendChild(key);
            }

            if (keyBoardMap[index] == 8 || keyBoardMap[index] == 220 || keyBoardMap[index] == 13 || keyBoardMap[index] == 38) {
                var clearFix = document.createElement('div');
                clearFix.className += "clearFix";
                keyBoard.appendChild(clearFix);
            }            
        } else {

            if (EnSpecMap[keyBoardMap[index]]) {
                keyText = document.createTextNode(EnSpecMap[keyBoardMap[index]]);

                    if (KeySpecSized[keyBoardMap[index]]) {
                        key.className+=' Spec';
                    }

                key.className+=` D${keyBoardMap[index]}`;
                key.appendChild(keyText);
                keyBoard.appendChild(key);    

            }else if (EnNumMap[keyBoardMap[index]]) {
                keyText = document.createTextNode(EnNumMap[keyBoardMap[index]]);
                key.className+=` D${keyBoardMap[index]}`;
                key.appendChild(keyText);
                keyBoard.appendChild(key);   

            }else{
                keyText = document.createTextNode(EnKeyMapLow[keyBoardMap[index]]);
                key.className += ` D${String.fromCharCode(keyBoardMap[index])}`;
                key.appendChild(keyText);
                keyBoard.appendChild(key);
            }

            if (keyBoardMap[index] == 8 || keyBoardMap[index] == 220 || keyBoardMap[index] == 13 || keyBoardMap[index] == 38) {
                var clearFix = document.createElement('div');
                clearFix.className += "clearFix";
                keyBoard.appendChild(clearFix);
            } 
        }
    }
   document.body.appendChild(keyBoard);

}
module.exports=EnKeyRender;

//KEY MAP HERE!!!!
// ***********************************************

var EnKeyMapLow ={
    81:"q",
    87:"w",
    69:"e",
    82:"r",
    84:"t",
    89:"y",
    85:"u",
    73:"i",
    79:"o",
    80:"p",
    65:"a",
    83:"s",
    68:"d",
    70:"f",
    71:"g",
    72:"h",
    74:"j",
    75:"k",
    76:"l",
    90:"z",
    88:"x",
    67:"c",
    86:"v",
    66:"b",
    78:"n",
    77:"m",
}
 var EnNumMap ={
    49:'1 !',
    50:'2 @',
    51:'3 #',
    52:'4 $',
    53:'5 %',
    54:'6 ^',
    55:'7 &',
    56:'8 *',
    57:'9 (',
    48:'0 )'

}
var EnKeyMapUp={
    81:"Q",
    87:"W",
    69:"E",
    82:"R",
    84:"T",
    89:"Y",
    85:"U",
    73:"I",
    79:"O",
    80:"P",
    65:"A",
    83:"S",
    68:"D",
    70:"F",
    71:"G",
    72:"H",
    74:"J",
    75:"K",
    76:"L",
    90:"Z",
    88:"X",
    67:"C",
    86:"V",
    66:"B",
    78:"N",
    77:"M",
}

 var EnSpecMap = {
    188:", <",
    190:". >", 
    191:"/ ?",
    192:"` ~",
    219:"[ {",
    221:"] }",
    186:"; :",
    222:"\' \"",
    189: '- _',
    187: '= +',
    8: 'BACKSPACE',
    9: 'TAB',
    220: '\\ |',
    20: 'CAPS LOCK',
    16: 'SHIFT',
    13: 'ENTER',
    17: 'CTRL',
    18: 'ALT',
    32: "SPACE",
    38: '↑',
    37: '←',
    39: '→',
    40: '↓',
    91: 'WIN'
}

 var KeySpecSized = {
    8: 'BACKSPACE',
    9: 'TAB',
    20: 'CAPS LOCK',
    16: 'SHIFT',
    13: 'ENTER',
    17: 'CTRL',
    18: 'ALT',
    32: "SPACE",
    91: 'WIN'
}
// ***********************************************

