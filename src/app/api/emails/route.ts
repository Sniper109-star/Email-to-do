import { NextResponse } from "next/server";
import { sendEmail, sendBulkEmail } from "@/lib/integrations/resend";
import { sendAgentEmail } from "@/lib/integrations/agentmail";
import { sendBrevoEmail } from "@/lib/integrations/brevo";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { provider, to, subject, html, from, tags, data } = body;

    let result;
    switch (provider) {
      case "resend":
        result = await sendEmail({ to, subject, html, from });
        break;
      case "resend-bulk":
        result = await sendBulkEmail({ to: Array.isArray(to) ? to : [to], subject, html, tags });
        break;
      case "agentmail":
        result = await sendAgentEmail({ to, subject, body: html, from });
        break;
      case "brevo":
        result = await sendBrevoEmail({
          to: Array.isArray(to) ? to.map((t: string) => ({ email: t })) : [{ email: to }],
          subject,
          htmlContent: html,
          sender: { email: from || "hello@app.com", name: "App" },
        });
        break;
      default:
        result = await sendEmail({ to, subject, html, from });
    }

    return NextResponse.json({ result, provider });
  } catch {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
