var express = require("express")
var router = express.Router()
var db = require("../models")


// This route gets all products
router.get("/products",function(req, res){
    db.Product.findAll().then(function(data){
        res.send(data)
    })
})

// This route gets one product using id
router.get("/products/:id",function(req, res){
    var id = req.params.id
    db.Product.findOne({where: {
        id: id
    }}).then(function(data){
       res.send(data)
    })
})


// This route updates product quanity
router.post("/products/update",function(req, res){
    
    
    // console.log(quantity)
    db.Product.update(
        {stock_quantity: req.body.quantity},
        {where: {id: req.body.id}}
).then(function(data){
       res.send(data)
    })
})




module.exports = router