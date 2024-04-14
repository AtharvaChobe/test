import mongoose from "mongoose"


const dbInit = async () =>{
    const MONGODB = process.env.MONGODB_URI
    try {
        if(MONGODB)
        await mongoose.connect(MONGODB)
    console.log("mongo connected")
    } catch (error) {
        console.log(error)
    }
}

export default dbInit;