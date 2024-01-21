const express = require('express');
const {createProject, getAllProjects, getSingleProject, deleteProject, updateProject} = require('../controller/projectController')

const router = express.Router();
router.post('/createProject',createProject);
router.get('/getAllProjects/:projectCategory',getAllProjects);
router.get('/getSingleProject/:projectId',getSingleProject);
// router.delete('/deleteProject/:projectId',deleteProject)
// router.put('/updateProject/:projectId',updateProject);

module.exports = router