const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
  {
    message : {
        type : String
    },
    status:{
        type : String
    },
  },
  { timestamps: { createdAt: "createdAt" } }
);

let Notification = mongoose.model("notifications", notificationSchema);
module.exports = Notification;
