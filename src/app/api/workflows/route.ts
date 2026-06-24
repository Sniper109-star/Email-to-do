import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { scheduleWorkflow } from "@/lib/integrations/triggerdev";

export async function GET() {
  const { data, error } = await supabaseAdmin
    .from("workflows")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, workflow, schedule, config } = body;

    const { data, error } = await supabaseAdmin
      .from("workflows")
      .insert({ name, workflow, schedule, config })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (schedule) {
      await scheduleWorkflow(workflow, { workflowId: data.id }, { cron: schedule });
    }

    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
