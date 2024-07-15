const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const http = require("http")
// let routes = require("./routes")
// const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const dbConnect = require("./dbConnect/dbConnect")

/* CONFIGURATION */
require("dotenv").config()
const app = express();
app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
// app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

/* ROUTES */
// app.use("/client", clientRoutes);

//Database
dbConnect();

app.listen(process.env.PORT, ()=>{
    console.log(`server started on ${process.env.PORT}`);
})
