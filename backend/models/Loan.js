const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    loanType: { type: String, enum: ["Personal", "Home", "Auto", "Education"], required: true },
    amount: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    tenureMonths: { type: Number, required: true },
    status: { type: String, enum: ["Approved", "Pending", "Rejected"], default: "Pending" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Loan", LoanSchema);
