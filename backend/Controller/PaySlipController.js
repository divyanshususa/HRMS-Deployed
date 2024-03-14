const PaySlip = require("../Schemas/PaySlip");

exports.getAllPaySlips = async (req, res) => {
  try {
    const paySlips = await PaySlip.find();
    res.json(paySlips);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createPaySlip = async (req, res) => {
  try {
    const paySlip = new PaySlip(req.body);
    const savedPaySlip = await paySlip.save();
    res.status(201).json(savedPaySlip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updatePaySlip = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedPaySlip = await PaySlip.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    res.json(updatedPaySlip);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deletePaySlip = async (req, res) => {
  try {
    const { id } = req.params;
    await PaySlip.findByIdAndDelete(id);
    res.json({ message: "Pay slip deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
