const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");
const { init } = require("../models/user.js");
require('dotenv').config({path: "../.env"});

const MONGO_URL=process.env.ATLASDB_URL;

main()
.then((res)=>{
    console.log("connected to database");
    initDB();
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect(MONGO_URL);
}


const initDB=async ()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({
        ...obj,
        owner:"697997d1c8fb355957043a87",
        geometry: {
      type: "Point",
      coordinates: [77.4126, 23.2599], // Default coordinates (Bhopal)
    },
    }))
    await Listing.insertMany(initData.data);
    console.log("data was initialised")
}
