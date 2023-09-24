import mongoose from "mongoose"
import { User } from "@/models/user";

export const  connectDb= async () =>{
    try{
       const {connection}= await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"work_manager",
        })

        console.log("db connected....");
        //console.log(connection)


      //const u=  new User({
          //  name:"A",
           // email:"abc@gmail.com",
            //password:"123456",
           // about:"this is testing"
        //})

        //await u.save();
      //  console.log("User Created");
    }
    catch(error)
    {
console.log("failed")
    }
}