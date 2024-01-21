const app = require("./app");
const cloudinary = require("cloudinary");
const connectDatabase = require("./config/db");

process.on("uncaughtException", (e) => {
  console.log("Shuting up server due to error: " + e.message);
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  const dotenv = require("dotenv").config({ path: "./config/.env" });
}
// Connecting Database
connectDatabase();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Servr
const server = app.listen(process.env.PORT, () => {
  console.log(
    "server is listening on port at http://localhost:" + process.env.PORT
  );
});
// Handling exceptions
process.on("unhandledRejection", (e) => {
  console.log("Shuting up server due to error: " + e.message);
  server.close(() => {
    process.exit(1);
  });
});
