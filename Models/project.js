const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema

const projectSchema = new mongoose.Schema({
    members: [{
        type: Schema.Types.ObjectId, ref: "Profile"
    }],
    creator: {type: Schema.Types.ObjectId, ref: "Profile", required: true},
    title: String,
    description: String,
    tech: [{
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