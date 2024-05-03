//Esto solo en los modulos nativos
//que no tienen promesas nativas
// const {promisify} = require('node:util')
// const readFilePromise = promisify(fs.readFile)



const fs = require ('node:fs/promises') 

/*
console.log("Leyendo el primer archivo")
const text = fs.readFileSync('./archivo.txt', 'utf-8')
console.log(text)

console.log("Hacer cosas mientras lee el archivo")

console.log("Leyendo el psegundo archivo")
const secondtext = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log(secondtext)

 readFileSync()-> este metodo es sincrono
 readFile()-> metodo asincrono
*/
console.log("Leyendo el primer archivo")
fs.readFile('./archivo.txt', 'utf-8')
    .then(text => { //utilizando promesas / promisses en vez de callback
        console.log("Primer texto: ", text)
    })

console.log("---> Hacer cosas mientras lee el archivo...")

console.log("Leyendo el segundo archivo")
fs.readFile('./archivo2.txt', 'utf-8')
.then(text => {
    console.log("Segundo texto: ", text)
})
