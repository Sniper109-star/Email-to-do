// @ts-nocheck
import SibApiV3Sdk from "sib-api-v3-sdk";

const apiInstance = SibApiV3Sdk.ApiClient.instance;
const apiKey = apiInstance.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY || "";

export async function sendBrevoEmail({ to, subject, htmlContent, sender }: { to: { email: string; name?: string }[]; subject: string; htmlContent: string; sender: { email: string; name: string } }) {
  try {
    const sendSmtpEmail = new SibApiV3Sdk.TransactionalEmailsApi();
    const result = await sendSmtpEmail.sendTransacEmail({
      sender,
      to,
      subject,
      htmlContent,
    });
    return result;
  } catch (error) {
    console.error("Brevo error:", error);
    throw error;
  }
}

export async function createBrevoContact({ email, attributes, listIds }: { email: string; attributes?: Record<string, any>; listIds?: number[] }) {
  try {
    const contactsApi = new SibApiV3Sdk.ContactsApi();
    const result = await contactsApi.createContact({
      email,
      attributes,
      listIds,
    });
    return result;
  } catch (error) {
    console.error("Brevo contact error:", error);
    throw error;
  }
}

export default apiInstance;
