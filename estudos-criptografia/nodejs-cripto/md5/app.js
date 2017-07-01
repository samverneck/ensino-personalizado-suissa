const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('md5', secret)
                              // mensagem aqui em baixo
                   .update('Tente descobrir se for capaz seu')
                   .digest('hex');
console.log(hash);
