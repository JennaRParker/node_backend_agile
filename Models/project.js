const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema

const projectSchema = new mongoose.Schema({
    members: [{
        type: Schema.Types.ObjectId, ref: "Profile", required: true
    }],
    creator: {type: Schema.Types.ObjectId, ref: "Profile", required: true},
    title: {type: String, required: true},
    description: String,
    image: String,
    tech: [{
        type: String
    }],
    roles: [{
        type: String
    }],
    categories: [{
        type: String
    }],
    timeline: {
      stage1: {
        name: {type: String},
        description: {type: String}
      },
      stage2: {
        name: {type: String},
        description: {type: String}
      },
      stage3: {
        name: {type: String},
        description: {type: String}
      },
      stage4: {
        name: {type: String},
        description: {type: String}
      },
      stage5: {
        name: {type: String},
        description: {type: String}
      },
      stage6: {
        name: {type: String},
        description: {type: String}
      },
    },
    joinRequests: [{
      name: String,
      avatar: String,
      id: {type: Schema.Types.ObjectId, ref: "Profile", required: true}
    }],
    figmaLink: String,
    gitHubFrontendLink: String,
    gitHubBackendLink: String,
    googleDriveLinks: String,
    jiraLink: String,
    microsoftTeamsLink: String,
    slackLink: String,
    trelloLink: String,
    zoomLink: String,
})

const Project = mongoose.model("Project", projectSchema )

module.exports=Project