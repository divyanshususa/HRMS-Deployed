const mongoose = require("mongoose");

const capacityBuildingSchema = new mongoose.Schema({
  title: String,
  description: String,
  startDate: Date,
  duration: String,
  organizer: String,
  status: String,
});

const CapacityBuilding = mongoose.model(
  "CapacityBuilding",
  capacityBuildingSchema
);

module.exports = CapacityBuilding;
