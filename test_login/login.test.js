const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app.js");
const { DB_HOST_TEST } = process.env;
//const DB_HOST_TEST =
// "mongodb+srv://vadimaj:EGcGs9.aaQZ5Hsx@cluster0.txu1qdq.mongodb.net/contacts_db_test?retryWrites=true&w=majority";
mongoose.set("strictQuery", true);
describe("login test", () => {
  beforeAll(async () => {
    await mongoose
      .connect(DB_HOST_TEST)
      .then(() => console.log("Database connection successful"))
      .catch((error) => {
        console.log(error.message);
      });
  });

  test("should perform user login", async () => {
    const response = await request(app).post("/api/users/login").send({
      email: "koopa@gmail.com",
      password: "qweqwe",
    });
    expect(response.statusCode).toBe(200);
    expect(typeof response.body.token).toBe("string");
    expect(typeof response.body.user.email).toBe("string");
    expect(typeof response.body.user.subscription).toBe("string");
  });
  afterAll(async () => {
    await mongoose
      .disconnect(DB_HOST_TEST)
      .then(() => console.log("DB disconnected!"));
  });
});
