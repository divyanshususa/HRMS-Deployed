const Project = require('../Schemas/projectSchema')
const EmployeeSchemas = require('../Schemas/employee')

exports.createProject = async (req, res) => {
    try {
        const { projectName, projectTitle, description, duration, teamAssign, managerId } = req.body;
        if (!managerId) {
            return res.status(400).json({ error: 'Manager ID is required' });
        }
        const managerExists = await EmployeeSchemas.findById(managerId);
        if (!managerExists) {
            return res.status(404).json({ error: 'Manager not found' });
        }

        const project = new Project({
            projectName,
            projectTitle,
            description,
            duration,
            // tickets,
            teamAssign,
            manager: managerId
        });

        
        const savedProject = await project.save();
        res.status(201).json(savedProject);
    } catch (error) {
        console.error('Error creating project:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.getProjects = async (req, res) => {
    try {
      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (error) {
      console.error('Error fetching projects:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };


  exports.getProjectById = async (req, res) => {
    try {
      const projectId = req.params.projectId;
      const project = await Project.findById(projectId);
      if (!project) {
        return res.status(404).json({ error: 'Project not found' });
      }
      res.status(200).json(project);
    } catch (error) {
      console.error('Error fetching project by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };