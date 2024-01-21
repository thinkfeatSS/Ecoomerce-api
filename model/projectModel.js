const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectTitle : {
        type: String,
        required: [true, "Project Title is required"]
    },
    projectCategory: {type: String, required: [true, "Project Category is required"]},
    projectType: {type: String, required:[true, "Project Type is required"]},
    liveLink: {type: String, required: [true, "Live Link is required"]},
    description : {type: String, required: [true, "Project Description is required"]},
    images: [
        {
          public_id: {
            type: String,
            required: true,
          },
          url: {
            type: String,
            required: true,
          },
        },
      ],
});

module.exports = mongoose.model("Project", projectSchema)