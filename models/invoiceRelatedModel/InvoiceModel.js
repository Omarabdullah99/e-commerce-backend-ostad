const mongoose = require("mongoose");

const InvoiceSchema = mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    payable: { type: String, required: true },
    cus_details: { type: String, required: true },
    tran_id: { type: String, required: true },
    val_id: { type: String, required: true },
    delivery_status: { type: String, required: true },
    payment_status: { type: String, required: true },
    total: { type: String, required: true },
    vat: { type: String, required: true },
  },
  { timestamps: true }
);

const InvoiceModel = mongoose.model("invoices", InvoiceSchema);

module.exports = InvoiceModel;
