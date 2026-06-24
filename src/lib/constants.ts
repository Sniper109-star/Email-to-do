export const APP_NAME = "AgentFlow";
export const APP_VERSION = "1.0.0";
export const SUPPORTED_NETWORKS = ["monad"];

export const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "LayoutDashboard", path: "/(mobile)/dashboard" },
  { id: "agents", label: "Agents", icon: "Bot", path: "/(mobile)/agents" },
  { id: "workflows", label: "Workflows", icon: "Zap", path: "/(mobile)/workflows" },
  { id: "notifications", label: "Alerts", icon: "Bell", path: "/(mobile)/notifications" },
  { id: "profile", label: "Profile", icon: "User", path: "/(mobile)/profile" },
];

export const AGENT_TEMPLATES = [
  { id: "support", name: "Support Agent", description: "Customer support automation", icon: "Headphones" },
  { id: "sales", name: "Sales Agent", description: "Lead qualification and outreach", icon: "TrendingUp" },
  { id: "research", name: "Research Agent", description: "Market and competitor analysis", icon: "Search" },
  { id: "code", name: "Code Agent", description: "Code review and generation", icon: "Code2" },
  { id: "data", name: "Data Agent", description: "Data extraction and processing", icon: "Database" },
  { id: "social", name: "Social Agent", description: "Social media management", icon: "Share2" },
];

export const WORKFLOW_TEMPLATES = [
  { id: "email-automation", name: "Email Automation", description: "Auto-send emails based on events", icon: "Mail" },
  { id: "lead-nurture", name: "Lead Nurturing", description: "Sequential outreach to leads", icon: "Users" },
  { id: "report-generation", name: "Report Generation", description: "Weekly automated reports", icon: "BarChart3" },
  { id: "smart-contract", name: "Smart Contract", description: "Monad blockchain execution", icon: "Blocks" },
  { id: "notification-pipeline", name: "Notification Pipeline", description: "Multi-channel alerts", icon: "BellRing" },
  { id: "data-sync", name: "Data Sync", description: "Sync data across services", icon: "RefreshCw" },
];

export const CRON_SCHEDULES = {
  HOURLY: "0 * * * *",
  DAILY: "0 9 * * *",
  WEEKLY: "0 9 * * 1",
  MONTHLY: "0 9 1 * *",
};
