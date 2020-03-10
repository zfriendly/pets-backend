const express = require('express')
const parser = require('body-parser')
const app = express();)
const index = require("./routes/index")


app.use(parser.json());
app.use("/", index);



app.listen(3000, () => console.log('listening on port 3000'))