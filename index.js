const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

//middleware 
app.use(cors());
app.use(express.json())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.vpxj7.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log('mongodb connected');

const run = async () => {
    try{
        await client.connect();
        const productCollection = client.db('tools-shop').collection('product');

        app.post('/product', async (req, res)=>{
            const product = req.body;
            const result = await productCollection.insertOne(product);
            res.send(result)
        })

        app.get('/product', async (req, res)=> {
            const product= await productCollection.find().toArray();
            res.send(product);
        })

        app.delete('/product/:id', async (req, res) => {
            console.log(req.params);
            const id = req.params.id
            const filter = {_id : ObjectId(id)}
            const result = await productCollection.deleteOne(filter)
            res.send(result);
        })


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