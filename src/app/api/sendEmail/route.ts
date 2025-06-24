import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import {BREVO_SENDER_EMAIL,BREVO_RECEIVER_EMAIL,SENDER_NAME,RECEIVER_NAME} from "@/utils"


// ✅ Add this line right after your imports
console.log("CURRENT ENV KEY:", process.env.BREVO_API_KEY);

export async function POST(req: NextRequest) {
  console.log("✅ API Route /api/sendEmail Hit");

  const body = await req.json();
  const { name, email, phone, subject, message } = body;

  if (!name || !email || !subject || !message) {
    console.log("❌ Missing fields in request body");
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  // Log environment variables for debugging
  console.log("API KEY:", process.env.BREVO_API_KEY);
  console.log("Sender Email:", process.env.BREVO_SENDER_EMAIL);
  console.log("Receiver Email:", process.env.BREVO_RECEIVER_EMAIL);

  try {
    console.log(process.env.BREVO_API_KEY)
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Kevin Patil",
          email: BREVO_SENDER_EMAIL,
        },
        to: [{ email: BREVO_RECEIVER_EMAIL, name: "Receiver Name" }],
        subject: `Contact Form: ${subject}`,
        htmlContent: `
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        `,
      },
      {
        headers: {
          "api-key": "J1q4t8a0mTZR2PNw",
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Email sent successfully:", response.data);
    return NextResponse.json({ message: "Email sent", data: response.data });
  } catch (error: any) {
    console.error("❌ Error sending email:", error.response?.data || error.message);
    return NextResponse.json(
      { message: "Failed to send email", error: error.response?.data },
      { status: 500 }
    );
  }
}
