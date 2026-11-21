
import "dotenv/config";
import transporter from "./config/mailer.js";

async function testEmail() {
  try {
    await transporter.verify();
    console.log("SMTP authentication successful");

    const info = await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "A1 Enterprises - SMTP Test",
      text: "Your email notification system is working.",
    });

    console.log("Email accepted:", info.accepted);
    console.log("Email rejected:", info.rejected);
  } catch (error) {
    console.error("SMTP test failed:", error.message);
  }
}

testEmail();
