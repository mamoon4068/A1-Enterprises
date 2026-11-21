
import Enquiry from "../models/Enquiry.js";

import {
  validateEnquiry,
} from "../validators/enquiryValidator.js";

import {
  sendEnquiryEmail,
} from "../services/emailServices.js";

export const createEnquiry = async (req, res) => {
  try {
    // Step 1: Validate customer details
    const validation = validateEnquiry(req.body);

    if (!validation.valid) {
      return res.status(400).json({
        success: false,
        message: validation.error,
      });
    }

    // Step 2: Save data in MongoDB Atlas
    const enquiry = await Enquiry.create(
      validation.data
    );

    console.log(
      "New customer enquiry saved:",
      enquiry._id.toString()
    );

    // Step 3: Notify business email
    let notificationSent = false;

    try {
      await sendEnquiryEmail(enquiry);

      notificationSent = true;

      console.log(
        "Email notification accepted by SMTP"
      );
    } catch (emailError) {
      console.error(
        "Email notification failed:",
        emailError.message
      );
    }

    // Step 4: Save notification status
    enquiry.notificationStatus = notificationSent
      ? "sent"
      : "failed";

    try {
      await enquiry.save();
    } catch (statusError) {
      console.error(
        "Could not update notification status:",
        statusError.message
      );
    }

    // Step 5: Return response to frontend
    return res.status(201).json({
      success: true,
      message: "Your enquiry has been received successfully",
      enquiryId: enquiry._id,
      notificationSent,
    });

  } catch (error) {
    console.error(
      "Enquiry creation failed:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message: "Unable to submit enquiry. Please try again.",
    });
  }
};
