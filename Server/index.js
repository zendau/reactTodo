
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const mainRouter = require("./routes/main.router")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/", mainRouter)


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

