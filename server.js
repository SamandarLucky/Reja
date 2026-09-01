const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb://samandar_db:Terter_123@cluster0.v7cojqa.mongodb.net/"
mongodb.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err, client) => {
    if(err) console.log("Error on connection MongoDb");
    else{
        console.log("MongoDB connection succeed");
        module.exports = client;
        const app = require("./app");
       const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
    console.log(`The server is running successfully on port" ${PORT}, http://localhost:${PORT}`);
}); 
    }
});





