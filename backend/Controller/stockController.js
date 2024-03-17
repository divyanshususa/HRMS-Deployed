// controllers/stockController.js
const Stock = require("../Schemas/stock");
const uploadOnCloudinary = require("../utils/cloudinary");

exports.getAllStocks = async (req, res) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.createStock = async (req, res) => {
  try {
    const  image  = req.file;
    
    const url = await uploadOnCloudinary([image]);
    const newStock = new Stock({...req.body,image:url[0], status:"In Stock"});
    const savedStock = await newStock.save();
    res.status(201).json(savedStock);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getStockById = async (req, res) => {
  try {
    const stock = await Stock.findById(req.params.id);
    if (!stock) {
      return res.status(404).json({ error: "Stock not found" });
    }
    res.json(stock);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateStock = async (req, res) => {
  try {
    const updatedStock = await Stock.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedStock) {
      return res.status(404).json({ error: "Stock not found" });
    }
    res.json(updatedStock);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteStock = async (req, res) => {
  try {
    const deletedStock = await Stock.findByIdAndDelete(req.params.id);
    if (!deletedStock) {
      return res.status(404).json({ error: "Stock not found" });
    }
    res.json({ message: "Stock deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
