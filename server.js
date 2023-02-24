///////////////////
// DEPENDENCIES //
/////////////////

require("dotenv").config();
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const mongoose = require("mongoose");

////////import data files
const profileController = require("./Controllers/profileRoutes")
const projectController = require("./Controllers/projectRoutes")



/////////////////
// MIDDLEWARE //
///////////////

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/profiles", profileController)
app.use("/projects", projectController)

//////////////////////////
//  MONGOOSE CONNECTION /
////////////////////////

mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

//////////////
// ROUTES ///
////////////

// CREATE TEST ROUTE ///////
app.get("/", (req, res) => {
    res.send("hello world");
});

//connection events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected from mongoose"))
    .on("error", (error) => console.log(error));

///////////////
// LISTENER //
/////////////

app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))