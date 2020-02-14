const express = require("express");
const config = require("./config/config");
const router = require("./router/todoRouter");
const path = require("path");
const mongoose = require("mongoose");

const app = express(); // Anropar express
// för att kunna läsa data som POST till datbasen. Datan är URL-kodad  
app.use(express.urlencoded({
    extended: true
}));
// För att få css
app.use(express.static(path.join(__dirname, "/public")));



app.set("view engine", "ejs"); //Aktivera views. Den ska läsa av views-mappen läs den med ejs. 
app.use(router); // För att kunna routa. 

//listen to port
const port = process.env.PORT || 5002;
// För att undvika error i terminalen när man använder mongoose
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(config.databaseURL, options).then(() => {
    console.log(`We did it! Port: ${port}`);

    app.listen(port); // app is listening to port.
})

module.exports = app