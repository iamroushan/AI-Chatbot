import {connect, disconnect} from "mongoose"
async function connectionToDatabase(){
    try {
        await connect(process.env.MONGODB_URL)
    } catch (error) {
        console.log(error);
        throw new Error("Can't connect to MongoDB")
    }
}

async function disconnectFromDatabase() {
    try {
        await disconnect()
    } catch (error) {
        console.log(error);
        throw new Error("Couldn't disconnect from MongoDB")
    }
}

export {connectionToDatabase, disconnectFromDatabase}