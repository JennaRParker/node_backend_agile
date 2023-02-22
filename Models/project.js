const { default: mongoose } = require("mongoose")

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    tech: [{
        name: String
    }]
})

const Project = mongoose.model("Project", projectSchema )

module.exports=Project