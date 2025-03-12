const mongoose = require("mongoose");

const TaxationSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    financialYear: { type: String, required: true },
    income: { type: Number, required: true },
    deductions: { type: Number, default: 0 },
    taxPaid: { type: Number, default: 0 },
    taxDue: { type: Number, default: 0 }
});

module.exports = mongoose.model("Taxation", TaxationSchema);
