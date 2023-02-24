const { default: mongoose } = require("mongoose")

const projectSchema = new mongoose.Schema({
    reference: String,
    title: String,
    description: String,
    skills: [{
        type: String
    }],
    roles: [{
        type: String
    }],
    categories: [{
        type: String
    }],
    figmaLink: String,
    gitHubFrontendLink: String,
    gitHubLink: String,
    googleDriveLinks: String,
    jiraLink: String,
    microsoftTeamsLinks: String,
    slackLink: String,
    trelloLink: String,
    zoomLink: String,
})

const Project = mongoose.model("Project", projectSchema )

module.exports=Project