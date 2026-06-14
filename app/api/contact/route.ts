import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, phone, address, situation, message } = await req.json();

  if (!name || !phone || !address) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Save More <leads@elro-eehomebuyers.com>",
    to: process.env.LEAD_EMAIL!,
    subject: `New Cash Offer Request — ${name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #2D6A4F; padding: 24px; border-radius: 8px 8px 0 0;">
          <h1 style="color: #FAF7F2; margin: 0; font-size: 22px;">New Lead — Save More</h1>
        </div>
        <div style="background: #fff; padding: 24px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 140px;">Name</td>
              <td style="padding: 10px 0; font-weight: 600; color: #1B4332;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Phone</td>
              <td style="padding: 10px 0; font-weight: 600; color: #1B4332;">
                <a href="tel:${phone.replace(/\D/g, "")}" style="color: #2D6A4F;">${phone}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Property Address</td>
              <td style="padding: 10px 0; font-weight: 600; color: #1B4332;">${address}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Situation</td>
              <td style="padding: 10px 0; color: #1B4332;">${situation || "Not specified"}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 10px 0; color: #6b7280; font-size: 14px; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; color: #1B4332;">${message}</td>
            </tr>
            ` : ""}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #F0FAF4; border-radius: 8px; border-left: 4px solid #2D6A4F;">
            <p style="margin: 0; color: #1B4332; font-size: 14px;">
              📞 Call them back at <strong><a href="tel:${(phone || "").replace(/\D/g, "")}" style="color: #2D6A4F;">${phone}</a></strong> to follow up on their cash offer request.
            </p>
          </div>
        </div>
        <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 16px;">Save More · San Antonio &amp; Greater Austin, TX</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
