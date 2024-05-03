// fs -> file system
// node es mono hilo / mono thread
const fs = require('node:fs') // a partir de node 16 se recomienda poner node:

const stats = fs.statSync('./archivo.txt')
// stat para tener la informacion del archivo

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbolico
  stats.size // tamano en bytes
)
