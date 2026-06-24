export interface Agent {
  id: string;
  user_id: string;
  name: string;
  type: string;
  status: "active" | "inactive" | "paused" | "error";
  config: Record<string, any>;
  last_run?: string;
  created_at: string;
  updated_at: string;
}

export interface Workflow {
  id: string;
  user_id: string;
  name: string;
  description?: string;
  workflow_id: string;
  schedule?: string;
  status: "active" | "paused" | "error";
  config: Record<string, any>;
  last_run?: string;
  created_at: string;
  updated_at: string;
}

export interface EmailCampaign {
  id: string;
  user_id: string;
  name: string;
  provider: string;
  subject: string;
  body: string;
  recipients: string[];
  status: "draft" | "sending" | "sent" | "failed";
  sent_at?: string;
  created_at: string;
  updated_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  body: string;
  type: "info" | "success" | "warning" | "error";
  channels: string[];
  data: Record<string, any>;
  read: boolean;
  created_at: string;
}

export interface MonadTransaction {
  id: string;
  user_id: string;
  hash: string;
  from_address: string;
  to_address: string;
  value: string;
  status: "pending" | "confirmed" | "failed";
  block_number?: number;
  created_at: string;
}

export interface TriggerEvent {
  id: string;
  user_id: string;
  event: string;
  workflow: string;
  payload: Record<string, any>;
  status: "pending" | "completed" | "failed";
  result: Record<string, any>;
  created_at: string;
  completed_at?: string;
}
