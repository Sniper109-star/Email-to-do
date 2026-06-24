// @ts-nocheck
import AgentMail from "agentmail";

const agentmailClient = new AgentMail({
  apiKey: process.env.AGENTMAIL_API_KEY,
  baseURL: process.env.AGENTMAIL_API_URL,
});

export async function sendAgentEmail({ to, subject, body, from }: { to: string; subject: string; body: string; from?: string }) {
  try {
    const result = await agentmailClient.emails.send({
      from: from || "agent@app.com",
      to,
      subject,
      body,
    });
    return result;
  } catch (error) {
    console.error("AgentMail error:", error);
    throw error;
  }
}

export async function createInbox(email: string) {
  try {
    const result = await agentmailClient.inboxes.create({ email });
    return result;
  } catch (error) {
    console.error("AgentMail inbox error:", error);
    throw error;
  }
}

export async function getInboxMessages(inboxId: string) {
  try {
    const result = await agentmailClient.inboxes.messages.list(inboxId);
    return result;
  } catch (error) {
    console.error("AgentMail messages error:", error);
    throw error;
  }
}

export default agentmailClient;
