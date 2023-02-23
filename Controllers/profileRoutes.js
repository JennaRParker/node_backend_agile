///////////////////
// DEPENDENCIES //
/////////////////

const express = require("express");
const profileRouter = express.Router();
const cors = require("cors");
const morgan = require("morgan");

////////import data files
const Profile = require("../Models/profile");
const Project = require("../Models/project");

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

// profileRouter.get('/:id', async (req, res) => {
//     try {
//         const profile = await Profile.findById({'_id': reference})
//         const project = await Project.find({_id: {$in: profile.profile}})
//         res.json({
//             profile: profile,
//             project: project
//         })
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })


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