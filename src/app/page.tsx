"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TouchButton } from "@/components/mobile/TouchButton";
import { Card } from "@/components/mobile/Card";
import { Bot, Zap, Mail, Bell, Blocks, ArrowRight } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      <div className="max-w-lg mx-auto px-4">
        <section className="pt-12 pb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex p-4 rounded-3xl bg-primary/10 mb-4">
              <Bot size={48} className="text-primary" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight">
              Agent<span className="text-primary">Flow</span>
            </h1>
            <p className="text-muted-foreground max-w-xs mx-auto text-sm leading-relaxed">
              Unified platform for AI agents, workflows, notifications, and blockchain automation
            </p>
          </motion.div>
        </section>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card variant="glass" padding="md" interactive onClick={() => router.push("/(mobile)/dashboard")}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-blue-500/10">
                <Bot className="text-blue-500" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">AI Agents</h3>
                <p className="text-xs text-muted-foreground">LangGraph + CrewAI powered</p>
              </div>
              <ArrowRight size={18} className="text-muted-foreground" />
            </div>
          </Card>

          <Card variant="glass" padding="md" interactive onClick={() => router.push("/(mobile)/workflows")}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-purple-500/10">
                <Zap className="text-purple-500" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Workflows</h3>
                <p className="text-xs text-muted-foreground">Trigger.dev automation</p>
              </div>
              <ArrowRight size={18} className="text-muted-foreground" />
            </div>
          </Card>

          <Card variant="glass" padding="md" interactive onClick={() => router.push("/(mobile)/notifications")}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-green-500/10">
                <Bell className="text-green-500" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Notifications</h3>
                <p className="text-xs text-muted-foreground">OneSignal + Knock</p>
              </div>
              <ArrowRight size={18} className="text-muted-foreground" />
            </div>
          </Card>

          <Card variant="glass" padding="md" interactive onClick={() => router.push("/(mobile)/profile")}>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-orange-500/10">
                <Blocks className="text-orange-500" size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-bold">Blockchain</h3>
                <p className="text-xs text-muted-foreground">Monad smart contracts</p>
              </div>
              <ArrowRight size={18} className="text-muted-foreground" />
            </div>
          </Card>
        </motion.div>

        <motion.div
          className="py-8 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <TouchButton onClick={() => router.push("/(mobile)/dashboard")} size="lg" className="w-full max-w-xs">
            Get Started <ArrowRight size={18} />
          </TouchButton>
        </motion.div>
      </div>
    </div>
  );
}
