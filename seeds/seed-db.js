const db = require('../models');

const items = [
    {
        product_name: "Toyota",
        department_name: "Cars",
        price: 24000,
        stock_quantity: 70
    },
    {
        product_name: "Porshe",
        department_name: "Cars",
        price: 79000,
        stock_quantity: 70
    },
    {
        product_name: "Ford",
        department_name: "Cars",
        price: 35000,
        stock_quantity: 70
    },
    {
        product_name: "Lamborghini",
        department_name: "Cars",
        price: 175000,
        stock_quantity: 70
    },
    {
        product_name: "BMW",
        department_name: "Cars",
        price: 78000,
        stock_quantity: 70
    },
    {
        product_name: "Mercedes",
        department_name: "Cars",
        price: 71000,
        stock_quantity: 70
    },
    {
        product_name: "Aston Martin",
        department_name: "Cars",
        price: 97000,
        stock_quantity: 70
    },
    {
        product_name: "Jaguar",
        department_name: "Cars",
        price: 53000,
        stock_quantity: 70
    },
    {
        product_name: "Nissan",
        department_name: "Cars",
        price: 37000,
        stock_quantity: 70
    },
    {
        product_name: "Mazda",
        department_name: "Cars",
        price: 29000,
        stock_quantity: 70
    }
];

db.sequelize.sync({force: true}).then(function() {
    db.Product.bulkCreate(items).then(function(rows) {
        console.log('\n\nINSERTED\n\n');
    }).catch(function(err) {
        console.log('\n\nError:', err);
    });
});