"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/mobile/Card";
import { TouchButton } from "@/components/mobile/TouchButton";
import { Bot, Zap, Mail, Bell, TrendingUp, Activity } from "lucide-react";

const stats = [
  { label: "Active Agents", value: "12", icon: Bot, color: "text-blue-500" },
  { label: "Workflows", value: "8", icon: Zap, color: "text-purple-500" },
  { label: "Emails Sent", value: "1.2K", icon: Mail, color: "text-green-500" },
  { label: "Notifications", value: "34", icon: Bell, color: "text-orange-500" },
];

const recentActivity = [
  { title: "Email campaign completed", time: "2 min ago", status: "success" },
  { title: "Agent task failed", time: "15 min ago", status: "error" },
  { title: "New workflow triggered", time: "1 hour ago", status: "info" },
  { title: "Notification sent to 50 users", time: "3 hours ago", status: "success" },
];

export default function MobileDashboardPage() {
  return (
    <div className="space-y-6">
      <header className="pt-6 pb-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1 text-sm">Your AI operations overview</p>
      </header>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <Card variant="elevated" padding="md" className="flex flex-col gap-2">
                <div className={`p-2 rounded-xl bg-muted/50 w-fit ${stat.color}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Recent Activity</h2>
          <TouchButton variant="ghost" size="sm">View all</TouchButton>
        </div>
        <Card variant="default" padding="none" className="divide-y divide-border">
          {recentActivity.map((activity) => (
            <div key={activity.title} className="flex items-center gap-3 p-4">
              <div className={`w-2 h-2 rounded-full ${activity.status === "success" ? "bg-green-500" : activity.status === "error" ? "bg-red-500" : "bg-blue-500"}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{activity.title}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
              <TrendingUp size={16} className="text-muted-foreground" />
            </div>
          ))}
        </Card>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 gap-3">
          <TouchButton variant="outline" className="h-20 flex-col gap-2">
            <Bot size={24} />
            <span className="text-xs">New Agent</span>
          </TouchButton>
          <TouchButton variant="outline" className="h-20 flex-col gap-2">
            <Zap size={24} />
            <span className="text-xs">New Workflow</span>
          </TouchButton>
        </div>
      </section>
    </div>
  );
}
