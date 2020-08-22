
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rohit:rohitsharma@enterpriseproject.lao2q.mongodb.net/hospital?retryWrites=true&w=majority";

async function connect(){

  const client = new MongoClient(uri, { useNewUrlParser: true });
   
  
try{
  await client.connect();
   const db=client.db("hospital");
   console.log(`connected to database ${db.databaseName}`)
   
   // 1)  creating collection 
/*
   const collection=db.createCollection("patient");
   console.log(`collection created ${(await collection).collectionName}`)
   
*/
  
  const patient=db.collection("patient")

   


 //2) insert  documents into collection
 /*
 const insertCursor= await patient.insertMany([
    {patientID:100, name: 'John', address: 'Highway 71',age:25,gender:'male',phoneno:'437-239-8379',disease:"chickenpox"},
    {patientID:101,name: 'Peter', address: 'Lowstreet 4',age:28,gender:'male',phoneno:'437-987-8534',disease:"malaria"},
    {patientID:102,name: 'Anvi', address: 'Apple st 652',age:23,gender:'female',phoneno:'437-142-8978',disease:"COVID-19"},
    {patientID:103, name: 'Hannah', address: 'Mountain 21',age:29,gender:'female',phoneno:'437-239-0012',disease:"asthma"},
    {patientID:104,name: 'Michael', address: 'Valley 345',age:25,gender:'male',phoneno:'437-766-5491',disease:"typhoid"},
    {patientID:105, name: 'Sandy', address: 'Ocean blvd 2',age:22,gender:'female',phoneno:'647-239-8759',disease:"COVID-19"},
    {patientID:106,name: 'Betty', address: 'Green Grass 1',age:23,gender:'male',phoneno:'437-209-2256',disease:"diabetes"},
    {patientID:107,name: 'Richard', address: 'Sky st 331',age:24,gender:'male',phoneno:'437-071-4183',disease:"diabetes"}
    
        
])

console.log(insertCursor.insertedCount)
*/


//finding the document 
//const searchCursor =await patient.find();
//const searchCursor =await patient.find({"name":"Anvi"});
const searchCursor =await patient.find({}, { projection: { _id: 0, name: 1, address: 2,gender:3 }});
const result=await searchCursor.toArray();
result.forEach(r=>console.log(r));
console.table(result)


//updating the document
/*
const updateCursor=await patient.updateOne(
  {"name":"Sandy"},
  {"$set":{"address":"84 zanetta cr"}}
)
console.log(updateCursor.modifiedCount);

*/

//deleting the document
/*
const deleteCursor=await patient.deleteOne(
  {"address":"Highway 71"}
)
console.log(deleteCursor.deletedCount)
*/
}


catch(ex){
  console.error(`something bad happen ${ex}`)
}

finally{
  client.close();
}

}
connect();
 

