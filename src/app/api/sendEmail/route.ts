import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

import { BREVO_SENDER_EMAIL, BREVO_RECEIVER_EMAIL, BREVO_API_KEY } from "@/utils"

export async function POST(req: NextRequest) {

  const body = await req.json();
  const { name, email, phone, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Scoop Investment",
          email: BREVO_SENDER_EMAIL,
        },
        to: [{ email: BREVO_RECEIVER_EMAIL, name: "Receiver Name" }],
        templateId: 1,
        params: {
          FIRSTNAME: name,
          EMAIL: email,
          PHONE: phone || "Not provided",
          SUBJECT: subject,
          MESSAGE: message
        },
      },
      {
        headers: {
          "api-key": BREVO_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );
    return NextResponse.json({ message: "Email sent", data: response.data });
  } catch (error: any) {
    console.error("❌ Error sending email:", error.response?.data || error.message);
    return NextResponse.json(
      { message: "Failed to send email", error: error.response?.data },
      { status: 500 }
    );
  }
}
