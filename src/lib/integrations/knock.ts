export async function sendInAppNotification({ userId, type, data, actor }: { userId: string; type: string; data: Record<string, any>; actor?: Record<string, any> }) {
  try {
    const response = await fetch(`https://api.knock.app/v1/workflows/${type}/trigger`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.KNOCK_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ actor, recipients: [{ id: userId }], data }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Knock error:", error);
    throw error;
  }
}

export async function sendKnockFeedItem({ userId, feedId, activity }: { userId: string; feedId: string; activity: Record<string, any> }) {
  try {
    const response = await fetch(`https://api.knock.app/v1/feeds/${feedId}/activities`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.KNOCK_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ activities: [activity], actor: { id: userId } }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Knock feed error:", error);
    throw error;
  }
}

const knockExports = {
  sendInAppNotification,
  sendKnockFeedItem,
};

export default knockExports;
