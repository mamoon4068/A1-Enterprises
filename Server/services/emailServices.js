
// import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT || 465),
//   secure: Number(process.env.SMTP_PORT || 465) === 465,
//   connectionTimeout: 5000,
//   greetingTimeout: 5000,
//   socketTimeout: 10000,
//   dnsTimeout: 5000,
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// });

// export const sendEnquiryEmail = async (enquiry) => {
//   const businessName =
//     process.env.BUSINESS_NAME || "Genius Enterprises";

//   const emailBody = `
// NEW CUSTOMER ENQUIRY

// Business: ${businessName}

// Customer Details
// ----------------------------
// Name: ${enquiry.name}
// Email: ${enquiry.email}
// Mobile: ${enquiry.phone}

// Service Details
// ----------------------------
// Service: ${enquiry.service}
// Service Area: ${enquiry.area}

// Customer Message
// ----------------------------
// ${enquiry.message}

// Enquiry ID: ${enquiry._id}
// Source: ${enquiry.source}
// Date: ${enquiry.createdAt.toLocaleString("en-IN", {
//     timeZone: "Asia/Kolkata",
//   })}

// This enquiry was submitted through the website.
// `;

//   const emailOptions = {
//     from: {
//       name: businessName,
//       address:
//         process.env.SMTP_FROM_EMAIL ||
//         process.env.SMTP_USER,
//     },

//     to: process.env.NOTIFY_TO_EMAIL,

//     // Reply karne par customer ke email par jayega
//     replyTo: enquiry.email,

//     subject: `New Website Service Enquiry - ${businessName}`,

//     text: emailBody,
//   };

//   return await transporter.sendMail(emailOptions);
// };


export const sendEnquiryEmail = async (enquiry) => {
  const {
    BREVO_API_KEY,
    SENDER_EMAIL,
    SENDER_NAME,
    ADMIN_EMAIL,
  } = process.env;

  if (!BREVO_API_KEY || !SENDER_EMAIL || !ADMIN_EMAIL) {
    throw new Error("Missing email configuration");
  }

  const emailContent = `
New Customer Enquiry

Customer Name: ${enquiry.name}
Email: ${enquiry.email}
Phone: ${enquiry.phone}
Service: ${enquiry.service}
Area: ${enquiry.area}
Message: ${enquiry.message || "Not provided"}
Source: ${enquiry.source || "Website"}

Please contact the customer as soon as possible.

Genius Enterprises
  `;

  try {
    const response = await fetch(
      "https://api.brevo.com/v3/smtp/email",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "api-key": BREVO_API_KEY,
        },

        body: JSON.stringify({
          sender: {
            name: SENDER_NAME || "Genius Enterprises",
            email: SENDER_EMAIL,
          },

          to: [
            {
              email: ADMIN_EMAIL,
            },
          ],

          subject: "New Customer Service Enquiry",

          textContent: emailContent,
        }),

        signal: AbortSignal.timeout(10000),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || `Brevo API error: ${response.status}`
      );
    }

    console.log(
      "Email notification accepted:",
      data.messageId
    );

    return data;

  } catch (error) {
    console.error(
      "Email notification failed:",
      error.message
    );

    throw error;
  }
};