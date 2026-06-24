-- AgentFlow Database Schema

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles (extends Supabase Auth users)
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  plan TEXT DEFAULT 'free' CHECK (plan IN ('free', 'pro', 'enterprise')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Agents
CREATE TABLE IF NOT EXISTS agents (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('support', 'sales', 'research', 'code', 'data', 'social', 'custom')),
  status TEXT DEFAULT 'inactive' CHECK (status IN ('active', 'inactive', 'paused', 'error')),
  config JSONB DEFAULT '{}',
  last_run TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Workflows
CREATE TABLE IF NOT EXISTS workflows (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  workflow_id TEXT NOT NULL,
  schedule TEXT,
  status TEXT DEFAULT 'paused' CHECK (status IN ('active', 'paused', 'error')),
  config JSONB DEFAULT '{}',
  last_run TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Email Campaigns
CREATE TABLE IF NOT EXISTS email_campaigns (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  name TEXT NOT NULL,
  provider TEXT NOT NULL CHECK (provider IN ('resend', 'agentmail', 'brevo')),
  subject TEXT NOT NULL,
  body TEXT NOT NULL,
  recipients JSONB DEFAULT '[]',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'sending', 'sent', 'failed')),
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Notifications
CREATE TABLE IF NOT EXISTS notifications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  type TEXT DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error')),
  channels JSONB DEFAULT '[]',
  data JSONB DEFAULT '{}',
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Blockchain Transactions (Monad)
CREATE TABLE IF NOT EXISTS monad_transactions (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  hash TEXT UNIQUE NOT NULL,
  from_address TEXT NOT NULL,
  to_address TEXT NOT NULL,
  value TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'failed')),
  block_number BIGINT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger.dev Events
CREATE TABLE IF NOT EXISTS trigger_events (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  event TEXT NOT NULL,
  workflow TEXT NOT NULL,
  payload JSONB DEFAULT '{}',
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  result JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- Indexes
CREATE INDEX idx_agents_user_id ON agents(user_id);
CREATE INDEX idx_workflows_user_id ON workflows(user_id);
CREATE INDEX idx_email_campaigns_user_id ON email_campaigns(user_id);
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_monad_transactions_user_id ON monad_transactions(user_id);
CREATE INDEX idx_trigger_events_user_id ON trigger_events(user_id);

-- Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE agents ENABLE ROW LEVEL SECURITY;
ALTER TABLE workflows ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_campaigns ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE monad_transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE trigger_events ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view own profile" ON profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users can view own agents" ON agents FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create agents" ON agents FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own agents" ON agents FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own agents" ON agents FOR DELETE USING (auth.uid() = user_id);
CREATE POLICY "Users can view own workflows" ON workflows FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create workflows" ON workflows FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update own workflows" ON workflows FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete own workflows" ON workflows FOR DELETE USING (auth.uid() = user_id);
CREATE POLICY "Users can view own emails" ON email_campaigns FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create emails" ON email_campaigns FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view own notifications" ON notifications FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can update own notifications" ON notifications FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can view own transactions" ON monad_transactions FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create transactions" ON monad_transactions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can view own events" ON trigger_events FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create events" ON trigger_events FOR INSERT WITH CHECK (auth.uid() = user_id);
