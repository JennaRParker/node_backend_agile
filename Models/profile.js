const { default: mongoose } = require("mongoose")

const profileSchema = new mongoose.Schema({
    photo: String,
    proffession: String,
    bio: String,
    twitterLink: String,
    githubLink: String,
    portfolioLink: String,
    bootcamp: Boolean,
    selfTaught: Boolean,
    csDegree: Boolean,
    industryProf: Boolean,
    fullstack: Boolean,
    frontend: Boolean,
    backend: Boolean,
    ux: Boolean,
    productManager: Boolean,
    tools: [{
        name: String
    }]
})

const Profile = mongoose.model("Profile", profileSchema )

module.exports=Profile