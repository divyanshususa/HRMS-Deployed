const TaxOverview = require("../Schemas/TaxOverview");

// Function to check consecutive absences
const checkConsecutiveAbsences = (attendance) => {
  let maxConsecutiveAbsences = 0;
  let currentStreak = 0;

  for (const day of attendance) {
    if (day === "A") {
      currentStreak++;
      maxConsecutiveAbsences = Math.max(maxConsecutiveAbsences, currentStreak);
    } else {
      currentStreak = 0;
    }
  }

  return maxConsecutiveAbsences;
};

// Upload attendance data
exports.uploadTaxOverview = async (req, res) => {
  try {
    const { EmployeeId, Name, Department, CTC, ...taxDetails } = req.body;

    // Create a new TaxOverview record
    const taxOverviewRecord = new TaxOverview({
      EmployeeId,
      Name,
      Department,
      CTC,
      taxDetails,
    });

    // Calculate payroll details
    const attendance = Object.values(taxDetails);
    const workingDays = attendance.filter((day) => day === "P").length;
    const consecutiveAbsences = checkConsecutiveAbsences(attendance);
    const dailyWage = CTC / 30;
    const deductions = consecutiveAbsences * dailyWage;
    let grossPay = workingDays * dailyWage - deductions;
    if (grossPay < 0) grossPay = 0;

    // Calculate EPF, ESI, and tax
    const EPF = parseFloat((0.12 * grossPay).toFixed(2));
    const ESI = parseFloat((0.075 * grossPay).toFixed(2));
    const taxDeduction = parseFloat((grossPay > 50000 ? 0.1 : 0.05) * grossPay).toFixed(2);
    const netPay = parseFloat((grossPay - EPF - ESI - taxDeduction).toFixed(2));

    // Save the calculated values to the record with 2 decimal places
    taxOverviewRecord.grossPay = parseFloat(grossPay.toFixed(2));
    taxOverviewRecord.netPay = netPay;
    taxOverviewRecord.taxDeduction = parseFloat(taxDeduction);
    taxOverviewRecord.EPF = EPF;
    taxOverviewRecord.ESI = ESI;
    taxOverviewRecord.paymentDate = new Date();

    // Save the record to MongoDB
    await taxOverviewRecord.save();

    res.status(201).json({
      message: "Tax overview data uploaded successfully",
      data: taxOverviewRecord,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to upload tax overview data" });
  }
};

// Month mapping for aggregation
const monthMap = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

// Get aggregated payroll data
exports.getAggregateData = async (req, res) => {
  try {
    const month = req.query.month;
    if (!month || !monthMap[month]) {
      return res.status(400).json({ message: "Invalid month specified." });
    }

    const startDate = new Date(`2024-${monthMap[month] + 1}-01`);
    const endDate = new Date(`2024-${monthMap[month] + 2}-01`);

    const results = await TaxOverview.aggregate([
      {
        $match: {
          paymentDate: {
            $gte: startDate,
            $lt: endDate,
          },
        },
      },
      {
        $group: {
          _id: null,
          aggregateNetPay: { $sum: "$netPay" },
          aggregatePaymentDate: { $first: "$paymentDate" },
          aggregateEPF: { $sum: "$EPF" },
          aggregateESI: { $sum: "$ESI" },
          aggregateTaxDeduction: { $sum: "$taxDeduction" },
          aggregateActiveEmployees: {
            $sum: { $cond: [{ $eq: ["$isActive", true] }, 1, 0] },
          },
          uniqueEmployees: { $addToSet: "$EmployeeId" },
        },
      },
      {
        $project: {
          aggregateNetPay: { $round: ["$aggregateNetPay", 2] },
          aggregatePaymentDate: 1,
          aggregateEPF: { $round: ["$aggregateEPF", 2] },
          aggregateESI: { $round: ["$aggregateESI", 2] },
          aggregateTaxDeduction: { $round: ["$aggregateTaxDeduction", 2] },
          aggregateActiveEmployees: 1,
          aggregateNumberOfEmployees: { $size: "$uniqueEmployees" },
        },
      },
    ]);

    if (results.length === 0) {
      return res.json({
        aggregateNetPay: 0,
        aggregatePaymentDate: null,
        aggregateNumberOfEmployees: 0,
        aggregateEPF: 0,
        aggregateESI: 0,
        aggregateTaxDeduction: 0,
        aggregateActiveEmployees: 0,
      });
    }

    res.json(results[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving data" });
  }
};
