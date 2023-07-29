import { writeFile } from 'fs'

console.log('saving file')

// retorna imediatamente
writeFile('file.txt', 'Hello Node.js', 'utf8', err => {
    if (!err) {
        console.log('file saved')
    }
})

console.log('processing complete')

// 

// console.time('meuCallback');

// meuCallback((err, result) => {
//     console.timeEnd('meuCallback');
    
//     // Faça algo com o erro ou resultado
// });

// function meuCallback(callback) {
//     // Simular um callback assíncrono com um atraso
//     setTimeout(() => callback(null, "resultado"), 1000);
// }
