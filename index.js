const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

//middleware 
app.use(cors());
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vpxj7.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log('mongodb connected');

const run = async () => {
    try{

    }
    finally{

    }

}

run().catch(console.dir);





app.get('/', (req, res)=>{
    res.send('running the manufacturer-app');
})

app.listen(port, ()=> {
    console.log('the server is running');
})