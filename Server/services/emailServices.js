
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: Number(process.env.SMTP_PORT || 465) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendEnquiryEmail = async (enquiry) => {
  const businessName =
    process.env.BUSINESS_NAME || "Genius Enterprises";

  const emailBody = `
NEW CUSTOMER ENQUIRY

Business: ${businessName}

Customer Details
----------------------------
Name: ${enquiry.name}
Email: ${enquiry.email}
Mobile: ${enquiry.phone}

Service Details
----------------------------
Service: ${enquiry.service}
Service Area: ${enquiry.area}

Customer Message
----------------------------
${enquiry.message}

Enquiry ID: ${enquiry._id}
Source: ${enquiry.source}
Date: ${enquiry.createdAt.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
  })}

This enquiry was submitted through the website.
`;

  const emailOptions = {
    from: {
      name: businessName,
      address:
        process.env.SMTP_FROM_EMAIL ||
        process.env.SMTP_USER,
    },

    to: process.env.NOTIFY_TO_EMAIL,

    // Reply karne par customer ke email par jayega
    replyTo: enquiry.email,

    subject: `New Website Service Enquiry - ${businessName}`,

    text: emailBody,
  };

  return await transporter.sendMail(emailOptions);
};
