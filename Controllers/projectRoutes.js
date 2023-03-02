///////////////////
// DEPENDENCIES //
/////////////////

const express = require("express");
const projectRouter = express.Router();
const cors = require("cors");
const morgan = require("morgan");

////////import data files
const Project = require("../Models/project")

/////////////////
// MIDDLEWARE //
///////////////

projectRouter.use(cors());
projectRouter.use(morgan("dev"));
projectRouter.use(express.json());

// Index
projectRouter.get("/", async (req, res) => {
    try {
        res.json(await Project.find({}).populate('members'));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Show
projectRouter.get('/:id', async (req, res) => {
    try {
        res.json(await Project.findById(req.params.id).populate('members'));
        console.log(req.params)
    } catch (error) {
        res.status(400).json(error)
    }
})


// Delete
projectRouter.delete("/:id", async (req, res) => {
    try {
        res.json(await Project.findByIdAndRemove(req.params.id));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
});

// Update
projectRouter.put("/:id", async (req, res) => {
    try {
        res.json(await Project.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('members'));
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

// Create
projectRouter.post("/", async (req, res) => {
    try {
        res.json(await Project.create(req.body).populate('members'));
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = projectRouter