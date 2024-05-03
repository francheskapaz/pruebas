const path = require('node:path')


//./content/subfolder/test.txt -> esto proibido porque:
// por el sistema operativo, la barra es:
// -> unix /
// -> windows \

//barra separadora de ficheros/carpetas segun sistema operativo
console.log(path.sep)

//unir rutas con path.join
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

const filename = path.basename ('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)
