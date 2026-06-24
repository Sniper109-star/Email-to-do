import { NextResponse } from "next/server";
import { sendPushNotification, createUser } from "@/lib/integrations/onesignal";
import { sendInAppNotification, sendKnockFeedItem } from "@/lib/integrations/knock";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { provider, userId, content, data, type } = body;

    let result;
    switch (provider) {
      case "onesignal":
        result = await sendPushNotification({
          playerIds: [userId],
          contents: { en: content },
          data,
        });
        break;
      case "knock":
        result = await sendInAppNotification({
          userId,
          type: type || "default",
          data,
        });
        break;
      case "knock-feed":
        result = await sendKnockFeedItem({
          userId,
          feedId: "main",
          activity: { verb: "notified", object: data?.title || "Notification", foreign_id: data?.id },
        });
        break;
      default:
        result = await sendPushNotification({
          playerIds: [userId],
          contents: { en: content },
          data,
        });
    }

    return NextResponse.json({ result, provider });
  } catch {
    return NextResponse.json({ error: "Failed to send notification" }, { status: 500 });
  }
}
