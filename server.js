const express = require('express')
const app = express()
const morgan =require('morgan')
const mongoose =require('mongoose')
// require("dotenv").config dotenv for create react App


app.use(express.json())
app.use(morgan('dev'))



//Connect to databse
mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://cruddy19:KaksvIA9sQDCckpV@capstone5.h44afbt.mongodb.net/capstone5?retryWrites=true&w=majority",
() => console.log("Connected to DB")
)

// Routes
app.use('/api/surfboards', require('./routes/surfboardRouter'));
app.use('/api/wetsuits', require('./routes/wetsuitRouter'));
app.use('/api/accessories', require('./routes/accessoryRouter'))
// app.use('/api/store', require('./routes/storeRouter'))



//Error Handling
app.use((err, req, res, next) => {
  console.log(err)
  return res.send({errMsg: err.message})
})

app.listen(8019, () => {
  console.log('the server is running on port 8019');
});
