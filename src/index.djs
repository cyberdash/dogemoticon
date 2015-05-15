trained

very alphabet is [ 'xxxxx\nx...x\nxxxxx\nx...x\nx...x','xxxx.\nx...x\nxxxx.\nx...x\nxxxx.','xxxxx\nx....\nx....\nx....\nxxxxx','xxxx.\nx...x\nx...x\nx...x\nxxxx.','xxxxx\nx....\nxxxxx\nx....\nxxxxx','xxxxx\nx....\nxxx..\nx....\nx....','.xxxx\nx....\nx..xx\nx...x\n.xxx.','x...x\nx...x\nxxxxx\nx...x\nx...x','xxxxx\n..x..\n..x..\n..x..\nxxxxx','....x\n....x\n....x\n....x\nxxxxx','x...x\nx..x.\nxxx..\nx..x.\nx...x','x....\nx....\nx....\nx....\nxxxxx','x...x\nx.x.x\nx.x.x\nx...x\nx...x','x...x\nxx..x\nx.x.x\nx..xx\nx...x','xxxxx\nx...x\nx...x\nx...x\nxxxxx','xxxxx\nx...x\nxxxxx\nx....\nx....','.xxx.\nx...x\nx.x.x\nx..x.\n.xx.x','xxxxx\nx...x\nxxxx.\nx..x.\nx...x','xxxxx\nx....\nxxxxx\n....x\nxxxxx','xxxxx\n..x..\n..x..\n..x..\n..x..','x...x\nx...x\nx...x\nx...x\nxxxxx','x...x\nx...x\n.x.x.\n.x.x.\n..x..','x...x\nx...x\nx.x.x\nx.x.x\n.x.x.','x...x\n.x.x.\n..x..\n.x.x.\nx...x','x...x\nx...x\nxxxxx\n..x..\n..x..','xxxxx\n.x...\n..x..\n...x.\nxxxxx' ]

such convertLetter much letter
    very code is letter.toLowerCase().charCodeAt(0) - 97
    very ascii is alphabet[code]
wow ascii

such convertString much s
    very rows = [[],[],[],[],[]]
    much very letterIndex as 0 next letterIndex smaller s.length next letterIndex more 1
        very ascii is convertLetter(s[letterIndex])


            much very rowIndex as 0 next rowIndex smaller 5 next rowIndex more 1

                rly ascii
                    rows[rowIndex].push(ascii.split('\n')[rowIndex] + ' ')
                but
                    rows[rowIndex].push('     ')
                wow
            wow
    wow
wow rows.map(function (entireRow) { return entireRow.join('') }).join('\n')

dogeument.addEventListener('input', function () {
	very input = dogeument.getElementById('in')
	very positiveValue = dogeument.getElementById('positive').value
	very negativeValue = dogeument.getElementById('negative').value
    dogeument.getElementById('out').value = convertString(input.value).replace(/x/g, positiveValue).replace(/\./g, negativeValue)
});