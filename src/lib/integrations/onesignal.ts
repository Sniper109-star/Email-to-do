// @ts-nocheck
import webpush from "web-push";

export async function sendPushNotification({ playerIds, contents, headings, data }: { playerIds: string[]; contents: Record<string, string>; headings?: Record<string, string>; data?: Record<string, any> }) {
  try {
    for (const playerId of playerIds) {
      const payload = JSON.stringify({ contents, headings, data });
      await webpush.sendNotification({ endpoint: playerId, keys: { p256dh: "", auth: "" } }, payload);
    }
    return { success: true, sent: playerIds.length };
  } catch {
    return { success: false };
  }
}

export async function createUser(userId: string, tags: Record<string, any> = {}) {
  try {
    if (webpush.setVapidDetails) {
      webpush.setVapidDetails("mailto:example@app.com", process.env.NEXTPUBLIC_ONESIGNAL_VAPID_PUBLIC_KEY || "", process.env.NEXTPUBLIC_ONESIGNAL_VAPID_PRIVATE_KEY || "");
    }
  } catch {}
  return { id: userId, tags };
}

export default webpush;
