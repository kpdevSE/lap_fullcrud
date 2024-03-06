const mongoose = require("mongoose");

const AdminFormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const AdminFormData = mongoose.model("log_reg_form_admin", AdminFormDataSchema);

module.exports = AdminFormData;
