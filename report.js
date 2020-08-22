
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://rohit:rohitsharma@enterpriseproject.lao2q.mongodb.net/hospital?retryWrites=true&w=majority";

async function connect(){

  const client = new MongoClient(uri, { useNewUrlParser: true });
   
  
try{
  await client.connect();
   const db=client.db("hospital");
   console.log(`connected to database ${db.databaseName}`)
/*
   const collection=db.createCollection("report");
   console.log(`collection created ${(await collection).collectionName}`)
*/
  const report=db.collection("report")

  //2) insert  documents into collection
 /*
 const insertCursor= await report.insertMany([
{
    reportID:1001,
    name:"Rohit",
    age:25,
    regarding:"blood_test"

},
{
    reportID:1002,
    name:"AMAR",
    age:24,
    regarding:"urine_test"

},


{
    reportID:1003,
    name:"SAndy",
    age:24,
    regarding:"xray_test"

},

{
    reportID:1004,
    name:"harleen",
    age:29,
    regarding:"MRI_test"

},
{
    reportID:1005,
    name:"NAMIT",
    age:24,
    regarding:"MALARIA_test"

}

    ])

console.log(insertCursor.insertedCount)
*/

//finding the document 
//const searchCursor =await report.find();
const searchCursor =await report.find({"name":"NAMIT"});

const result=await searchCursor.toArray();
result.forEach(r=>console.log(r));
console.table(result)

//updating the document
/*
const updateCursor=await report.updateOne(
  {"name":"AMAR"},
  {"$set":{"regarding":"blood_test"}}
)
console.log(updateCursor.modifiedCount);

*/

//deleting the document
/*
const deleteCursor=await report.deleteOne(
  {"name":"NAMIT"}
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
   