const express = require('express') //import thư viện
const app = express() //Chạy express nó sẽ trả
const port = 3000

app.get('/', (req, res) => {
    const sum = (a, b) => a + b
    res.send(`<h1>${sum(3, 5)}</h1>`)
})
app.listen(port, () => console.log(`Port app http://localhost:${port}`))