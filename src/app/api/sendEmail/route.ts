import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

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
          name: "Master Branchh",
          email: "masterbranch.contact@gmail.com",
        },
        to: [{ email: "masterbranch.contact@gmail.com", name: "Master Branch" }],
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
          "api-key": process.env.BREVO_API_KEY,
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
