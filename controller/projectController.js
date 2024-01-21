const Project = require("../model/projectModel");
const catchAsyncErrors = require('../middleware/catchAsyncErrors')
const cloudinary = require('cloudinary');
exports.createProject = catchAsyncErrors(async (req, res) => {
  // console.log(req.body.images);
    let images = [];
    console.log()
    if (typeof req.body.images === "string") {
        images.push(req.body.images);
      } else {
        images = req.body.images;
      }
      const imagesLinks = [];
      for (let i = 0; i < images.length; i++) {
        const result = await cloudinary.v2.uploader.upload(images[i], {
          folder: "projects",
        });
    
        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      }
      const projectData = req.body;
      projectData.images = imagesLinks;
    const createdProject = await Project.create(projectData);
    res.status(201).json({ success: true, createdProject });
});

exports.getAllProjects = catchAsyncErrors(async (req, res) => {
    const {projectCategory} = req.params.projectCategory;
    const projects = await Project.find(projectCategory);
    res.status(200).json({ success: true, projects });
});
// Find one
exports.getSingleProject = catchAsyncErrors(async (req, res) => {
    const { projectId } = req.params;
    const project = await Project.findById(projectId);
    res.status(200).json({ success: true, project });
});

// Update a project
// exports.updateProject = catchAsyncErrors(async (req, res) => {
//   const { projectTitle, projectDescription, projectPrice } = req.body;
//   const { projectId } = req.params;
//     const project = Project.findById(projectId);
//     if (!project) {
//       console.log("Project not found");
//       res.status(404).json({ success: false, message: "Project not found" });
//     }
    
//     await Project.findByIdAndUpdate(projectId,req.body);
//     res.status(200).json({ success: true });
// });

// // Delete a project
// exports.deleteProject = catchAsyncErrors(async (req, res) => {
//     const { projectId } = req.params;
//     const deletedProject = await Project.deleteOne({ _id: projectId });
//     res.status(204).json({ success: true, deletedProject });
// });
