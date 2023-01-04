// const mongoose = require("mongoose");
// mongoose.set("strictQuery", true);

// const connectDB = async () => {
//   try {
//     //   mongoDB connection string
//     const con = await mongoose.createConnection(process.env.MONGO_URl, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     });
//     console.log(`MongoDB connected:${con.connection.host}`);
//   } catch (err) {
//     console.log(err);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;
