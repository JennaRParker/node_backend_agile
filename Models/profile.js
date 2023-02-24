const { default: mongoose } = require("mongoose")

const profileSchema = new mongoose.Schema({
    reference_number: Number,
    projects: [{
        type: String
    }],
    photo: String,
    name: String,
    role: String,
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
    skills: [{
        type: String
    }]
})

const Profile = mongoose.model("Profile", profileSchema )

module.exports=Profile