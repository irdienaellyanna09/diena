const { MongoClient, ServerApiVersion, FindCursor } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.7y2c2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  //const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  //client.close();
  if (err){
    console.log(err.message)
    return
  }
  console.log("Connected to mongodb");

  let result = client.db('Database').collection('abc').insertOne({
    name: 'Brigitte Tillman',
    city: 'Paramount',
    avatar: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1142.jpg',
    pass: '$2a$10$/VeB688to79LFwf4joULMuRXIN5ya6deMNpNKBdd3zbZytvTq33qq',
  })


  //client.db().admin().listDatabases().then(result =>{
  //  console.log(result['databases'][6]);
  //})

  //client.db('sample_training').listCollections().toArray().then(result=>{
  //  console.log(result);
  //})

  //client.db('sample_training').collection('inspections').find({'business_name': 'UNNAMED HOT DOG VENDOR NO LICENSE NUMBER PROVIDED'}).toArray().then(result=>{
    //console.log(result);
  

});