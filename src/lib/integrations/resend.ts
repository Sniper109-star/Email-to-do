import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, html, from }: { to: string; subject: string; html: string; from?: string }) {
  try {
    const result = await resend.emails.send({
      from: from || "App <hello@app.com>",
      to,
      subject,
      html,
    });
    return result;
  } catch (error) {
    console.error("Resend error:", error);
    throw error;
  }
}

export async function sendBulkEmail({ to, subject, html, tags }: { to: string[]; subject: string; html: string; tags?: { name: string; value: string }[] }) {
  try {
    const result = await resend.emails.send({
      from: "App <hello@app.com>",
      to,
      subject,
      html,
      tags,
    });
    return result;
  } catch (error) {
    console.error("Resend bulk email error:", error);
    throw error;
  }
}

export default resend;
