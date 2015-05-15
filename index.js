"use strict";

var alphabet = [ 'xxxxx\nx...x\nxxxxx\nx...x\nx...x' ,'xxxx.\nx...x\nxxxx.\nx...x\nxxxx.','xxxxx\nx....\nx....\nx....\nxxxxx','xxxx.\nx...x\nx...x\nx...x\nxxxx.','xxxxx\nx....\nxxxxx\nx....\nxxxxx','xxxxx\nx....\nxxx..\nx....\nx....','.xxxx\nx....\nx..xx\nx...x\n.xxx.','x...x\nx...x\nxxxxx\nx...x\nx...x','xxxxx\n..x..\n..x..\n..x..\nxxxxx','....x\n....x\n....x\n....x\nxxxxx','x...x\nx..x.\nxxx..\nx..x.\nx...x','x....\nx....\nx....\nx....\nxxxxx','x...x\nx.x.x\nx.x.x\nx...x\nx...x','x...x\nxx..x\nx.x.x\nx..xx\nx...x','xxxxx\nx...x\nx...x\nx...x\nxxxxx','xxxxx\nx...x\nxxxxx\nx....\nx....','.xxx.\nx...x\nx.x.x\nx..x.\n.xx.x','xxxxx\nx...x\nxxxx.\nx..x.\nx...x','xxxxx\nx....\nxxxxx\n....x\nxxxxx','xxxxx\n..x..\n..x..\n..x..\n..x..','x...x\nx...x\nx...x\nx...x\nxxxxx','x...x\nx...x\n.x.x.\n.x.x.\n..x..','x...x\nx...x\nx.x.x\nx.x.x\n.x.x.','x...x\n.x.x.\n..x..\n.x.x.\nx...x','x...x\nx...x\nxxxxx\n..x..\n..x..','xxxxx\n.x...\n..x..\n...x.\nxxxxx' ] ;

function convertLetter (letter) { 
var code = letter.toLowerCase().charCodeAt(0) - 97 ;
var ascii = alphabet[code];
return ascii;
} 

function convertString (s) { 
var rows = [[],[],[],[],[]];
for ( var letterIndex  = 0 ; letterIndex  < s.length ; letterIndex  += 1 ) {
var ascii = convertLetter(s[letterIndex]);


for ( var rowIndex  = 0 ; rowIndex  < 5 ; rowIndex  += 1 ) {

if (ascii ) {
                    rows[rowIndex].push(ascii.split('\n')[rowIndex] + ' ')
} else {
                    rows[rowIndex].push('     ')
} 
} 
} 
return rows.map(function (entireRow) { return entireRow.join('') }).join('\n');
} 

document.addEventListener('input', function () {
var input = document.getElementById('in');
var positiveValue = document.getElementById('positive').value;
var negativeValue = document.getElementById('negative').value;
    document.getElementById('out').value = convertString(input.value).replace(/x/g, positiveValue).replace(/\./g, negativeValue)
});
