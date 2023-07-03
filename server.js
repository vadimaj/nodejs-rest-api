const mongoose = require("mongoose");
const app = require("./app");

const DB_HOST =
  "mongodb+srv://vadimaj:EGcGs9.aaQZ5Hsx@cluster0.txu1qdq.mongodb.net/contacts_db?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connection successful");
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
