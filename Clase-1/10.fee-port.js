const net = require('node:net')

function findAvailablePort (desiderPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(desiderPort, () => {
      const { port } = server.address()
      server.close(() => {
        resolve(port)
      })
    })
    resolve(0) // ?????
  })
}
module.exports = { findAvailablePort }
