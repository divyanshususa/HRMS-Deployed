const Budget = require("../Schemas/budgetModel");

exports.getAllBudgets = async (req, res) => {
  try {
    const budgets = await Budget.find();
    res.json(budgets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createBudget = async (req, res) => {
  try {
    const {
      budgetNo,
      budgetDescription,
      amount,
      budgetedAmount,
      actualAmount,
      variance,
      date,
    } = req.body;
    const newBudget = new Budget({
      budgetNo,
      budgetDescription,
      amount,
      budgetedAmount,
      actualAmount,
      variance,
      date,
    });
    const savedBudget = await newBudget.save();
    res.status(201).json(savedBudget);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateBudget = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const updatedBudget = await Budget.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });
    res.json(updatedBudget);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteBudget = async (req, res) => {
  try {
    const { id } = req.params;
    await Budget.findByIdAndDelete(id);
    res.json({ message: "Budget deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
