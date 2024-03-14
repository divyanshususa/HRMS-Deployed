const SalaryBreakdown = require("../Schemas/SalaryBreakdown");

// Create a new salary breakdown
exports.createSalaryBreakdown = async (req, res) => {
  try {
    const salaryBreakdown = new SalaryBreakdown(req.body);
    await salaryBreakdown.save();
    res.status(201).json(salaryBreakdown);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get all salary breakdowns
exports.getAllSalaryBreakdowns = async (req, res) => {
  try {
    const salaryBreakdowns = await SalaryBreakdown.find();
    res.json(salaryBreakdowns);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get salary breakdown by ID
exports.getSalaryBreakdownById = async (req, res) => {
  try {
    const salaryBreakdown = await SalaryBreakdown.findById(req.params.id);
    if (!salaryBreakdown) {
      return res.status(404).json({ error: "Salary breakdown not found" });
    }
    res.json(salaryBreakdown);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update salary breakdown
exports.updateSalaryBreakdown = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSalaryBreakdown = await SalaryBreakdown.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.json(updatedSalaryBreakdown);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete salary breakdown
exports.deleteSalaryBreakdown = async (req, res) => {
  try {
    const { id } = req.params;
    await SalaryBreakdown.findByIdAndDelete(id);
    res.json({ message: "Salary breakdown deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
