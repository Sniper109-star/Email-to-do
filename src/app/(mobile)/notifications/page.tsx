"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/mobile/Card";
import { TouchButton } from "@/components/mobile/TouchButton";
import { Bell, Mail, MessageSquare, Smartphone, Check, CheckCheck, Trash2 } from "lucide-react";

const channels = [
  { name: "Push Notifications", icon: Smartphone, enabled: true, description: "OneSignal" },
  { name: "In-App Notifications", icon: Bell, enabled: true, description: "Knock" },
  { name: "Email Notifications", icon: Mail, enabled: true, description: "Resend" },
  { name: "SMS Notifications", icon: MessageSquare, enabled: false, description: "Coming Soon" },
];

const recentNotifications = [
  { id: "1", title: "Workflow Completed", body: "Email Campaign finished successfully", time: "2m ago", read: false, channel: "push" },
  { id: "2", title: "Agent Alert", body: "Support Agent needs attention", time: "15m ago", read: false, channel: "in-app" },
  { id: "3", title: "Weekly Report", body: "Your weekly summary is ready", time: "1h ago", read: true, channel: "email" },
  { id: "4", title: "Payment Received", body: "Transaction confirmed on Monad", time: "3h ago", read: true, channel: "in-app" },
];

export default function MobileNotificationsPage() {
  return (
    <div className="space-y-6">
      <header className="pt-6 pb-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground mt-1 text-sm">Stay updated across channels</p>
      </header>

      <section>
        <h2 className="text-lg font-bold mb-3">Channels</h2>
        <Card variant="default" padding="none" className="divide-y divide-border">
          {channels.map((channel) => {
            const Icon = channel.icon;
            return (
              <div key={channel.name} className="flex items-center gap-4 p-4">
                <div className={`p-3 rounded-2xl ${channel.enabled ? "bg-primary/10" : "bg-muted"}`}>
                  <Icon size={20} className={channel.enabled ? "text-primary" : "text-muted-foreground"} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{channel.name}</p>
                  <p className="text-xs text-muted-foreground">{channel.description}</p>
                </div>
                <button className={`w-12 h-7 rounded-full p-1 transition-colors ${channel.enabled ? "bg-primary" : "bg-muted"}`}>
                  <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform ${channel.enabled ? "translate-x-5" : "translate-x-0"}`} />
                </button>
              </div>
            );
          })}
        </Card>
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Recent</h2>
          <TouchButton variant="ghost" size="sm">
            <CheckCheck size={16} /> Mark all read
          </TouchButton>
        </div>
        <Card variant="default" padding="md" className="divide-y divide-border">
          <div className="space-y-3">
            {recentNotifications.map((notif) => (
              <div key={notif.id} className={`flex gap-3 ${!notif.read ? "opacity-100" : "opacity-60"}`}>
                <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${notif.read ? "bg-transparent" : "bg-primary"}`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold">{notif.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{notif.body}</p>
                  <p className="text-[10px] text-muted-foreground mt-1">{notif.time}</p>
                </div>
                <div className="flex gap-1">
                  {!notif.read && (
                    <button className="p-2 rounded-full hover:bg-muted transition-colors">
                      <Check size={14} className="text-muted-foreground" />
                    </button>
                  )}
                  <button className="p-2 rounded-full hover:bg-muted transition-colors">
                    <Trash2 size={14} className="text-muted-foreground" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
