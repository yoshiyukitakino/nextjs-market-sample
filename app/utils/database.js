import mongoose from "mongoose"

const db_string = "mongodb+srv://glenfiddich12years:nack7nack7@cluster0.bk0yi2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    try {
        await mongoose.connect(db_string)
        console.log("Success: Connected to MongoDB")
    } catch (err) {
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB