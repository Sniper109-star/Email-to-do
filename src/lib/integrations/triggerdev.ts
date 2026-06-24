import { TriggerClient } from "@trigger.dev/sdk";

export const triggerClient = new TriggerClient({
  id: process.env.TRIGGER_API_KEY || "",
  apiKey: process.env.TRIGGER_API_KEY || "",
  apiUrl: process.env.TRIGGER_API_URL,
});

export async function scheduleWorkflow(workflow: string, data: Record<string, any>, schedule?: { cron?: string; delayed?: string }) {
  try {
    const response = await fetch(`${process.env.TRIGGER_API_URL}/v1/workflows/${workflow}/trigger`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TRIGGER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload: data, ...schedule }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Trigger.dev workflow error:", error);
    throw error;
  }
}

export async function triggerEvent(event: string, data: Record<string, any>) {
  try {
    const response = await fetch(`${process.env.TRIGGER_API_URL}/v1/events/${event}/trigger`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.TRIGGER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ payload: data }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Trigger.dev event error:", error);
    throw error;
  }
}

export const workflows = {
  emailProcessor: "email-processor",
  notificationSender: "notification-sender",
  dataSync: "data-sync",
  smartContractExecutor: "smart-contract-executor",
  agentTaskRunner: "agent-task-runner",
  analyticsReporter: "analytics-reporter",
};
