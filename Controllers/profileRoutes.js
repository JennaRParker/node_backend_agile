///////////////////
// DEPENDENCIES //
/////////////////

const express = require("express");
const profileRouter = express.Router();
const cors = require("cors");
const morgan = require("morgan");

////////import data files
const Profile = require("../Models/profile")

/////////////////
// MIDDLEWARE //
///////////////

profileRouter.use(cors());
profileRouter.use(morgan("dev"));
profileRouter.use(express.json());

// Index
profileRouter.get("/", async (req, res) => {
    try {
        res.json(await Profile.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

// Delete
profileRouter.delete("/:id", async (req, res) => {
    try {
        res.json(await Profile.findByIdAndRemove(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Update
profileRouter.put("/:id", async (req, res) => {
    try{
        req.json(
            await Profile.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

// Create
profileRouter.post("/", async (req, res) => {
    try {
        res.json(await Profile.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = profileRouter