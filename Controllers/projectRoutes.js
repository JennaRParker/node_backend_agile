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
        res.json(await Project.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
})

//Show
projectRouter.get('/:id', async (req, res) => {
    try {
        res.json(await Project.findById(req.params.id))
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
        req.json(
            await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
        );
    } catch (error) {
        //send error
        res.status(400).json(error);
    }
})

// Create
projectRouter.post("/", async (req, res) => {
    try {
        res.json(await Project.create(req.body));
    } catch (error) {
        res.status(400).json(error)
    }
});

module.exports = projectRouter