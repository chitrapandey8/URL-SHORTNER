import mongoose from "mongoose";
import { serverConfig } from ".";

export async function connectDB() {
     try{
       await mongoose.connect(serverConfig.MONGO_URI);
       console.log('Connected to MONGODB', mongoose.connection.name);
       
     }catch(error){
        console.log(`Error connection to MongoDB`, error);
        
     }
}