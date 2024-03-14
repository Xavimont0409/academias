const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const PORT = 3001

conn.sync({ alter: true }).then(() => {
  server.listen(`${PORT}`, "0.0.0.0", () => {
    console.log(`listenig to ${PORT}`)
  })
})