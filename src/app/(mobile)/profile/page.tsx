"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/mobile/Card";
import { TouchButton } from "@/components/mobile/TouchButton";
import { BottomSheet } from "@/components/mobile/BottomSheet";
import { User, Wallet, Key, Shield, Palette, HelpCircle, LogOut, ChevronRight, Blocks, Mail } from "lucide-react";

const menuSections = [
  {
    title: "Account",
    items: [
      { icon: User, label: "Profile", description: "Manage your info" },
      { icon: Mail, label: "Email Settings", description: "Resend, Brevo" },
      { icon: Wallet, label: "Wallet", description: "Connect Monad" },
      { icon: Blocks, label: "Blockchain", description: "Smart contracts" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { icon: Palette, label: "Appearance", description: "Themes and display" },
      { icon: Key, label: "API Keys", description: "Manage integrations" },
      { icon: Shield, label: "Security", description: "2FA and sessions" },
      { icon: HelpCircle, label: "Help & Support", description: "Get assistance" },
    ],
  },
];

export default function MobileProfilePage() {
  const [showLogoutSheet, setShowLogoutSheet] = React.useState(false);

  return (
    <div className="space-y-6">
      <header className="pt-6 pb-2">
        <h1 className="text-3xl font-extrabold tracking-tight">Profile</h1>
        <p className="text-muted-foreground mt-1 text-sm">Account and settings</p>
      </header>

      <Card variant="glass" padding="md" className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
          U
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-bold truncate">User</h2>
          <p className="text-xs text-muted-foreground truncate">user@example.com</p>
          <p className="text-[10px] text-muted-foreground mt-1">Free Plan</p>
        </div>
        <ChevronRight size={18} className="text-muted-foreground" />
      </Card>

      {menuSections.map((section) => (
        <section key={section.title}>
          <h2 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3 px-1">{section.title}</h2>
          <Card variant="default" padding="none" className="divide-y divide-border">
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <button key={item.label} className="flex items-center gap-4 w-full p-4 active:bg-muted/50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-muted/50">
                    <Icon size={20} className="text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <p className="font-semibold text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <ChevronRight size={16} className="text-muted-foreground" />
                </button>
              );
            })}
          </Card>
        </section>
      ))}

      <section>
        <TouchButton variant="outline" className="w-full text-destructive border-destructive/30" onClick={() => setShowLogoutSheet(true)}>
          <LogOut size={18} />
          Log Out
        </TouchButton>
      </section>

      <BottomSheet isOpen={showLogoutSheet} onClose={() => setShowLogoutSheet(false)} title="Confirm Logout">
        <div className="p-4 space-y-4">
          <p className="text-sm text-muted-foreground">Are you sure you want to log out of your account?</p>
          <div className="flex gap-3">
            <TouchButton variant="secondary" className="flex-1" onClick={() => setShowLogoutSheet(false)}>
              Cancel
            </TouchButton>
            <TouchButton variant="danger" className="flex-1">
              Logout
            </TouchButton>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
}
