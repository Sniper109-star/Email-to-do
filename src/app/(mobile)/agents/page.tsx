"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/mobile/Card";
import { TouchButton } from "@/components/mobile/TouchButton";
import { BottomSheet } from "@/components/mobile/BottomSheet";
import { Bot, Plus, Play, Pause, Settings, Trash2, MoreVertical } from "lucide-react";
import { AGENT_TEMPLATES } from "@/lib/constants";

export default function MobileAgentsPage() {
  const [showCreateSheet, setShowCreateSheet] = React.useState(false);
  const [agents, setAgents] = React.useState([
    { id: "1", name: "Support Agent", status: "active", tasks: 142, template: "support" },
    { id: "2", name: "Sales Agent", status: "paused", tasks: 89, template: "sales" },
    { id: "3", name: "Research Agent", status: "active", tasks: 56, template: "research" },
  ]);

  return (
    <div className="space-y-6">
      <header className="pt-6 pb-2 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Agents</h1>
          <p className="text-muted-foreground mt-1 text-sm">Manage your AI workforce</p>
        </div>
        <TouchButton onClick={() => setShowCreateSheet(true)} size="sm" className="rounded-full">
          <Plus size={18} />
        </TouchButton>
      </header>

      <div className="space-y-3">
        {agents.map((agent) => (
          <motion.div key={agent.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card key={agent.id} variant="elevated" padding="md" interactive>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/10">
                <Bot className="text-primary" size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold truncate">{agent.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {agent.tasks} tasks completed
                </p>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${agent.status === "active" ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                {agent.status}
              </span>
              <button className="p-2 rounded-full hover:bg-muted transition-colors">
                <MoreVertical size={18} className="text-muted-foreground" />
              </button>
            </div>
            <div className="flex gap-2 mt-4 pt-3 border-t border-border/50">
              <TouchButton variant="ghost" size="sm" className="flex-1">
                <Play size={14} /> Run
              </TouchButton>
              <TouchButton variant="ghost" size="sm" className="flex-1">
                <Settings size={14} /> Config
              </TouchButton>
              <TouchButton variant="ghost" size="sm" className="text-destructive">
                <Trash2 size={14} />
              </TouchButton>
            </div>
          </Card>
          </motion.div>
        ))}
      </div>

      <BottomSheet isOpen={showCreateSheet} onClose={() => setShowCreateSheet(false)} title="Create Agent">
        <div className="p-4 space-y-3">
          {AGENT_TEMPLATES.map((template) => (
            <TouchButton key={template.id} variant="outline" className="w-full h-auto py-4 px-4 flex-col items-start gap-1">
              <span className="font-bold">{template.name}</span>
              <span className="text-xs text-muted-foreground text-left">{template.description}</span>
            </TouchButton>
          ))}
        </div>
      </BottomSheet>
    </div>
  );
}
