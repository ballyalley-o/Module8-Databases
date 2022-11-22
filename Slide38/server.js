const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const connectDB = require("./database")

//load env vars
dotenv.config({ path: "./.env" });

//connect to database
connectDB()

//route files
const blogRoute = require("./routes/blogRoute")

const app = express()

//body parser
app.use(express.json())

// dev loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//mount routers
app.use("/db/v1/blog", blogRoute)

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
)

//Handle unhandled promise rejections
process.on("unchandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`)

  //close server & exit process
  server.close(() => process.exit(1))
})
