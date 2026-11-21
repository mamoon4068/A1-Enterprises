
import mongoose from "mongoose";

const enquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 80,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 120,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    service: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    area: {
      type: String,
      required: true,
      trim: true,
      maxlength: 120,
    },

    message: {
      type: String,
      required: true,
      trim: true,
      maxlength: 1500,
    },

    source: {
      type: String,
      default: "contact-page",
      maxlength: 60,
    },

    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },

    notificationStatus: {
      type: String,
      enum: ["pending", "sent", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    collection: "enquiries",
  }
);

const Enquiry = mongoose.model(
  "Enquiry",
  enquirySchema
);

export default Enquiry;
