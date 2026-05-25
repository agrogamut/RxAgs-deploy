import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import { Resend } from "resend"

const schema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  company: z.string().max(100).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
})

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "ayashbera@gmail.com"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = schema.parse(body)
    const resend = new Resend(process.env.RESEND_API_KEY)

    const fromLabel = "RxAgs Contact <onboarding@resend.dev>"

    // Notification to team
    await resend.emails.send({
      from: fromLabel,
      to: TO_EMAIL,
      subject: `New Enquiry from ${data.name}${data.company ? ` (${data.company})` : ""}`,
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #0D1B2A;">
          <div style="background: #0D1B2A; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; font-size: 20px; margin: 0;">New Contact Enquiry — RxAgs</h1>
          </div>
          <div style="background: #F4F8FD; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #E2EAF4;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; font-size: 13px; color: #64748B; width: 120px;">Name</td><td style="padding: 8px 0; font-size: 14px; font-weight: 600;">${data.name}</td></tr>
              <tr><td style="padding: 8px 0; font-size: 13px; color: #64748B;">Email</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${data.email}" style="color: #1A6FBF;">${data.email}</a></td></tr>
              ${data.company ? `<tr><td style="padding: 8px 0; font-size: 13px; color: #64748B;">Company</td><td style="padding: 8px 0; font-size: 14px;">${data.company}</td></tr>` : ""}
            </table>
            <hr style="border: none; border-top: 1px solid #E2EAF4; margin: 20px 0;" />
            <p style="font-size: 13px; color: #64748B; margin-bottom: 8px;">Message:</p>
            <p style="font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
          </div>
        </div>
      `,
    })

    // Auto-reply to submitter
    await resend.emails.send({
      from: fromLabel,
      to: data.email,
      subject: "We've received your enquiry — RxAgs",
      html: `
        <div style="font-family: 'DM Sans', Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #0D1B2A;">
          <div style="background: #0D1B2A; padding: 24px 32px; border-radius: 8px 8px 0 0;">
            <h1 style="color: #fff; font-size: 20px; margin: 0;">Thank you for reaching out.</h1>
          </div>
          <div style="background: #F4F8FD; padding: 32px; border-radius: 0 0 8px 8px; border: 1px solid #E2EAF4;">
            <p style="font-size: 15px; line-height: 1.7;">Hi ${data.name},</p>
            <p style="font-size: 15px; line-height: 1.7; color: #64748B;">
              We've received your message and our team will get back to you within 1–2 business days.
            </p>
            <p style="font-size: 15px; line-height: 1.7; color: #64748B;">
              In the meantime, feel free to explore our product portfolio at
              <a href="https://rxags.com/products" style="color: #1A6FBF;"> rxags.com/products</a>.
            </p>
            <p style="font-size: 15px; line-height: 1.7; margin-top: 24px;">Warm regards,<br/><strong>The RxAgs Team</strong><br/><span style="color: #64748B; font-size: 13px;">Agrogamut Services Pvt. Ltd.</span></p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    if (err instanceof z.ZodError) {
      const first = err.issues?.[0]
      return NextResponse.json({ error: first?.message ?? "Validation error." }, { status: 400 })
    }
    console.error("Contact API error:", err)
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 })
  }
}
