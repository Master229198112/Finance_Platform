const mongoose = require("mongoose");

const InvestmentSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, enum: ["Stock", "Mutual Fund", "Crypto", "ETF"], required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Investment", InvestmentSchema);
