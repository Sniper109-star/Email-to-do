// Brevo Email Integration using REST API
const BREVO_API_KEY = process.env.BREVO_API_KEY || "";
const BREVO_API_BASE = "https://api.brevo.com/v3";

export async function sendBrevoEmail({
  to,
  subject,
  htmlContent,
  sender,
}: {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  sender: { email: string; name: string };
}) {
  try {
    const response = await fetch(`${BREVO_API_BASE}/smtp/email`, {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sender,
        to,
        subject,
        htmlContent,
      }),
    });

    if (!response.ok) {
      throw new Error(`Brevo API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Brevo error:", error);
    throw error;
  }
}

export async function createBrevoContact({
  email,
  attributes,
  listIds,
}: {
  email: string;
  attributes?: Record<string, any>;
  listIds?: number[];
}) {
  try {
    const response = await fetch(`${BREVO_API_BASE}/contacts`, {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        attributes,
        listIds,
      }),
    });

    if (!response.ok) {
      throw new Error(`Brevo API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Brevo contact error:", error);
    throw error;
  }
}
