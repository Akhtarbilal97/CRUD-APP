const mongoose = require('mongoose');
mongoose.set("strictQuery", true);

const connectDB = async()=>{
    try{
// mongodb connection string
const con = await mongoose.connect('mongodb://127.0.0.1:27017/crud',process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
}) 
// const con = await mongoose.connect("mongodb://localhost:27017/config", { 
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
//     useFindAndModify:false,
//     useCreateIndex:true,
// });
console.log(`MongoDB connected : ${con.connection.host}`)
    }catch(err){
        console.log(err);
        process.exit(1);

    }
}

module.exports = connectDB;
