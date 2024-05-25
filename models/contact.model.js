const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    fullName: {
      type: String,
    },
    message: {
      type: String,
    }
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Contact = mongoose.model("contacts", contactSchema);
module.exports = Contact;
