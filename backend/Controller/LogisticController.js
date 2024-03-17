const Logistic = require("../Schemas/logistic");

exports.getAllLogistic = async (req, res) => {
  try {
    const stats = await Logistic.find();
    res.json(stats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createLogistic = async (req, res) => {
  try {

    const newStats = new Logistic(req.body);
    const savedStats = await newStats.save();
    res.status(201).json(savedStats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateLogistic = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedStats = await Logistic.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );
    res.json(updatedStats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteLogistic = async (req, res) => {
  try {
    const { id } = req.params;
    await Logistic.findByIdAndDelete(id);
    res.json({ message: "Dashboard stats deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
