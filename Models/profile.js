const { default: mongoose } = require("mongoose")
const Schema = mongoose.Schema

const profileSchema = new mongoose.Schema({
    projectsJoined: [{
        type: Schema.Types.ObjectId, ref: "Project"
    }],
    projectsCreated: [{
        type: Schema.Types.ObjectId, ref: "Project"
    }],
    photo: String,
    name: String,
    roles: [{
        type: String
    }],
    bio: String,
    city: String,
    twitter: String,
    github: String,
    linkedin: String,
    portfolio: String,
    interests: [{
        type: String
    }],
    uid: String,
    tech: [{
        type: String
    }],
    experience: [{
        type: String
    }],
    newUser: Boolean
})

const Profile = mongoose.model("Profile", profileSchema )

module.exports=Profile