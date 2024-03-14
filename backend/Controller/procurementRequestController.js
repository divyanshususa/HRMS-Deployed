const ProcurementRequest = require("../Schemas/ProcurementRequest");

// Get all procurement requests
exports.getAll = async (req, res) => {
  try {
    const requests = await ProcurementRequest.find();
    res.json(requests);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a single procurement request by ID
exports.getById = async (req, res) => {
  try {
    const request = await ProcurementRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ error: "Request not found" });
    }
    res.json(request);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new procurement request
exports.create = async (req, res) => {
  try {
    const newRequest = new ProcurementRequest(req.body);
    const savedRequest = await newRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update an existing procurement request
exports.update = async (req, res) => {
  try {
    const updatedRequest = await ProcurementRequest.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.json(updatedRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a procurement request by ID
exports.delete = async (req, res) => {
  try {
    await ProcurementRequest.findByIdAndDelete(req.params.id);
    res.json({ message: "Request deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
