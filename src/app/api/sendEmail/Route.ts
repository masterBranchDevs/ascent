import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

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
<<<<<<< Updated upstream:src/app/api/sendEmail/Route.ts
=======
<<<<<<< Updated upstream
    console.log("📨 Sending email via Brevo API");

=======
    console.log(process.env.BREVO_API_KEY)
>>>>>>> Stashed changes
>>>>>>> Stashed changes:src/app/api/sendEmail/route.ts
    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: {
          name: "Kevin Patil",
<<<<<<< Updated upstream:src/app/api/sendEmail/Route.ts
          email: "your-sender-email@example.com",
        },
        to: [{ email: "receiver@example.com", name: "Receiver Name" }],
=======
<<<<<<< Updated upstream
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [{ email: process.env.BREVO_RECEIVER_EMAIL, name: "Receiver Name" }],
=======
          email: BREVO_SENDER_EMAIL,
        },
        to: [{ email: BREVO_RECEIVER_EMAIL, name: "Receiver Name" }],
>>>>>>> Stashed changes
>>>>>>> Stashed changes:src/app/api/sendEmail/route.ts
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
          "api-key": process.env.BREVO_API_KEY!,
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
