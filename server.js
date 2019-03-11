var express = require("express")
var app = express()
var db = require("./models")


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Make api-routes work
var apiRoutes = require("./routes/api-routes")
app.use(apiRoutes)

// Make html-routes work
var htmlRoutes = require("./routes/html-routes")
app.use(htmlRoutes)

// db.Product.create({
//     product_name:"Toyota",
//     department_name:"Cars",
//     price: 24000,
//     stock_quantity: 17,
// })



var port = process.env.PORT||3000


db.sequelize.sync().then(function(){
    app.listen(port)
})