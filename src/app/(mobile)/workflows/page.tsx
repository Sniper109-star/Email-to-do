"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/mobile/Card";
import { TouchButton } from "@/components/mobile/TouchButton";
import { BottomSheet } from "@/components/mobile/BottomSheet";
import { Zap, Play, Pause, Settings, Trash2, Clock, Calendar } from "lucide-react";
import { WORKFLOW_TEMPLATES } from "@/lib/constants";

export default function MobileWorkflowsPage() {
  const [showCreateSheet, setShowCreateSheet] = React.useState(false);
  const [workflows, setWorkflows] = React.useState([
    { id: "1", name: "Email Campaign", status: "active", runs: 342, schedule: "Daily 9AM" },
    { id: "2", name: "Lead Nurturing", status: "active", runs: 189, schedule: "Weekly" },
    { id: "3", name: "Report Generation", status: "paused", runs: 56, schedule: "Monthly" },
  ]);

  return (
    <div className="space-y-6">
      <header className="pt-6 pb-2 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">Workflows</h1>
          <p className="text-muted-foreground mt-1 text-sm">Trigger.dev automation</p>
        </div>
        <TouchButton onClick={() => setShowCreateSheet(true)} size="sm" className="rounded-full">
          <Zap size={18} />
        </TouchButton>
      </header>

      <motion.div className="space-y-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {workflows.map((workflow) => (
          <Card key={workflow.id} variant="elevated" padding="md" interactive>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-purple-100 dark:bg-purple-900/30">
                <Zap className="text-purple-600 dark:text-purple-400" size={22} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold truncate">{workflow.name}</h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock size={12} /> {workflow.runs} runs
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} /> {workflow.schedule}
                  </span>
                </div>
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${workflow.status === "active" ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                {workflow.status}
              </span>
            </div>
            <div className="flex gap-2 mt-4 pt-3 border-t border-border/50">
              <TouchButton variant="ghost" size="sm" className="flex-1">
                <Play size={14} /> Trigger
              </TouchButton>
              <TouchButton variant="ghost" size="sm" className="flex-1">
                <Settings size={14} /> Config
              </TouchButton>
              <TouchButton variant="ghost" size="sm" className="text-destructive">
                <Trash2 size={14} />
              </TouchButton>
            </div>
          </Card>
        ))}
      </motion.div>

      <BottomSheet isOpen={showCreateSheet} onClose={() => setShowCreateSheet(false)} title="Add Workflow">
        <div className="p-4 space-y-3">
          {WORKFLOW_TEMPLATES.map((template) => (
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
