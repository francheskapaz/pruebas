import { platform, release, arch, cpus } from 'node:os'

console.log("Informacion del sistema operativo")
console.log("------------------------------")

console.log("Nombre del sistema operativo", platform())
console.log("Version del sistema operativo", release())
console.log("Architecture", arch())
console.log("CPUs", cpus())